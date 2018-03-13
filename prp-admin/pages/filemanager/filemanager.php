<section class="contetnt">
	<div class="row">
		<div class="col-xs-12">
			<div class="box">
				<div class="box-header with-border">
					<h3 class="box-title">File Manager</h3>
				</div>
				<div class="box-body table-responsive">
					<table class="table table-striped table-bordered" id="example1">
						<thead>
							<tr>
								<th style="width: 10px">#</th>
								<th>File Name</th>
								<th>Label</th>
								<th>Action</th>
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
								<td><?php echo $data['filename']; ?></td>
								<td><?php echo $data['labelname']; ?></td>
								<td style="text-align: center"><a href="<?php echo 'http://localhost/presisi_company_profile/files/download/'.$data['filename'].'.'.$data['extention']; ?>" download class="btn btn-primary"><span class="fa fa-download"></span> Download</a>&emsp;<a href="#" id="<?php echo $data['file_id']; ?>" class="btn btn-danger"><span class="fa fa-remove"></span> Delete</a></td>
							</tr>
							<?php
								$no++;
								}
							?>
						</tbody>
						<tfoot>
							<tr>
								<th style="width: 10px">#</th>
								<th>File Name</th>
								<th>Label</th>
								<th>Action</th>
							</tr>	
						</tfoot>
					</table>
				</div>
				<div class="box-footer clearfix">
					<a class="btn btn-primary open_modal" id="uploadfile"><i class="fa fa-upload"></i> Upload File</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Modal Popup untuk Edit-->
<div id="modaluploadfile" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="uploadFileLabel" aria-hidden="true"></div>
<div id="refresh" style="display: none;"></div>

<!-- Javascript untuk popup modal Edit-->
<script type="text/javascript">
 $(document).ready(function () {
 $(".open_modal").click(function(e) {
    var m = $(this).attr("id");
		   $.ajax({
  			   url: "filemanager/uploadfile.php",
  			   success: function (ajaxData){
    			   $("#modaluploadfile").html(ajaxData);
    			   $("#modaluploadfile").modal('show',{backdrop: 'true'});
    		   }
  		   });
      });
    });
</script>

<!-- Javascript untuk delete file-->
<script type="text/javascript">
 $(document).ready(function () {
 $(".btn-danger").click(function(e) {
    var m = $(this).attr("id");
    var conf = confirm("Delete this file?");
    if(conf == true){
    	$.ajax({
  			   url: "filemanager/deletefileprocess.php",
  			   data: {data: m},
  			   success: function (ajaxData){
    			   $("#refresh").html(ajaxData);
    		   }
  		   });
    }
      });
    });
</script>