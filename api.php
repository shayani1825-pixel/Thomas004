<?php

header("Content-Type: application/json; charset=UTF-8");

$systemOnline = true;

$response = [
    "system" => "THOMAS",
    "status" => $systemOnline ? "ONLINE" : "OFFLINE",
    "power" => $systemOnline ? "STABLE" : "CRITICAL",
    "core" => $systemOnline ? "100%" : "0%",
    "year" => 2026
];

echo json_encode($response, JSON_UNESCAPED_UNICODE);