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
                    <div class="col-xs-12 m-t-50 t-center p-center">
                        <p style="text-align: justify;">
                            <?php
                            echo $data['ffp_description'];
                            ?>
                        </p>
                        <table class="tablesorter">
                            <thead>
                                <tr>
                                    <th colspan="3">Files</th>
                                </tr>
                            </thead>
                            <tbody>
                            <?php  
                                $no = 1;
                                $sql = $conn->prepare("SELECT * FROM files");
                                $sql->execute();

                                while ($data = $sql->fetch()) {
                            ?>
                                <tr>
                                    <td><?php echo $no; ?></td>
                                    <td><?php echo $data['labelname']; ?></td>
                                    <td>
                                        <a href="#" id="<?php echo $data['file_id']; ?>" onclick="downloadfile(this.id);"><span class="fa fa-download">&emsp;</span>Download</a>
                                    </td>
                                </tr>
                            <?php
                                $no++;
                                }
                            ?>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xs-12">
                        <div class="red-line"></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <!-- /content -->

    <!-- The Modal -->
    <div id="prpModal" class="prpmodal">

        <!-- Modal content -->
        <div class="prpmodal-content">
            <div class="prpmodal-header">
                <span class="prpclose">&times;</span>
                <h3 class="prpmodal-title">Download Form</h3>
            </div>
            <form action="?action=downloadfile" method="POST" id="formdownload">
            <div class="prpmodal-body">
                    <div>
                        <label>Title</label>
                        <input type="text" name="title" class="form-control">
                        <label>Name<span style="color: red;"><strong> *</strong></span></label>
                        <input type="text" name="name" class="form-control" required>
                        <label>Job Title</label>
                        <input type="text" name="jobtitle" class="form-control">
                        <label>Company</label>
                        <input type="text" name="company" class="form-control">
                        <label>Industry</label>
                        <input type="text" name="industry" class="form-control">
                        <label>Email<span style="color: red;"><strong> *</strong></span></label>
                        <input type="email" name="email" class="form-control" required>
                        <label>Phone Number</label>
                        <input type="text" name="phonenumber" class="form-control">
                        <label>Address<span style="color: red;"><strong> *</strong></span></label>
                        <input type="text" name="address" class="form-control" required>
                        <input type="hidden" name="data" id="data" class="form-control">
                    </div>
            </div>
            <div class="prpmodal-footer">
                <div class="col-xs-6 pull-right">
                    <input class="btn btn-default" onclick="submitdownload()" name="download" value="Download">
                </div>
            </div>
            </form>
        </div>

    </div>
</main>

<script>
// Get the modal
var modal = document.getElementById('prpModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("prpclose")[0];

// Get input for data
var data = document.getElementById("data");

// Get form
var form = document.getElementById("formdownload");

// function download and open modal
function downloadfile(id){
    modal.style.display = "block";
    data.value = id;
}

function submitdownload(){
    modal.style.display = "none";
    form.submit();
    form.reset();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    form.reset();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        form.reset();
    }
}
</script>