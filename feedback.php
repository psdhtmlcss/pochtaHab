<?php
  $field_name: $_GET['nameInput'];
  $field_phone = $_GET['phoneInput'];
  $filed_email = $_GET['emailInput'];

  $mail_to = 'pochtoviy-yashik@mail.ru';
  $subject = 'Обратный звонок '.$field_phone;

  $body_message = 'Имя: '.$field_name."\n".'Телефон '.$field_phone."\n".'Email: '.$field_email;

  $headers = 'From: '.$E-Mail."\r\n";
  $headers .= 'Reply-To: '.$E-Mail."\r\n";

  $mail_status = mail($mail_to, $subject, $body_message, $headers);

  if ($mail_status) { ?>
  <script language="javascript" type="text/javascript">
    alert('Спасибо за заявку! В ближайшее время наш менеджер свяжется с вами.');
    window.location = 'index.html';
  </script>
  <?php
  }
  else { ?>
  <script language="javascript" type="text/javascript">
    alert('Сообщение не было отправлено, попробуйте повторить попытку позже.');
    window.location = 'index.html';
  </script>
  <?php
  }
?>