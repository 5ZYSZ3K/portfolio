<?php

if(isset($_GET['submit'])){
    $subject = $_GET['subject'];
    $email = $_GET['email'];
    $message = $_GET['message'];
    $mailTo = 'paw.por@wp.pl';
    $headers = "From: $email";
    $txt = "You have received an email from $email.\n\n$message";
    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.html");
}

?>
