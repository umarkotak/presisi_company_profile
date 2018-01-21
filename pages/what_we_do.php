<main class="op-0" style="min-height: calc(100vh - 78px);">

  <div style="display: none;">
    <div id="sub-nav">
      <a href="https://www.p3parks.com/en/what-we-do/">What We Do</a> &gt; <span class="lastitem">We Build</span>
    </div>

    <section class="container-fluid what-we-do m-t-30">
      <div class="row">
        <ul class="slider-image medium">
          <li style="background: url(images/we_image1.jpg);" class="loaded">
            <a href="?page=what_we_do&we=build"><div class="filter"></div><div class="center-box-mob" style="background-color: rgba(0,0,0,0.4); width: 50%; border-radius: 10px;">
              <strong><div class="dot-red"></div><h2 class="h2-white"">WE BUILD</h2></strong>
              <p>We build all of our warehouses like you would <br> build your own home... with passion! <br> Our customers are the lifeblood of our organization.</p></div></a>
          </li>
        </ul>
      </div>
    </section>
  </div>

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