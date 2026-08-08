<?php
header('Content-Type: application/json');

// Get the destination number from the request (GET or POST), default to the one in the screenshot
$destination_number = isset($_REQUEST['number']) ? $_REQUEST['number'] : "+916290721134";

$response = array(
    "fetch_after_attempt" => false,
    "destination" => array(
        "numbers" => array(
            $destination_number
        )
    ),
    "record" => true,
    "recording_channels" => "dual",
    "max_ringing_duration" => 45,
    "max_conversation_duration" => 3600
);

echo json_encode($response, JSON_PRETTY_PRINT);
?>
