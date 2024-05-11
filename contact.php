<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = 'sah036579@gmail.com'; // Change this to your email address
    $subject = 'New message from your website';
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    
    if (mail($to, $subject, $body)) {
        echo json_encode(array('status' => 'success', 'message' => 'Message sent successfully'));
    } else {
        echo json_encode(array('status' => 'error', 'message' => 'Failed to send message'));
    }
}
?>
