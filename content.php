<?php
if (isset($_GET['page'])) {
  $page = $_GET['page'];

  if ($page == 'home')                          { include "pages/home.php"; }
  elseif ($page == 'company')                   { include "pages/company.php"; }
  elseif ($page == 'services')                  { include "pages/services.php"; }
  elseif ($page == 'careers')                   { include "pages/careers.php"; }
  elseif ($page == 'downloads')                 { include "pages/downloads.php"; }
  elseif ($page == 'contact')                   { include "pages/contact.php"; }


  else                                          { include "pages/notfound.php"; }

} else {
  // header("Location: ?page=home");
  $_GET['page'] = "home";
  include "pages/home.php";
}
?>