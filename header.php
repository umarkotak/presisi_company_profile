<?php
function aktif($page){
  if (isset($_GET['page'])) {
    if ($page == $_GET['page']) {
      // echo "class=\"menuactive\"";
      echo "style=\"background-color: #ccdcff; padding: 10px; border-radius: 5px;\"";
    }
  }
}
?>

<header class="container-fluid op-0" style="opacity: 1;">
  <div class="row">
    <div class="col-xs-12">
      <a href="" id="btn-icon-home"><img src="images/logo.jpg" style=""></a>

      <div class="horizontal-menu">
        <ul id="main-menu">
          <li><a <?php aktif("home") ?> href="?page=home"><i class="fa fa-home"></i> Home</a></li>
          <li><a <?php aktif("company") ?> href="?page=company"><i class="fa fa-industry"></i> Company</a></li>
          <li><a <?php aktif("services") ?> href="?page=services"><i class="fa fa-gears"></i> Services</a></li>
          <li><a <?php aktif("careers") ?> href="?page=careers"><i class="fa fa-users"></i> Careers</a></li>
          <li><a <?php aktif("downloads") ?> href="?page=downloads"><i class="fa fa-file"></i> Downloads</a></li>
          <li><a <?php aktif("contact") ?> href="?page=contact"><i class="fa fa-phone"></i> Contact Us</a></li>
        </ul>
      </div>

      <a href="#" id="btn-icon-bar">
        <span class="icon-bar-box">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </span>
      </a>
    </div>
  </div>
</header>

<nav class="closed">
  <ul id="main-menu">
    <li><a <?php aktif("home") ?> href="?page=home">Home</a></li>
    <li><a <?php aktif("company") ?> href="?page=company">Company</a></li>
    <li><a <?php aktif("services") ?> href="?page=services">Services</a></li>
    <li><a <?php aktif("careers") ?> href="?page=careers">Careers</a></li>
    <li><a <?php aktif("downloads") ?> href="?page=downloads">Downloads</a></li>
    <li><a <?php aktif("contact") ?> href="?page=contact">Contact Us</a></li>
  </ul>
</nav>