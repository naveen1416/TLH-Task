<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
include "config.php";

// Fetch full profile by ID (assuming you have one user for now)
$sql = "SELECT id, pic,name, role, bio, email, created_on, updated_on FROM profile WHERE id = 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo json_encode($result->fetch_assoc());
} else {
    echo json_encode(["error" => "No profile found"]);
}
?>
