<?php

// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Set up the email
$to = 'ksmithagood@gmail.com';
$subject = 'New message from your website';
$body = "Name: $name\nEmail: $email\nMessage: $message";
$headers = "From: $email\r\nReply-To: $email\r\n";

// Send the email
if (mail($to, $subject, $body, $headers)) {
  // If the email was sent successfully, redirect the user to a thank-you page
  header('Location: /thank-you.html');
} else {
  // If the email could not be sent, display an error message
  echo 'There was an error sending your message.';
}
