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
  <section class="container-fluid fade-visible animated fadeIn full-visible">
    <div class="row">
      <div class="image-cover loaded" data-src="http://localhost/presisi_company_profile/images/slide1.jpg" style="max-height: 537px; background: url(&quot;http://localhost/presisi_company_profile/images/slide1.jpg&quot;);">
        <div class="filter"></div>

        <div class="center-box">
          <a href="#" title="Our Story" class="h1">Our Company</a>
          <p>
            A warehouse is more than just a storage facility
          </p>
        </div>

        <div class="container link-box-bottom">
          <div class="row">
            <div class="col-md-12 t-center company-buttons">
              <div class="col-xs-12 col-md-one-fifth"> <a href="#anchor-slide" title="Who we are" class="btn btn-default">Who we are</a></div>
              <div class="col-xs-12 col-md-one-fifth"> <a href="#what_we_do" title="Who we do" class="btn btn-default">What we do</a></div>
              <div class="col-xs-12 col-md-one-fifth"> <a href="#vision" title="Vision & Mission" class="btn btn-default">Vision & Mission</a></div>
              <div class="col-xs-12 col-md-one-fifth"> <a href="#ourvalues" title="Our values" class="btn btn-default">Our values</a></div>
              <div class="col-xs-12 col-md-one-fifth"> <a href="#legality" title="Legality" class="btn btn-default">Legality</a></div>
            </div>
            <a class="company-arrow" href="#" id="hp-arrow"><img src="https://c.p3parks.com/images/design/2016/hp-arrow.png" width="80" height="41" alt="[design/2016/hp-arrow.png]"></a></div>
          </div>
        </div>
      </div>
    </section>

    <section class="container p-center fade-hidden" id="anchor-slide" style="border-bottom: solid 1px #a30836;">
      <div class="row">
        <div class="col-xs-12 m-t-50 p-center t-center">
          <a href="#anchor-slide" title="Who we are" class="h2">Who we are</a>
          <p style="text-align: justify;">
            <!-- <img src="images/Animacion08.gif" style="float: right; height: 200px; border-radius: 10px;"> -->
            <?php
            $title = $conn->quote("WHO WE ARE");
            echo getDescription($conn, $title);
            ?>
          </p>
        </div>
      </div>
    </section>

  <section class="container p-center fade-hidden" id="what_we_do">
    <div class="row">
      <div class="col-xs-12 m-t-50 p-center t-center">
        <a href="#what_we_do" class="h2">What we do</a>
        <p>At Presisi, we do not just build storage facilities, we collaborate with our clients to help them unlock their competitive advantages through our high quality buildings, and efficient logistics and supply chain services.</p>
      </div>
    </div>
  </section>

  <section class="container what-we-do" style="border-bottom: solid 1px #a30836;">
    <div class="row">
      <ul class="slider-image medium">
        <li style="background: url(images/we_image1.jpg);" class="loaded">
          <a href="?page=what_we_do&we=build"><div class="filter"></div><div class="center-box-mob" style="background-color: rgba(0,0,0,0.4); width: 50%; border-radius: 10px;">
            <strong><div class="dot-red"></div><h2 class="h2-white"">WE BUILD</h2></strong>
            <p>Our customers are the lifeblood of our organization.</p></div></a>
        </li>
        <li data-src="images/we_image2.jpg">
          <a href="?page=what_we_do&we=own"><div class="filter"></div><div class="center-box-mob" style="background-color: rgba(0,0,0,0.4); width: 50%; border-radius: 10px;"><strong><div class="dot-red"></div> <h2 class="h2-white">WE OWN</h2></strong><p>Our buildings provide a firm foundation and <br> a safe residence for your business.</p></div></a>
        </li>
        <li data-src="images/we_image3.jpg">
          <a href="?page=what_we_do&we=manage"><div class="filter"></div><div class="center-box-mob" style="background-color: rgba(0,0,0,0.4); width: 50%; border-radius: 10px;"><strong><div class="dot-red"></div> <h2 class="h2-white">WE MANAGE</h2></strong><p>Well-maintained facility and individualized <br> services everyday¬—all year round. </p></div></a>
        </li>
        <li data-src="images/we_image4.jpg">
          <a href="?page=what_we_do&we=invest"><div class="filter"></div><div class="center-box-mob" style="background-color: rgba(0,0,0,0.4); width: 50%; border-radius: 10px;"><strong><div class="dot-red"></div> <h2 class="h2-white">WE INVEST</h2></strong><p>We do not just invest in buildings; we invest in the future.</p></div></a>
        </li>
      </ul>
    </div>
  </section>

  <section class="container p-center fade-hidden" id="vision" style="border-bottom: solid 1px #a30836;">
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

  <section class="container p-center fade-hidden" id="ourvalues" style="border-bottom: solid 1px #a30836;">
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
    <br><br>
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
  <a href="#" id="slide-top" style="display:none;"><i class="fa fa-arrow-circle-o-up" aria-hidden="true" style="font-size: 4.0rem;"></i></a>
  
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