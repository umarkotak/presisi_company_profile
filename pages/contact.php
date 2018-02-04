<?php
    $sql = $conn->prepare("SELECT * FROM sixth_page LIMIT 1");
    $sql->execute();
    $data = $sql->fetch();
?>

<main class="op-0" style="min-height: calc(100vh - 78px); opacity: 1;">
    <div id="sub-nav">
        <span class="lastitem">Contacts</span>
    </div>
    <!-- content -->
    <div>
        <section class="container-fluid m-t-50 fade-hidden fade-visible animated fadeIn">
            <div class="container p-t-0">
                <div class="m-t-50">
                    <div class="row">
                        <div class="col-xs-12">
                            <h2><?php echo $data['office_name']; ?></h2>
                            <div class="red-line"></div>
                        </div>
                    </div>
                </div>


                <div class="row m-t-30">
                    <div class="col-xs-12 col-sm-5">
                        <p class="t-blue small">Office Address</p>
                        <p class="t-blue small">Description</p>
                        <p class="t-blue small">Phone</p>
                        <p class="t-blue small">Fax</p>
                        <p class="t-blue small">Email</p>
                    </div>
                    <div class="col-xs-12 col-sm-7">
                        <p class="t-blue small">
                            <?php echo ": ".$data['office_address']; ?>
                        </p>
                        <p class="t-blue small">
                            <?php echo ": ".$data['sxp_description']; ?>
                        </p>
                        <p class="t-blue small">
                            <?php echo ": ".$data['office_phone']; ?>
                        </p>
                        <p class="t-blue small">
                            <?php echo ": ".$data['office_fax']; ?>
                        </p>
                        <p class="t-blue small">
                            <?php echo ": ".$data['office_email']; ?>
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="container-fluid fade-hidden">
            <div class="container p-t-0">
                <div class="m-t-0">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="red-line"></div>
                        </div>
                    </div>
                </div>

                <div class="row m-t-30">
                    <div class="col-xs-12 col-sm-5">
                        <p class="t-blue small">Full Name<span style="color: red;"><strong> *</strong></span></p>
                        <p class="t-blue small">Email Address<span style="color: red;"><strong> *</strong></span></p>
                        <p class="t-blue small">Phone</p>
                        <p class="t-blue small">Message<span style="color: red;"><strong> *</strong></span></p>
                    </div>
                    <form action="?action=sendmail" method="POST">
                        <div class="col-xs-12 col-sm-7">
                            <div class="row">
                                <div class="required input-min-height replaceLang col-xs-12">
                                    <input type="text" name="full_name" value="" size="50" maxlength="128" required placeholder="ex: John Doe">
                                </div>
                            </div>
                            <div class="row">
                                <div class="required input-min-height replaceLang col-xs-12">
                                    <input type="text" name="email" value="" size="50" maxlength="128" required placeholder="ex: john@example.com">
                                </div>
                            </div>
                            <div class="row">
                                <div class="required input-min-height replaceLang col-xs-12">
                                    <input type="text" name="phone" value="" size="50" maxlength="12" placeholder="ex: 085123456789">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <textarea name="message" maxlength="500" class="required input-min-height replaceLang col-xs-12" required placeholder="ex: Lorem ipsum ..."></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-6">
                                    <!-- <input type="submit" value="Send Message" class="btn btn-default"> -->
                                    <button type="submit" class="btn btn-default">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
    <!-- /content -->
</main>