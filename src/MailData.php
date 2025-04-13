<?php
$mail_to_send_to = "cscommunitydev@gmail.com";
$from_email = "contact@infinitemarketsolutions.ae";
   
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

if (!empty($name) && !empty($email) && !empty($phone) && !empty($message)) {
    $subject = "Message subject";
    $message = "\r\n" . "Name: $name" . "\r\n" . "Email : $email" . "\r\n" . "phone : $phone" . "\r\n" . "Area :" . $message; //get recipient name in contact form
    $headers = "From: $from_email" . "\r\n" . "Reply-To: $email";
    $a = mail($mail_to_send_to, $subject, $message, $headers);
    if ($a) {
        echo json_encode(array('status' => 'success', 'message' => 'Message was sent, you can send another one'));
    } else {
        echo json_encode(array('status' => 'error', 'message' => 'Message wasn\'t sent, please check that you have changed emails in the bottom'));
    }
} else {
    echo json_encode(array('status' => 'error', 'message' => 'Please fill in all fields'));
}












?>