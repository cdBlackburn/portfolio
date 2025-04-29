<?php
# cas (alissa) blackburn - april 29 2025
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
$question = filter_input(INPUT_POST, 'question', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);

$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "inquiry";

$conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

if($conn->connect_error){
	die('Connect Error ('. $conn->connect_errno .') '.$conn->connect_error);
} else {
	$stmt = $conn->prepare("INSERT INTO inquiry (name, question, email) VALUES (?, ?, ?)");
	
	if ($stmt === false) {
		die('Prepare failed: ' . $conn->error);
	}
	
	$stmt->bind_param("sss", $name, $question, $email);
	
	if ($stmt->execute()) {
		echo "You have successfully submitted";
	} else {
		echo "Error; " .  $stmt->error;
	}
	
	$stmt->close();
	$conn->close(); 
}
?>
