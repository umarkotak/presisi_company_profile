<?php  
function getDescription($conn, $title){
  $sql = $conn->prepare("SELECT ftp_description FROM fourth_page WHERE ftp_title=$title LIMIT 1");
  $sql->execute();
  $data = $sql->fetch();
  return $data['ftp_description'];
}
?>

<main class="op-0" style="min-height: calc(100vh - 78px); opacity: 1;">
  <div id="sub-nav">
    <span class="lastitem">Careers</span>
  </div>
  <!-- content -->
  <section class="container-fluid fade-hidden fade-visible animated fadeIn full-visible">
    <div class="row">
      <div class="image-cover loaded" data-src="images/career_image3.jpg" style="max-height: 537px; background: url(&quot;images/career_image3.jpg&quot;);">
        <div class="filter"></div>

        <div class="center-box">
          <a href="#" title="Grow with Presisi" class="h1">Grow with Presisi</a>
        </div>

        <div class="container link-box-bottom">
          <div class="row">
            <a class="company-arrow" href="#" id="hp-arrow"><img src="images/hp-arrow.png" width="80" height="41" alt="[design/2016/hp-arrow.png]"></a></div>
          </div>
        </div>
      </div>
    </section>

    <section class="container p-center fade-hidden" id="anchor-slide">
      <div class="row">
        <div class="col-xs-12 m-t-50 t-center">
          <a href="#anchor-slide" title="Careers" class="h2">Careers</a>
          <p style="text-align: justify;">
            <?php
            $title = $conn->quote("Grow with Presisi");
            echo getDescription($conn, $title);
            ?>
          </p>
        </div>
      </div>
    </section>
  <!-- /content -->
</main>
<a href="#" id="slide-top" style="display:none;"><i class="fa fa-arrow-circle-o-up" aria-hidden="true" style="font-size: 4.0rem;"></i></a>