<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil data dari form
    $name    = strip_tags(trim($_POST["name"]));
    $email   = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Validasi data
    if ( empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL) ) {
        // Jika data tidak valid, redirect kembali ke form
        header("Location: index.html?error=invalid");
        exit;
    }

    // Set email penerima
    $recipient = "bilariko2@gmial.com";

    // Set subjek email
    $subject = "Pesan dari $name";

    // Set isi email
    $email_content  = "Nama: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Pesan:\n$message\n";

    // Set header email
    $email_headers = "From: $name <$email>";

    // Kirim email
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        header("Location: index.html?success=1");
    } else {
        header("Location: index.html?error=sendfailed");
    }
} else {
    header("Location: index.html");
    exit;
}
?>
