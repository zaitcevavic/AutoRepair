<?php
    $email = $_POST['email'];
    $name = $_POST['name'];
    $message = $_POST['angryForm'];
    $phone = $_POST['phone'];

    $to = "email";
    $subject = "=?utf-8?B?".base64_encode("Ремонт автомобиля")."?=";
    $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

    $success = mail($to, $subject, "Имя: ".$name."<br>Номер телефона: " .$phone. "<br>Сообщение: ".$message, $headers);

    header("Location: ../../index.html");
    
?>