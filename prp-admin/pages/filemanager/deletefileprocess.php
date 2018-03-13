<?php
	include("../../lib/connection.php");

	$data = $conn->quote($_GET['data']);
	$sql1 = $conn->prepare("SELECT filename, extention FROM files WHERE file_id=$data");
	$sql1->execute();
	$filename = $sql1->fetch();

	if(unlink("../../../files/download/".$filename['filename'].".".$filename['extention'])){
		$sql2 = $conn->prepare("DELETE FROM files WHERE file_id=$data");
		$sql2->execute();
		if($sql2){
			echo"<br /><br /><center> Success!<br>
			<b><a>Page Refresh!</a></b></center>";
			echo"<meta http-equiv='refresh' content='1;
			url=index.php?show=filemanager'>";
		}
	}
	else{
		echo"<br /><br /><center> Failed!<br>
		<b><a>Page Refresh!</a></b></center>";
		echo"<meta http-equiv='refresh' content='1;
		url=index.php?show=filemanager'>";
	}
?>