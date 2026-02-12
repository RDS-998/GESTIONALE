<?php
header('Content-Type: application/json');

// File dove sono salvate le posizioni
$file = 'positions.json';

// Se il file non esiste, scrivi un array vuoto
if (!file_exists($file)) {
    echo json_encode([]);
} else {
    // Altrimenti leggi e stampa il contenuto
    $json = file_get_contents($file);
    echo $json;
}
?>
