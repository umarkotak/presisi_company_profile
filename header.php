<?php
function aktif($page){
  if ($page == $_GET['page']) {
    echo "class=\"menuactive\"";
  }
}
?>

<header class="container-fluid op-0" style="opacity: 1;">
  <div class="row">
    <div class="col-xs-12">
      <a href="" id="btn-icon-home"><img src="images/logo-fix2.png" style="height: 55px; width: 60px; margin: -5px 0px 0px 0px;"></a>

      <div class="horizontal-menu">
        <ul id="main-menu">
          <li><a <?php aktif("home") ?> href="?page=home">Home</a></li>
          <li><a <?php aktif("company") ?> href="?page=company">Company</a></li>
          <li><a <?php aktif("services") ?> href="?page=services">Services</a></li>
          <li><a <?php aktif("careers") ?> href="?page=careers">Careers</a></li>
          <li><a <?php aktif("downloads") ?> href="?page=downloads">Downloads</a></li>
          <li><a <?php aktif("contact") ?> href="?page=contact">Contact Us</a></li>
        </ul>
      </div>

    </div>
  </div>
</header>