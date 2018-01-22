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

<section class="container p-center fade-hidden" id="anchor-slide">
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

<section class="container p-center fade-hidden" id="vision">
    <div class="row">
        <div class="col-xs-12 m-t-50 t-center">
            <a href="#vision" title="Vision" class="h2">Vision</a>
            <p>
              <?php
              $title = $conn->quote("VISION");
              echo getDescription($conn, $title);
              ?>
          </p>
      </div>
  </div>
</section>

<section class="container p-center fade-hidden" id="mission">
    <div class="row">
        <div class="col-xs-12 m-t-50 t-center">
            <a href="#mission" title="Mission" class="h2">Mission</a>
            <p>
              <?php
              $title = $conn->quote("MISSION");
              echo getDescription($conn, $title);
              ?>
          </p>
      </div>
  </div>
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
            <p style="text-align: justify;">
              <?php
              $title = $conn->quote("LEGALITY");
              echo getDescription($conn, $title);
              ?>
          </p>
      </div>
  </div>
</section>

<!-- <section class="container-fluid p-0 m-t-20 fade-hidden">
    <div class="row">
        <div class="col-xs-12">
        </div>
    </div>
</section> -->

<section class="container hp-awards p-center fade-hidden" id="awards">
    <div class="row">
        <div class="col-xs-12 m-b-35 m-t-50 t-center">
            <a href="#awards" title="Awards" class="h2">Awards</a>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <div class="col-xs-6 col-md-3 m-b-10">
            <img src="images/no_available.png">
        </div>
        <div class="col-xs-6 col-md-3 m-b-10">
            <img src="images/no_available.png">
        </div>
        <div class="col-xs-6 col-md-3 m-b-10">
            <img src="images/no_available.png">
        </div>
        <div class="col-xs-6 col-md-3 m-b-10">
            <img src="images/no_available.png">
        </div>
        <div class="col-xs-12 m-t-55 t-center"> <a href="#" title="Awards" class="btn btn-default">SHOW ALL</a></div>
        <!-- <div class="col-xs-12 m-t-55 t-center"> <a href="https://www.p3parks.com/en/company/awards/" title="Awards" class="btn btn-default">SHOW ALL</a></div> -->
    </div>
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