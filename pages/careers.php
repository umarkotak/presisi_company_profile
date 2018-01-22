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
      <div class="image-cover loaded" data-src="http://localhost/presisi_company_profile/images/company_1.png" style="max-height: 537px; background: url(&quot;http://localhost/presisi_company_profile/images/company_1.png&quot;);">
        <div class="filter"></div>

        <div class="center-box">
          <a href="#" title="Grow with Presisi" class="h1">Grow with Presisi</a>
        </div>

        <div class="container link-box-bottom">
          <div class="row">
            <a class="company-arrow" href="#" id="hp-arrow"><img src="https://c.p3parks.com/images/design/2016/hp-arrow.png" width="80" height="41" alt="[design/2016/hp-arrow.png]"></a></div>
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