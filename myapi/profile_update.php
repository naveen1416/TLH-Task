<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include "config.php";

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'] ?? '';
$role = $data['role'] ?? '';
$bio = $data['bio'] ?? '';
$email = $data['email'] ?? '';

$sql = "UPDATE profile 
        SET name='$name', role='$role', bio='$bio', email='$email', updated_on=NOW() 
        WHERE id=1";

if ($conn->query($sql)) {
    echo json_encode(["status" => "success", "message" => "Profile updated"]);
} else {
    echo json_encode(["status" => "fail", "message" => $conn->error]);
}
?>
