<?php
$host = 'localhost';
$db   = 'rural_dev';
$user = 'root';
$pass = 'mysql';

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>