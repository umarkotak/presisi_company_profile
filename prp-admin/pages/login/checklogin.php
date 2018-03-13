<?php
session_start();
include("../../lib/connection.php");

$username  = $conn->quote($_POST['username']);
$password  = $conn->quote($_POST ['password']);

$check       = $conn->prepare("SELECT * FROM admin_prp WHERE username = $username AND password = $password");
$check->execute();
$data      = $check->fetch();
$row    = $check->rowCount();

if ($row>0)
{
  $_SESSION['username'] = $data['username'];
  $_SESSION['password'] = $data['password'];

  echo"<meta http-equiv='refresh' content='0;
  url=../index.php'>";
}
else
{
  echo"<br /><br /><center> Login Failed!<br>
  <b><a>Wrong username and password!</a></b></center>";
  echo"<meta http-equiv='refresh' content='1;
  url=login.php'>";
}
?>
