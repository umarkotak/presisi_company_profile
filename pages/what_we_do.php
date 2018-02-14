<?php
function getDescription($conn, $title){
  $sql = $conn->prepare("SELECT wwd_description FROM wwd_page WHERE wwd_title=$title LIMIT 1");
  $sql->execute();
  $data = $sql->fetch();
  return $data['wwd_description'];
}
?>
<main class="op-0" style="min-height: calc(100vh - 78px);">

  <div <?php if($_GET['we'] == 'build') { echo "style=\"display: block;\""; } else { echo "style=\"display: none;\""; } ?>>
    <div id="sub-nav">
      <a href="?page=what_we_do&we=build">What We Do</a> &gt; <span class="lastitem">We Build</span>
    </div>
    <br>

    <section class="container-fluid what-we-do m-t-30">
      <!-- <div class="row">
        <ul class="slider-image medium">
          <li style="background: url(images/we_image1.jpg);" class="loaded">
            <a href="?page=what_we_do&we=build"><div class="filter"></div><div class="center-box-mob" style="background-color: rgba(0,0,0,0.4); width: 50%; border-radius: 10px;">
              <strong><div class="dot-red"></div><h2 class="h2-white"">WE BUILD</h2></strong>
              <p>We build all of our warehouses like you would <br> build your own home... with passion! <br> Our customers are the lifeblood of our organization.</p></div></a>
          </li>
        </ul>
      </div> -->

      <div class="col-xs-12">
        <a href="?page=what_we_do&we=build" class="we-manage">
          <div class="filter"></div>
          <div data-bg="images/we_image1.jpg" class="about-img" style="background-image: url(&quot;images/we_image1.jpg&quot;);">
            <div class="center-box-mob" style="background-color: rgba(0,0,0,0.4); width: 50%; border-radius: 10px;">
              <div class="dot-red"></div> <h2 class="h2-white">WE BUILD</h2>
              <p>Our customers are the lifeblood of our organization.</p>
            </div>
          </div>
        </a>
      </div>

      <div class="row">
        <div class="col-md-1">

        </div>
        <div class="col-md-10 p-center t-center">
          <?php
            $title = $conn->quote("WE BUILD");
            echo getDescription($conn, $title);
          ?>
        </div>
        <div class="col-md-1">

        </div>
      </div>
    </section>
  </div>

  <div <?php if($_GET['we'] == 'own') { echo "style=\"display: block;\""; } else { echo "style=\"display: none;\""; } ?>>
    <div id="sub-nav">
      <a href="?page=what_we_do&we=own">What We Do</a> &gt; <span class="lastitem">We Own</span>
    </div>
    <br>

    <section class="container-fluid what-we-do m-t-30">
      <!-- <div class="row">
        <ul class="slider-image medium">
          <li data-src="images/we_image2.jpg">
            <a href="?page=what_we_do&we=own"><div class="filter"></div><div class="center-box-mob" style="background-color: rgba(0,0,0,0.4); width: 50%; border-radius: 10px;"><strong><div class="dot-red"></div> <h2 class="h2-white">WE OWN</h2></strong><p>Our buildings provide a firm foundation and <br> a safe residence for your business.</p></div></a>
          </li>
        </ul>
      </div> -->

      <div class="col-xs-12">
        <a href="?page=what_we_do&we=own" class="we-manage">
          <div class="filter"></div>
          <div data-bg="images/we_image2.jpg" class="about-img" style="background-image: url(&quot;images/we_image2.jpg&quot;);">
            <div class="center-box-mob" style="background-color: rgba(0,0,0,0.4); width: 50%; border-radius: 10px;">
              <div class="dot-red"></div> <h2 class="h2-white">WE OWN</h2>
              <p>Our buildings provide a firm foundation and <br> a safe residence for your business.</p>
            </div>
          </div>
        </a>
      </div>

      <div class="row">
        <div class="col-md-1">

        </div>
        <div class="col-md-10 p-center t-center">
          <?php
            $title = $conn->quote("WE OWN");
            echo getDescription($conn, $title);
          ?>
        </div>
        <div class="col-md-1">

        </div>
      </div>
    </section>
  </div>

  <div <?php if($_GET['we'] == 'manage') { echo "style=\"display: block;\""; } else { echo "style=\"display: none;\""; } ?>>
    <div id="sub-nav">
      <a href="?page=what_we_do&we=manage">What We Do</a> &gt; <span class="lastitem">We Manage</span>
    </div>
    <br>

    <section class="container-fluid what-we-do m-t-30">
      <!-- <div class="row">
        <ul class="slider-image medium">
          <li data-src="images/we_image3.jpg">
            <a href="?page=what_we_do&we=manage"><div class="filter"></div><div class="center-box-mob" style="background-color: rgba(0,0,0,0.4); width: 50%; border-radius: 10px;"><strong><div class="dot-red"></div> <h2 class="h2-white">WE MANAGE</h2></strong><p>Well-maintained facility and individualized <br> services everyday¬—all year round. </p></div></a>
          </li>
        </ul>
      </div> -->

      <div class="col-xs-12">
        <a href="?page=what_we_do&we=manage" class="we-manage">
          <div class="filter"></div>
          <div data-bg="images/we_image5.jpg" class="about-img" style="background-image: url(&quot;images/we_image5.jpg&quot;);">
            <div class="center-box-mob" style="background-color: rgba(0,0,0,0.4); width: 50%; border-radius: 10px;">
              <div class="dot-red"></div> <h2 class="h2-white">WE MANAGE</h2>
              <p>Well-maintained facility and individualized services everyday-all year round.</p>
            </div>
          </div>
        </a>
      </div>

      <div class="row">
        <div class="col-md-1">

        </div>
        <div class="col-md-10 p-center t-center">
          <?php
            $title = $conn->quote("WE MANAGE");
            echo getDescription($conn, $title);
          ?>
        </div>
        <div class="col-md-1">

        </div>
      </div>
    </section>
  </div>

  <div <?php if($_GET['we'] == 'invest') { echo "style=\"display: block;\""; } else { echo "style=\"display: none;\""; } ?>>
    <div id="sub-nav">
      <a href="?page=what_we_do&we=invest">What We Do</a> &gt; <span class="lastitem">We Invest</span>
    </div>
    <br>

    <section class="container-fluid what-we-do m-t-30">
      <!-- <div class="row">
        <ul class="slider-image medium">
          <li data-src="images/we_image4.jpg">
            <a href="?page=what_we_do&we=invest"><div class="filter"></div><div class="center-box-mob" style="background-color: rgba(0,0,0,0.4); width: 50%; border-radius: 10px;"><strong><div class="dot-red"></div> <h2 class="h2-white">WE INVEST</h2></strong><p>We do not just invest in buildings; we invest in the future.</p></div></a>
          </li>
        </ul>
      </div> -->

      <div class="col-xs-12">
        <a href="?page=what_we_do&we=invest" class="we-manage">
          <div class="filter"></div>
          <div data-bg="images/we_image6.jpg" class="about-img" style="background-image: url(&quot;images/we_image6.jpg&quot;);">
            <div class="center-box-mob" style="background-color: rgba(0,0,0,0.4); width: 50%; border-radius: 10px;">
              <div class="dot-red"></div> <h2 class="h2-white">WE INVEST</h2>
              <p>We do not just invest in buildings; we invest in the future.</p>
            </div>
          </div>
        </a>
      </div>

      <div class="row">
        <div class="col-md-1">

        </div>
        <div class="col-md-10 p-center t-center">
          <?php
            $title = $conn->quote("WE INVEST");
            echo getDescription($conn, $title);
          ?>
        </div>
        <div class="col-md-1">

        </div>
      </div>
    </section>
  </div>

  <section class="container-fluid what-we-do m-t-30">
    <div class="row">
      <div class="col-md-3">
        <a href="?page=what_we_do&we=build" class="btn btn-default">We Build</a>
      </div>
      <div class="col-md-3">
        <a href="?page=what_we_do&we=own" class="btn btn-default">We Own</a>
      </div>
      <div class="col-md-3">
        <a href="?page=what_we_do&we=manage" class="btn btn-default">We Manage</a>
      </div>
      <div class="col-md-3">
        <a href="?page=what_we_do&we=invest" class="btn btn-default">We Invest</a>
      </div>
    </div>
  </section>

  <form id="" method="" action="" class="cms_form" enctype="">
    <div class="hidden">
      <input type="hidden" name="mact" value="FormBuilder,m2b7d3,default,1" />
      <input type="hidden" name="m2b7d3fbrp_callcount" value="1" />
    </div>

    <div><input type="hidden" id="m2b7d3form_id" name="m2b7d3form_id" value="1" />
      <input type="hidden" id="m2b7d3lang" name="m2b7d3lang" value="en_US" />
      <input type="hidden" id="m2b7d3fbrp_continue" name="m2b7d3fbrp_continue" value="2" />
      <input type="hidden" id="m2b7d3fbrp_done" name="m2b7d3fbrp_done" value="1" />
    </div>
    <div class="contact-form">
      <div data-lang="Enter email address" class="required input-min-height replaceLang">
        <input type="hidden" name="m2b7d3fbrp__21" value="" size="25" maxlength="128"  onfocus="if(this.value==this.defaultValue) this.value='';" onblur="if(this.value=='') this.value=this.defaultValue;" id="fbrp__21" />
      </div>
    </div>
  </form>
</main>

<a href="#" id="slide-top" style="display:none;"><i class="fa fa-arrow-circle-o-up" aria-hidden="true" style="font-size: 4.0rem;"></i></a>
