<?php
	include("../../lib/connection.php");

	$dr_id = $conn->quote($_GET['dr_id']);
	$sql1 = $conn->prepare("DELETE FROM download_report WHERE dr_id = $dr_id");
	$sql1->execute();

	if($sql1){
		echo"<br /><br /><center> Success!<br>
		<b><a>Page Refresh!</a></b></center>";
		echo"<meta http-equiv='refresh' content='1;
		url=index.php?show=downloadreport'>";
	}
	else{
		echo"<br /><br /><center> Failed!<br>
		<b><a>Page Refresh!</a></b></center>";
		echo"<meta http-equiv='refresh' content='1;
		url=index.php?show=downloadreport'>";
	}
?>