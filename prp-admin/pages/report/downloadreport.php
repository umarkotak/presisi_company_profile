<section class="contetnt">
	<div class="row">
		<div class="col-xs-12">
			<div class="box">
				<div class="box-header with-border">
					<h3 class="box-title">Download Report</h3>
				</div>
				<div class="box-body table-responsive">
					<table class="table table-striped table-bordered" id="example2">
						<thead>
							<tr>
								<th style="width: 10px">#</th>
								<th>Title</th>
								<th>Name</th>
								<th>Job Title</th>
								<th>Company</th>
								<th>Industry</th>
								<th>Email</th>
								<th>Phone Number</th>
								<th>Address</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<?php  
								$no = 1;
								$sql = $conn->prepare("SELECT * FROM download_report");
								$sql->execute();

								while ($data = $sql->fetch()) {
							?>
							<tr>
								<td><?php echo $no; ?></td>
								<td><?php echo $data['title']; ?></td>
								<td><?php echo $data['name']; ?></td>
								<td><?php echo $data['job_title']; ?></td>
								<td><?php echo $data['company']; ?></td>
								<td><?php echo $data['industry']; ?></td>
								<td><?php echo $data['email']; ?></td>
								<td><?php echo $data['phone_number']; ?></td>
								<td><?php echo $data['address']; ?></td>
								<td style="text-align: center;"><a href="#" id="<?php echo $data['dr_id']; ?>" class="btn btn-danger"><span class="fa fa-remove"></span> Delete</a></td>
							</tr>
							<?php
								$no++;
								}
							?>
						</tbody>
						<tfoot>
							<tr>
								<th style="width: 10px">#</th>
								<th>Title</th>
								<th>Name</th>
								<th>Job Title</th>
								<th>Company</th>
								<th>Industry</th>
								<th>Email</th>
								<th>Phone Number</th>
								<th>Address</th>
								<th>Action</th>
							</tr>	
						</tfoot>
					</table>
				</div>
				<div class="box-footer clearfix">
				</div>
			</div>
		</div>
	</div>
</section>
<div id="refresh" style="display: none;"></div>

<!-- Javascript untuk delete file-->
<script type="text/javascript">
 $(document).ready(function () {
 $(".btn-danger").click(function(e) {
    var m = $(this).attr("id");
    var conf = confirm("Delete this report?");
    if(conf == true){
    	$.ajax({
  			   url: "report/deletereportprocess.php",
  			   data: {dr_id: m},
  			   success: function (ajaxData){
    			   $("#refresh").html(ajaxData);
    		   }
  		   });
    }
      });
    });
</script>