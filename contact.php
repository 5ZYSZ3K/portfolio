<?php

if(isset($_POST['submit'])){
    $subject = $_POST['subject'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $mymail = 'paw.por@wp.pl';
    $headers = "From: $email";
    $txt = "You have received an email from $email.\n\n$message";
    mail($mymail, $subject, $txt, $headers);
    header("Location: index.html");
}

?>