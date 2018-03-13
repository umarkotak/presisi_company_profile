<?php
	$host = "localhost";
	$username = "root";
	$password = "";
	$dbname = "dbprp";

	try {
		$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	} catch (Exception $e) {
		echo "Connection failed: ".$e->getMessage();
	}

	// $host = "localhost";
	// $username = "presisir_admin";
	// $password = "admin";
	// $dbname = "presisir_dbprp";

	// try {
	// 	$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
	// 	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	// } catch (Exception $e) {
	// 	echo "Connection failed: ".$e->getMessage();
	// }
?>