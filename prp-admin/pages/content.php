<?php

  if (isset($_GET['show'])) $show=$_GET['show'];
  else $show="home";

  if ($show == "home") include("home.php");
  elseif ($show == "logout") include("login/logout.php");

//------------- FILE MANAGER -------------//
  elseif ($show == "filemanager") include("filemanager/filemanager.php");

  //------------- REPORT -------------//
  elseif ($show == "downloadreport") include("report/downloadreport.php");

else echo"Content Not Found";

?>
