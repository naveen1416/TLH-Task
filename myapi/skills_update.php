<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include "config.php";

$data = json_decode(file_get_contents("php://input"), true);

$frontend = $data['frontend'];
$backend = $data['backend'];
$others = $data['others'];

$sql = "UPDATE skills SET frontend='$frontend', backend='$backend', others='$others', updated_on=NOW() WHERE id=1";

// $sql = "INSERT INTO skills (frontend, backend, others) 
//         VALUES ('$frontend', '$backend', '$others'";

if ($conn->query($sql)) {
    echo json_encode(["status" => "success", "message" => "Skills updated"]);
} else {
    echo json_encode(["status" => "fail", "message" => $conn->error]);
}
?>
