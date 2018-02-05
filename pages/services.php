<?php
function getDescription($conn, $title){
    $sql = $conn->prepare("SELECT tp_description FROM third_page WHERE tp_title=$title LIMIT 1");
    $sql->execute();
    $data = $sql->fetch();
    return $data['tp_description'];
}
?>

<main class="op-0" style="min-height: calc(100vh - 78px);">
  <section class="container p-center" style="border-bottom: solid 1px #a30836;" id="anchor-slide">
    <div class="row m-b-50">
      <div class="col-xs-12 m-b-80 xs-m-b-0">
        <a href="" class="h2">Services</a>
        <p style="text-align: justify;">
          <img src="images/Animacion01.gif" style="float: left; height: 185px; margin: 5px;">
          <?php
              $title = $conn->quote("SERVICES1");
              echo getDescription($conn, $title);
          ?>
        </p>
        <br><br>
        <p style="text-align: justify;">
          <img src="images/Animacion04.gif" style="float: right; height: 185px; margin: 5px;">
          <?php
              $title = $conn->quote("SERVICES2");
              echo getDescription($conn, $title);
          ?>
        </p>
      </div>

      <div style="">
        <div class="col-xs-12 col-sm-12 col-lg-one-fifth m-t-80">
          <a href="#warehouse_service" class="btn btn-default" style="height: 40px;"><p style="font-size: 15px;">Warehouse Rental</p></a>
        </div>
        <div class="col-xs-12 col-sm-12 col-lg-one-fifth m-t-80">
          <a href="#build_to_suit" class="btn btn-default" style="height: 40px;"><p style="font-size: 15px;">Build to Suit Development</p></a>
        </div>
        <div class="col-xs-12 col-sm-12 col-lg-one-fifth m-t-80">
          <a href="#distribution" class="btn btn-default" style="height: 40px;"><p style="font-size: 15px;">Distribution</p></a>
        </div>
        <div class="col-xs-12 col-sm-12 col-lg-one-fifth m-t-80">
          <a href="#logistics" class="btn btn-default" style="height: 40px;"><p style="font-size: 15px;">Logisticts Management</p></a>
        </div>
        <div class="col-xs-12 col-sm-12 col-lg-one-fifth m-t-80">
          <a href="#supply" class="btn btn-default" style="height: 40px;"><p style="font-size: 15px;">Supply Chain Management</p></a>
        </div>
      </div>
  </section>

  <section class="container m-t-80" id="build_to_suit">
    <div class="row">
      <div class="col-xs-12 p-center">
        <a href="https://www.p3parks.com/what-we-do" class="h2">Build to Suit Development</a>
        <p style="text-align: center;">
          <?php
            $title = $conn->quote("BUILD TO SUIT DEVELOPMENT");
            echo getDescription($conn, $title);
          ?>
        </p>
      </div>

      <div style="">
        <div class="col-xs-12 col-sm-12 col-lg-6 m-t-80">
          <a href="#build_to_suit" class="btn btn-default">Attentive</a>
          <p style="text-align: center;">
            <?php
              $title = $conn->quote("CONSIDERATE");
              echo getDescription($conn, $title);
            ?>
          </p>
        </div>
        <div class="col-xs-12 col-sm-12 col-lg-6 m-t-80">
          <a href="#build_to_suit" class="btn btn-default">Long term lease</a>
          <p style="text-align: center;">
            <?php
              $title = $conn->quote("LONG TERM LEASE");
              echo getDescription($conn, $title);
            ?>
          </p>
        </div>
        <div class="col-xs-12 col-sm-12 col-lg-6 m-t-80">
          <a href="#build_to_suit" class="btn btn-default">Responsible</a>
          <p style="text-align: center;">
            <?php
              $title = $conn->quote("RESPONSIBLE");
              echo getDescription($conn, $title);
            ?>
          </p>
        </div>
        <div class="col-xs-12 col-sm-12 col-lg-6 m-t-80">
          <a href="#build_to_suit" class="btn btn-default">Secure</a>
          <p style="text-align: center;">
            <?php
              $title = $conn->quote("SECURE");
              echo getDescription($conn, $title);
            ?>
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="container-fluid what-we-do m-t-30" style="border-bottom: solid 1px #a30836;">
    <div class="row">
      <div class="col-sm-12">
        <iframe class="" style="width: 100%; height: 500px;"
          src="https://www.youtube.com/embed/kmD5aAup_1U">
        </iframe>
      </div>
    </div>
  </section>

  <section class="container p-center" style="border-bottom: solid 1px #a30836;" id="warehouse_service">
    <div class="row m-b-50">
      <div class="col-xs-12 m-b-80 xs-m-b-0">
        <a href="" class="h2">Warehouse Service</a>
      </div>

      <div class="col-xs-12 m-b-80 xs-m-b-0" style="border-bottom: solid 1px #fcb6cb;">
        <h3 style="text-align: left;"><i class="fa fa-cubes"></i> Warehouse Rental</h3>
        <p style="text-align: justify;">
          <img src="images/Animacion01.gif" style="float: left; width: 200px;">
          <?php
              $title = $conn->quote("WAREHOUSE RENTAL");
              echo getDescription($conn, $title);
            ?>
        </p>

        <p style="text-align: justify;">
          Along with storage facility, we also provide warehouse resources such as:
        </p>

        <div class="col-xs-6">
          <p style="text-align: justify;">
            <?php
              $title = $conn->quote("WAREHOUSE RESOURCE 1");
              echo getDescription($conn, $title);
            ?>
          </p>
        </div>

        <div class="col-xs-6">
          <p style="text-align: justify;">
            <?php
              $title = $conn->quote("WAREHOUSE RESOURCE 2");
              echo getDescription($conn, $title);
            ?>
          </p>
        </div>
      </div>

      <div class="col-md-3">
        <img src="images/prp/DJI_0006.MOV.Still004.jpg" style="border-radius: 5px;">
      </div>
      <div class="col-md-3">
        <img src="images/prp/DJI_0006.MOV.Still019.jpg" style="border-radius: 5px;">
      </div>
      <div class="col-md-3">
        <img src="images/prp/DJI_0006.MOV.Still012.jpg" style="border-radius: 5px;">
      </div>
      <div class="col-md-3">
        <img src="images/prp/DJI_0006.MOV.Still008.jpg" style="border-radius: 5px;">
      </div>

      <div class="col-xs-12 m-b-80 xs-m-b-0" style="" id="warehouse_tour">
        <h3 style="text-align: right; margin-top: 15px;"><i class="fa fa-server"></i> Warehouse Capacity</h3>
        <p style="text-align: justify;">
          <img src="images/Animacion02.gif" style="float: right; width: 300px; margin-left: 5px;">
          <?php
              $title = $conn->quote("WAREHOUSE CAPACITY");
              echo getDescription($conn, $title);
          ?>
        </p>
      </div>

      <section class="container what-we-do m-t-30">
        <div class="row">
          <div class="col-sm-12 p-center">
            <iframe class="" style="width: 100%; height: 500px;"
              src="https://www.youtube.com/embed/ip5jOLflJa8">
            </iframe>
          </div>
        </div>
        <br>
      </section>

      <div class="col-xs-6 m-b-80 xs-m-b-0" style="border-right: 1px solid #fcb6cb">
        <h3 style="font-size: 20px; border-bottom: 1px solid #fcb6cb;">Civil and structural details of our facility construction</h3>
        <p>
          <?php
              $title = $conn->quote("CIVIL AND STRUCTURAL");
              echo getDescription($conn, $title);
          ?>
        </p>
      </div>

      <div class="col-xs-6 m-b-80 xs-m-b-0" style="">
        <h3 style="font-size: 20px; border-bottom: 1px solid #fcb6cb;">Value added warehousing</h3>
        <p>
          <?php
              $title = $conn->quote("VALUE ADDED");
              echo getDescription($conn, $title);
          ?>
      </div>

      <div class="col-xs-12 m-b-80 xs-m-b-0" style="border-top: solid 1px #fcb6cb; padding-top: 10px;" id="distribution">
        <h3 style="text-align: left;"><i class="fa fa-pie-chart"></i> Distribution Service</h3>
        <p style="text-align: justify;">
          <img src="images/Animacion09.gif" style="float: right; width: 300px; margin-left: 5px;">
            We are committed to serving you the highest quality of services from end-to-end. Our distribution service guarantees that the transport of goods from one location to another are feasible, safe, and prompt. We have a number of company-owned vehicles available to cater your needs and can be adjusted to suit your business as your requirements grow. Furthermore, our extensive network allows for other freight services to be carried out when needed. Health and safety during the distribution operations are paramount, and part of the process of achieving a high-quality service is ensuring that:

            <br><span style="display:inline-block; width: 50px;"></span>o Employees are required to undertake training and encouraged to report issues.
            <br><span style="display:inline-block; width: 50px;"></span>o Vehicles are regularly maintained.
        </p>
      </div>

      <div class="col-xs-12 m-b-80 xs-m-b-0" style="border-top: solid 1px #fcb6cb; padding-top: 10px;" id="logistics">
        <h3 style="text-align: left;"><i class="fa fa-cog"></i> Logistics Management Services</h3>
        <p style="text-align: justify;">
          <img src="images/Animacion10.gif" style="float: right; width: 300px; margin-left: 5px;">
            <br><span style="display:inline-block; width: 50px;"></span>o Repair centre.
            <br><span style="display:inline-block; width: 50px;"></span>o Spare parts management.
        </p>
      </div>

      <div class="col-xs-12 m-b-80 xs-m-b-0" style="border-top: solid 1px #fcb6cb; padding-top: 10px;" id="supply">
        <h3 style="text-align: right;"><i class="fa fa-chain"></i> Supply Chain Management</h3>

        <br>
        <div>
          <div class="col-xs-12">
            <span style="padding: 5px 20px; border-radius: 20px; background-color: #3366ff; color: white; font-size: 25px; margin: 10px 2px;">Evaluate</span>
            <span style="color: #3366ff; font-weight: 800"> => </span>
            <span style="padding: 5px 20px; border-radius: 20px; background-color: #3366ff; color: white; font-size: 25px; margin: 10px 2px;">Design</span>
            <span style="color: #3366ff; font-weight: 800"> => </span>
            <span style="padding: 5px 20px; border-radius: 20px; background-color: #3366ff; color: white; font-size: 25px; margin: 10px 2px;">Implement</span>
            <span style="color: #3366ff; font-weight: 800"> => </span>
            <span style="padding: 5px 20px; border-radius: 20px; background-color: #3366ff; color: white; font-size: 25px; margin: 10px 2px;">Manage</span>
            <span style="color: #3366ff; font-weight: 800"> => </span>
            <span style="padding: 5px 20px; border-radius: 20px; background-color: #3366ff; color: white; font-size: 25px; margin: 10px 2px;">Operate</span>
            <span style="color: #3366ff; font-weight: 800"> => </span>
            <span style="padding: 5px 20px; border-radius: 20px; background-color: #3366ff; color: white; font-size: 25px; margin: 10px 2px;">Improve</span>
          </div>

          <!-- <div class="col-xs-12 col-md-2">
            <a href="#supply" class="btn btn-default">Evaluate</a>
          </div>
          <div class="col-xs-12 col-md-2">
            <a href="#supply" class="btn btn-default">Design</a>
          </div>
          <div class="col-xs-12 col-md-2">
            <a href="#supply" class="btn btn-default">Implement</a>
          </div>
          <div class="col-xs-12 col-md-2">
            <a href="#supply" class="btn btn-default">Manage</a>
          </div>
          <div class="col-xs-12 col-md-2">
            <a href="#supply" class="btn btn-default">Operate</a>
          </div>
          <div class="col-xs-12 col-md-2">
            <a href="#supply" class="btn btn-default">Improve</a>
          </div> -->
        </div>

        <br>
        <?php
              $title = $conn->quote("SUPPLY CHAIN MANAGEMENT");
              echo getDescription($conn, $title);
          ?>
      </div>
  </section>

  <form id="m2b7d3moduleform_1" method="post" action="https://www.p3parks.com/" class="cms_form" enctype="multipart/form-data">
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

<script type="text/javascript">
  function fbht(htid)
  {
    var fbhtc=document.getElementById(htid);
    if (fbhtc)
    {
      if (fbhtc.style.display == 'none')
      {
        fbhtc.style.display = 'inline';
      }
      else
      {
        fbhtc.style.display = 'none';
      }
    }
  }
</script>

<script type="text/javascript">
  $(function() {
  var langReplace = $(".submit").data("lang");
  var langInput = $(".replaceLang").data("lang");
  $(".submit input").val(langReplace);
  $(".replaceLang input").val(langInput);

  $(".replaceLang input:text").each(function ()
  {
  // store default value
  var v = this.value;

  $(this).blur(function ()
  {
  // if input is empty, reset value to default
  if (this.value.length == 0) this.value = langInput;
  }).focus(function ()
  {
  // when input is focused, clear its contents
  this.value = "";
  });
  });

  var inputVal = $("#fbrp__21").val();
  var inputCount = inputVal.length;

  if (inputCount >= 43) {
  $("#fbrp__21").css("width", "480px");
  }
  });
</script>

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