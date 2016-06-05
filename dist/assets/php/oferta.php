<?php

$errorMSG = "";

// NAME
$compname = $_POST["oferta_name"];

// ADDRESS
$address = $_POST["oferta_address"];

// EMAIL
$email = $_POST["oferta_email"];

// MSG SUBJECT
$msg_cp = $_POST["oferta_contact-person"];

// MESSAGE
$message = $_POST["oferta_message"];

//PHONE
$phone = $_POST["oferta_phone"];

$EmailTo = "oferta@test.inadcod.com";
$Subject = "Cerere oferta primita de pe icpiaf.ro";

// prepare email body text
$Body = "";
$Body .= "Compania: ";
$Body .= $compname;
$Body .= "\n";
$Body .= "Adresa: ";
$Body .= $address;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Telefon: ";
$Body .= $phone;
$Body .= "\n";
$Body .= "Persoana contact: ";
$Body .= $msg_cp;
$Body .= "\n";
$Body .= "Mesaj: ";
$Body .= "\n";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

?>
