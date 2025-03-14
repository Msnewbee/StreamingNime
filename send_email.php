<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
        die("CSRF token tidak valid.");
    }

    $name = strip_tags(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']), ENT_QUOTES, 'UTF-8');

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: index.html?error=invalid");
        exit;
    }
    
    $to = "bilariko2@gmail.com";
    $subject = "Pesan dari " . $name;
    $headers = "From: noreply@example.com\r\n" .
               "Reply-To: $email\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    mail($to, $subject, $message, $headers);
    header("Location: index.html?success=1");
    exit;
}

$_SESSION['csrf_token'] = bin2hex(random_bytes(32));
?>
