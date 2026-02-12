<?php
header('Content-Type: application/json');

// File dove salvare le posizioni (nella stessa cartella)
$file = 'positions.json';

// Recupera i dati inviati via POST
$id = $_POST['id'] ?? '';
$lat = $_POST['lat'] ?? '';
$lon = $_POST['lon'] ?? '';
$timestamp = $_POST['timestamp'] ?? '';

if (!$id || !$lat || !$lon || !$timestamp) {
    echo json_encode(['status' => 'error', 'message' => 'Missing data']);
    exit;
}

// Leggi il file esistente
$data = [];
if (file_exists($file)) {
    $json = file_get_contents($file);
    $data = json_decode($json, true) ?? [];
}

// Pulisci i dati vecchi (più di 1 ora fa)
$now = round(microtime(true) * 1000);
$oneHourAgo = $now - (60 * 60 * 1000);

$newData = [];
foreach ($data as $key => $value) {
    if ($value['timestamp'] > $oneHourAgo) {
        $newData[$key] = $value;
    }
}

// Aggiungi/Aggiorna la posizione corrente
$newData[$id] = [
    'id' => $id,
    'lat' => $lat,
    'lon' => $lon,
    'timestamp' => $timestamp,
    'user' => $id // Compatibilità
];

// Salva il file
if (file_put_contents($file, json_encode($newData))) {
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Write failed']);
}
?>
