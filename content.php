<?php
if (isset($_GET['page'])) {
  $page = $_GET['page'];

  if ($page == 'home')                          { include "pages/home.php"; }
  elseif ($page == 'company')                   { include "pages/company.php"; }
  elseif ($page == 'services')                  { include "pages/services.php"; }
  elseif ($page == 'careers')                   { include "pages/careers.php"; }
  elseif ($page == 'downloads')                 { include "pages/downloads.php"; }
  elseif ($page == 'contact')                   { include "pages/contact.php"; }
  elseif ($page == 'what_we_do')                { include "pages/what_we_do.php"; }

  else                                          { include "pages/notfound.php"; }

} else if (isset($_GET['action'])) {

  $action = $_GET['action'];
  if ($action == 'sendmail')                   { include "action/sendmail.php"; }
  elseif ($action == 'downloadfile')           { include "action/downloadfile.php"; }

} else {
  // header("Location: ?page=home");
  $_GET['page'] = "home";
  include "pages/home.php";
}

?>