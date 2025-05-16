<?php
header("Content-Type: application/json");
include "config.php";

$sql = "SELECT * FROM skills LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo json_encode($result->fetch_assoc());
} else {
    echo json_encode(["error" => "No skills found"]);
}
?>
