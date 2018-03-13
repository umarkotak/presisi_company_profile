<?php
	include("../../lib/connection.php");

	function randomcode ($len="5"){
		global $code;
		global $lchar;
		$code = NULL;

		for ($i=0;$i<$len;$i++){
			$char = chr(rand(48,122));
			while(preg_match("[a-zA-Z0-9]", $char)){
				if($char == $lchar) { continue; }
					$char = chr(rand(48,90));
				}
				$code .= $char;
				$lchar = $char;
			}
		return $code;
	}

	$filename = $_POST['filename'];
	$labelname = $_POST['labelname'];
	$code = randomcode();

	$target_dir = "../../../files/download/";
	$temp = explode(".", $_FILES['fileup']['name']);
	$target_file = $target_dir.$filename."_".$code.".".end($temp);

	$sql = $conn->prepare("INSERT INTO files VALUES ('','$filename".'_'."$code', '".end($temp)."', '$labelname')");
	$sql->execute();

	if($sql){
		$fileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
		if(move_uploaded_file($_FILES["fileup"]["tmp_name"], $target_file)){
			echo"<br /><br /><center> Success!<br>
			<b><a>Page Refresh!</a></b></center>";
			echo"<meta http-equiv='refresh' content='1;
			url=../index.php?show=filemanager'>";
		}
	}
	else{
		echo"<br /><br /><center> Failed!<br>
		<b><a>Page Refresh!</a></b></center>";
		echo"<meta http-equiv='refresh' content='1;
		url=../index.php?show=filemanager'>";
	}
?>