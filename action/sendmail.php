<?php
$email_to      = "presisirekayasa@gmail.com";    // your email address
$email_subject = "Contact Form Message"; // email subject line

if(isset($_POST['email'])) {

  if($email_to == "youremailaddress@yourdomain.com") {
    die("This message is for the Webmaster. Please enter your email address into the file 'lite_settings.php'");
  }

  function died($error) {
    echo "Sorry, but there were error(s) found with the form your submitted. ";
    echo "These errors appear below.<br /><br />";
    echo $error."<br /><br />";
    echo "Please go back and fix these errors.<br /><br />";
    die();
  }

  if(!isset($_POST['full_name']) ||
    !isset($_POST['email']) ||
    !isset($_POST['phone']) ||
    !isset($_POST['message'])) {
    died('We are sorry, but there appears to be a problem with the form your submitted.');
}

  $full_name = $_POST['full_name']; // required
  $email_from = $_POST['email']; // required
  $telephone = $_POST['phone']; // not required
  $comments = $_POST['message']; // required

  $error_message = "";

  if(strlen($full_name) < 2) {
    $error_message .= 'Your Name does not appear to be valid.<br />';
  }
  if(strlen($comments) < 2) {
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
  }

  if(strlen($error_message) > 0) {
    died($error_message);
  }
  $email_message = "Form details below.\r\n";

  function clean_string($string) {
    $bad = array("content-type","bcc:","to:","cc:","href");
    return str_replace($bad,"",$string);
  }

  $email_message .= "Full Name: ".clean_string($full_name)."\r\n";
  $email_message .= "Email: ".clean_string($email_from)."\r\n";
  $email_message .= "Telephone: ".clean_string($telephone)."\r\n";
  $email_message .= "Message: ".clean_string($comments)."\r\n";

  $headers = 'From: '.$email_from."\r\n".
  'Reply-To: '.$email_from."\r\n" .
  'X-Mailer: PHP/' . phpversion();

  mail($email_to, $email_subject, $email_message, $headers);

  header("Location: ?page=home");
}
?>

<?php
// $to      = 'presisirekayasa@gmail.com';
// $subject = 'the subject';
// $message = 'hello';
// $headers = 'From: webmaster@example.com' . "\r\n" .
//     'Reply-To: webmaster@example.com' . "\r\n" .
//     'X-Mailer: PHP/' . phpversion();

// mail($to, $subject, $message, $headers);
?>