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
          <img src="images/company_icon_1.png" style="float: left; height: 120px; margin: 5px;">
          <?php
              $title = $conn->quote("SERVICES1");
              echo getDescription($conn, $title);
          ?>
        </p>
        <br>
        <p style="text-align: justify;">
          <img src="images/company_icon_3.png" style="float: right; margin: 5px;">
          <?php
              $title = $conn->quote("SERVICES2");
              echo getDescription($conn, $title);
          ?>
        </p>
      </div>

      <div style="">
        <div class="col-xs-12 col-sm-12 col-lg-one-fifth m-t-80">
        </div>
        <div class="col-xs-12 col-sm-12 col-lg-one-fifth m-t-80">
          <a href="#warehouse_service" class="btn btn-default">Warehouse Service</a>
        </div>
        <div class="col-xs-12 col-sm-12 col-lg-one-fifth m-t-80">
        </div>
        <div class="col-xs-12 col-sm-12 col-lg-one-fifth m-t-80">
          <a href="#build_to_suit" class="btn btn-default">Build to Suit Development</a>
        </div>
        <div class="col-xs-12 col-sm-12 col-lg-one-fifth m-t-80">
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
        <div class="col-xs-12 col-sm-12 col-lg-3 m-t-80">
          <a href="#build_to_suit" class="btn btn-default">Considerate</a>
          <p style="text-align: justify;">
            <?php
              $title = $conn->quote("CONSIDERATE");
              echo getDescription($conn, $title);
            ?>
          </p>
        </div>
        <div class="col-xs-12 col-sm-12 col-lg-one-fifth m-t-80">
          <a href="#build_to_suit" class="btn btn-default">Long term lease</a>
          <p style="text-align: justify;">
            <?php
              $title = $conn->quote("LONG TERM LEASE");
              echo getDescription($conn, $title);
            ?>
          </p>
        </div>
        <div class="col-xs-12 col-sm-12 col-lg-3 m-t-80">
          <a href="#build_to_suit" class="btn btn-default">Responsible</a>
          <p style="text-align: justify;">
            <?php
              $title = $conn->quote("RESPONSIBLE");
              echo getDescription($conn, $title);
            ?>
          </p>
        </div>
        <div class="col-xs-12 col-sm-12 col-lg-3 m-t-80">
          <a href="#build_to_suit" class="btn btn-default">Secure</a>
          <p style="text-align: justify;">
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
          src="https://www.youtube.com/embed/ip5jOLflJa8">
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
        <h3 style="text-align: left;">Warehouse Rental</h3>
        <p style="text-align: justify;">
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

      <div class="col-xs-12 m-b-80 xs-m-b-0" style="">
        <h3 style="text-align: right; margin-top: 15px;">Warehouse Capacity</h3>
        <p style="text-align: justify;">
          <?php
              $title = $conn->quote("WAREHOUSE CAPACITY");
              echo getDescription($conn, $title);
          ?>
        </p>
      </div>

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

      <div class="col-xs-12 m-b-80 xs-m-b-0" style="border-top: solid 1px #fcb6cb; padding-top: 10px;">
        <h3 style="text-align: left;">Distribution Service</h3>
        <p style="text-align: justify;">
          <?php
              $title = $conn->quote("DISTRIBUTION SERVICE");
              echo getDescription($conn, $title);
          ?>
        </p>
      </div>

      <div class="col-xs-12 m-b-80 xs-m-b-0" style="border-top: solid 1px #fcb6cb; padding-top: 10px;" id="supply">
        <h3 style="text-align: right;">Supply Chain Management</h3>

        <br>
        <div>
          <div class="col-xs-12 col-md-2">
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
          </div>
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

<!-- <div id="cookies-rules-box">
  This website uses cookies for better performance. By staying on this website and clicking on the “Confirm” button you agree with their use. More information
  <a href="http://www.google.com/intl/en/policies/technologies/cookies/" target="_blank" id="cookies-more">here.</a>
  <a id="cookies-rules-box-btn" href="#">CONFIRM</a>
</div> -->

<!-- SPLASH LOGO -->
<!-- <div id="loader"></div> -->

<!-- <script type="text/javascript" src="https://www.p3parks.com/javascripts/3b212142f37c909fcba20fd87c60efcd-1515429700/"></script>

<script type="text/javascript">

var $zoho= $zoho || {salesiq:{values:{},ready:function(){}}};var d=document;s=d.createElement("script");s.type="text/javascript";
s.defer=true;s.src="https://salesiq.zoho.eu/p3parkssro/float.ls?embedname=p3parkssro";
t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);
$zoho.salesiq.ready=function(embedinfo){$zoho.salesiq.floatbutton.visible("hide");}

</script>

<script type="text/javascript">

var $zoho= $zoho || {salesiq:{values:{},ready:function(){}}};var d=document;s=d.createElement("script");s.type="text/javascript";
s.defer=true;s.src="https://salesiq.zoho.eu/p3parkssro/float.ls?embedname=p3parkssro";
t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);

</script>

<script type="text/javascript">

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-26369507-1', 'auto');
ga('send', 'pageview');

</script>

<script type="text/javascript">

var leady_track_key="XSnB2eIcJpnvA8mH";
var leady_track_server=document.location.protocol+"//t.leady.cz/";
(function(){
var l=document.createElement("script");l.type="text/javascript";l.async=true;
l.src=leady_track_server+leady_track_key+"/L.js";
var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(l,s);
})();

</script> -->

<!-- <script async type="text/javascript" src="https://secure.leadforensics.com/js/109989.js"></script>
<noscript><img alt="" src="https://secure.leadforensics.com/109989.png" style="display:none;" /></noscript>
<script async src="https://www.youtube.com/player_api"></script> -->

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