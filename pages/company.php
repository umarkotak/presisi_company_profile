<?php
function getDescription($conn, $title){
    $sql = $conn->prepare("SELECT sp_description FROM second_page WHERE sp_title=$title LIMIT 1");
    $sql->execute();
    $data = $sql->fetch();
    return $data['sp_description'];
}
?>

<main class="op-0" style="min-height: calc(100vh - 78px); opacity: 1;">
<div id="sub-nav">
    <span class="lastitem">Company</span>
</div>
<!-- content -->
<section class="container-fluid fade-hidden fade-visible animated fadeIn full-visible">
    <div class="row">
        <div class="image-cover loaded" data-src="http://localhost/presisi_company_profile/images/company_1.png" style="max-height: 537px; background: url(&quot;http://localhost/presisi_company_profile/images/company_1.png&quot;);">
            <div class="filter"></div>

            <div class="center-box">
                <a href="#" title="Our Story" class="h1">Our Company</a>
                <p>
                    Lorem ipsum
                </p>
            </div>

            <div class="container link-box-bottom">
                <div class="row">
                    <div class="col-xs-12 t-center company-buttons">
                        <div class="col-xs-12 col-md-one-fifth"> <a href="#anchor-slide" title="Who we are" class="btn btn-default">Who we are</a></div>
                        <div class="col-xs-12 col-md-one-fifth"> <a href="#vision" title="Vision & Mission" class="btn btn-default">Vision & Mission</a></div>
                        <div class="col-xs-12 col-md-one-fifth"> <a href="#ourvalues" title="Our values" class="btn btn-default">Our values</a></div>
                        <div class="col-xs-12 col-md-one-fifth"> <a href="#legality" title="Legality" class="btn btn-default">Legality</a></div>
                        <div class="col-xs-12 col-md-one-fifth"> <a href="#awards" title="Legality" class="btn btn-default">Awards</a></div>
                    </div>
                    <a class="company-arrow" href="#" id="hp-arrow"><img src="https://c.p3parks.com/images/design/2016/hp-arrow.png" width="80" height="41" alt="[design/2016/hp-arrow.png]"></a></div>
                </div>
            </div>
        </div>
</section>

<section class="container p-center fade-hidden" id="anchor-slide" style="border-bottom: solid 1px #b3d9ff;">
    <div class="row">
      <div class="col-xs-12 m-t-50 t-center">
        <a href="#anchor-slide" title="Who we are" class="h2">Who we are</a>
        <p style="text-align: justify;">
          <?php
          $title = $conn->quote("WHO WE ARE");
          echo getDescription($conn, $title);
          ?>
        </p>
      </div>
  </div>
</section>

<section class="container p-center fade-hidden" id="vision" style="border-bottom: solid 1px #b3d9ff;">
  <div class="row">
    <div class="col-xs-6 m-t-50 t-center">
      <a href="#vision" title="Vision" class="h2"><i class="fa fa-dot-circle-o"></i>Vision</a>
      <p>
        <?php
        $title = $conn->quote("VISION");
        echo getDescription($conn, $title);
        ?>
      </p>
    </div>

    <div class="col-xs-6 m-t-50 t-center" id="mission">
      <a href="#vision" title="Vision" class="h2"><i class="fa fa-check-circle-o"></i>Mission</a>
      <p>
        <?php
        $title = $conn->quote("MISSION");
        echo getDescription($conn, $title);
        ?>
      </p>
    </div>
  </div>

  <br><br>
</section>



<section class="container p-center fade-hidden" id="ourvalues">
    <div class="row">
        <div class="col-xs-12 m-t-50 t-center">
            <a href="#ourvalues" title="Our values" class="h2">Our values</a>
            <p>
              <?php
              $title = $conn->quote("OUR VALUES");
              echo getDescription($conn, $title);
              ?>
          </p>
      </div>
  </div>
</section>

<section class="container p-center fade-hidden" id="legality">
    <div class="row">
        <div class="col-xs-12 m-t-50 t-center">
            <a href="#legality" title="Legality" class="h2">Legality</a>
            <p style="text-align: center;">
              <?php
              $title = $conn->quote("LEGALITY");
              echo getDescription($conn, $title);
              ?>
          </p>
      </div>
  </div>
  <br><br>
</section>

<!-- /content -->
</main>

<script>
    $(document).ready(function(){
        // Add smooth scrolling to all links
        $("a").on('click', function(event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();
                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({scrollTop: $(hash).offset().top}, 1500, function(){
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    });
</script>