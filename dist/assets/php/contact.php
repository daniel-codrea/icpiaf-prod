<?php

$errorMSG = "";

// NAME
$name = $_POST["contact_name"];

// EMAIL
$email = $_POST["contact_email"];

// MSG SUBJECT
$msg_subject = $_POST["contact_subject"];

// MESSAGE
$message = $_POST["contact_message"];

//PHONE
$phone = $_POST["contact_phone"];

$EmailTo = "contact@test.inadcod.com";

// prepare email body text
$Body = "";
$Body .= "Nume: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Telefon: ";
$Body .= $phone;
$Body .= "\n";
$Body .= "Mesaj: ";
$Body .= "\n";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $msg_subject, $Body, "From:".$email);

?>
