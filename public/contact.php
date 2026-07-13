<?php
header('Content-Type: application/json');

$configPath = __DIR__ . '/contact-config.php';

if (!file_exists($configPath)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Contact form is not configured']);
    exit;
}

$config = require $configPath;

function smtpRead($socket) {
    $response = '';

    while (($line = fgets($socket, 515)) !== false) {
        $response .= $line;

        if (isset($line[3]) && $line[3] === ' ') {
            break;
        }
    }

    return $response;
}

function smtpCommand($socket, $command, array $expectedCodes) {
    fwrite($socket, $command . "\r\n");
    $response = smtpRead($socket);
    $code = (int) substr($response, 0, 3);

    if (!in_array($code, $expectedCodes, true)) {
        throw new Exception('SMTP command failed: ' . trim($response));
    }

    return $response;
}

function encodeHeader($value) {
    return '=?UTF-8?B?' . base64_encode($value) . '?=';
}

function cleanHeader($value) {
    return trim(str_replace(["\r", "\n"], '', $value));
}

function sendSmtpMail($config, $subject, $body, $replyToEmail, $replyToName) {
    $host = $config['host'];
    $port = (int) $config['port'];
    $secure = $config['secure'] ?? 'ssl';
    $username = $config['username'];
    $password = $config['password'];
    $to = $config['to'];
    $from = $config['from'];
    $fromName = $config['from_name'] ?? $from;
    $remote = ($secure === 'ssl' ? 'ssl://' : '') . $host;

    $socket = fsockopen($remote, $port, $errno, $errstr, 20);

    if (!$socket) {
        throw new Exception('SMTP connection failed: ' . $errstr);
    }

    stream_set_timeout($socket, 20);
    $greeting = smtpRead($socket);

    if ((int) substr($greeting, 0, 3) !== 220) {
        fclose($socket);
        throw new Exception('SMTP greeting failed: ' . trim($greeting));
    }

    try {
        smtpCommand($socket, 'EHLO ' . ($_SERVER['SERVER_NAME'] ?? 'localhost'), [250]);

        if ($secure === 'tls') {
            smtpCommand($socket, 'STARTTLS', [220]);

            if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
                throw new Exception('Unable to start TLS');
            }

            smtpCommand($socket, 'EHLO ' . ($_SERVER['SERVER_NAME'] ?? 'localhost'), [250]);
        }

        smtpCommand($socket, 'AUTH LOGIN', [334]);
        smtpCommand($socket, base64_encode($username), [334]);
        smtpCommand($socket, base64_encode($password), [235]);
        smtpCommand($socket, 'MAIL FROM:<' . $from . '>', [250]);
        smtpCommand($socket, 'RCPT TO:<' . $to . '>', [250, 251]);
        smtpCommand($socket, 'DATA', [354]);

        $headers = [
            'Date: ' . date(DATE_RFC2822),
            'From: ' . encodeHeader($fromName) . ' <' . $from . '>',
            'Reply-To: ' . encodeHeader(cleanHeader($replyToName)) . ' <' . cleanHeader($replyToEmail) . '>',
            'To: <' . $to . '>',
            'Subject: ' . encodeHeader($subject),
            'MIME-Version: 1.0',
            'Content-Type: text/plain; charset=UTF-8',
            'Content-Transfer-Encoding: 8bit',
        ];

        $message = implode("\r\n", $headers) . "\r\n\r\n" . str_replace("\n.", "\n..", $body);
        smtpCommand($socket, $message . "\r\n.", [250]);
        smtpCommand($socket, 'QUIT', [221]);
        fclose($socket);

        return true;
    } catch (Exception $exception) {
        fclose($socket);
        throw $exception;
    }
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!is_array($data)) {
    $data = $_POST;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$company = trim($data['company'] ?? '');
$message = trim($data['message'] ?? '');

if ($name === '' || $email === '' || $message === '') {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Name, email, and message are required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

$subject = 'New website inquiry from ' . $name;

$body = implode("\n", [
    'Name: ' . $name,
    'Email: ' . $email,
    'Company: ' . ($company !== '' ? $company : 'Not provided'),
    '',
    'Message:',
    $message,
]);

try {
    sendSmtpMail($config, $subject, $body, $email, $name);
} catch (Exception $exception) {
    error_log($exception->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Unable to send message']);
    exit;
}

echo json_encode(['success' => true, 'message' => 'Message sent']);
