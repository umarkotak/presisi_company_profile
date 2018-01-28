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
?>

<?php
	// $host = "localhost";
	// $username = "umarkota_admin";
	// $password = "kotak1";
	// $dbname = "umarkota_dbprp";

	// try {
	// 	$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
	// 	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	// } catch (Exception $e) {
	// 	echo "Connection failed: ".$e->getMessage();
	// }
?>