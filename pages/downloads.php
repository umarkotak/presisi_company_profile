<?php
    $sql = $conn->prepare("SELECT * FROM fifth_page LIMIT 1");
    $sql->execute();
    $data = $sql->fetch();
?>

<main class="op-0" style="min-height: calc(100vh - 78px); opacity: 1;">
    <div id="sub-nav">
        <span class="lastitem">Downloads</span>
    </div>
    <!-- content -->
    <div>
        <section class="container-fluid m-t-50 fade-hidden fade-visible animated fadeIn">
            <div class="container p-t-0">
                <div class="m-t-50">
                    <div class="row">
                        <div class="col-xs-12">
                            <h2><?php echo $data['ffp_title']; ?></h2>
                            <div class="red-line"></div>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col-xs-12 m-t-50 t-center">
                        <p style="text-align: justify;">
                            <?php
                            echo $data['ffp_description'];
                            ?>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <!-- /content -->
</main>