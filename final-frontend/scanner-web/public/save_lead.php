<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Database configuration
// Replace with your actual database credentials
$host = "localhost";
$db_name = "u685993406_tarkshya_db"; // Typical Hostinger naming convention
$username = "u685993406_user";
$password = "your_password";

try {
    $conn = new PDO("mysql:host=$host;dbname=$db_name", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Get POST data
    $data = json_decode(file_get_contents("php://input"));

    if (!empty($data->name) && !empty($data->email) && !empty($data->message)) {
        // Prepare SQL and bind parameters
        $stmt = $conn->prepare("INSERT INTO mission_rakshak_leads (name, email, phone, message, created_at) VALUES (:name, :email, :phone, :message, NOW())");
        
        $stmt->bindParam(':name', $data->name);
        $stmt->bindParam(':email', $data->email);
        $stmt->bindParam(':phone', $data->phone);
        $stmt->bindParam(':message', $data->message);

        if ($stmt->execute()) {
            echo json_encode(["status" => "success", "message" => "Request submitted successfully"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Failed to save request"]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Incomplete form data"]);
    }
} catch(PDOException $e) {
    echo json_encode(["status" => "error", "message" => "Connection failed: " . $e->getMessage()]);
}
?>
