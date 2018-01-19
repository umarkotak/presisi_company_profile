<?php
if (isset($_GET['page'])) {
  $page = $_GET['page'];

  if ($page == 'home')                      { include "pages/home.php"; }
  if ($page == 'company')                   { include "pages/company.php"; }
  if ($page == 'services')                  { include "pages/services.php"; }
  if ($page == 'careers')                   { include "pages/careers.php"; }
  if ($page == 'downloads')                 { include "pages/downloads.php"; }
  if ($page == 'contact')                   { include "pages/contact.php"; }

} else {
  header("location: ?page=home");
}
?>