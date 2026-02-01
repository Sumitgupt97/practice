<?php
$config = array(
    'protocol'  => 'smtp',
    'smtp_host' => 'smtp.gmail.com',
    'smtp_port' => 587,
    'smtp_user' => 'yourgmail@gmail.com',
    'smtp_pass' => 'your-app-password', // NOT your Gmail login, use App Password
    'smtp_crypto' => 'tls',
    'mailtype'  => 'html',
    'charset'   => 'utf-8',
    'wordwrap'  => TRUE,
    'newline'   => "\r\n",
    'crlf'      => "\r\n"
);
