<?php
    require("/home1/procod14/PHPMailer-master/src/PHPMailer.php");
    require("/home1/procod14//PHPMailer-master/src/SMTP.php");
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    $mail->isSMTP();
    $mail->Host = 'smtp.titan.email'; // Host do servidor SMTP
    $mail->SMTPAuth = true;
    $mail->Username = 'negocios@procodesistemas.com.br'; // Seu email
    $mail->Password = "\g.j&g;'ES#pL<?"; // Sua senha
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;
    $mail->IsHTML(true);
    
    // Acessando variáveis do formulário
    $nome = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $telefone = filter_input(INPUT_POST, 'number', FILTER_SANITIZE_STRING);
    $mensagem = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
    
    
    // Configurações do email a ser enviado
    $mail->setFrom('negocios@procodesistemas.com.br');
    $mail->addAddress('negocios@procodesistemas.com.br'); // Endereço do destinatário
    $mail->Subject = 'Orçamentos - ProCode Sistemas';
    $mail->CharSet = 'UTF-8';
    
    // Construir o corpo do email com as informações do formulário
    $message = "Nome: " . $nome . "<br>";
    $message .= "Email: " . $email . "<br>";
    $message .= "Telefone: " . $telefone . "<br>";
    $message .= "Mensagem: " . $mensagem . "<br>";
    
    $mail->Body = $message;
    
    if(!$mail->Send()) {
        echo "Mailer Error: " . $mail->ErrorInfo;
    } else {
        header("Location: /index.html?success=1");
    }
?>