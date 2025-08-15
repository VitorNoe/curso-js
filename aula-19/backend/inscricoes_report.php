<?php
// Relatório de inscrições (JSON ou CSV)
session_start();
if (!isset($_SESSION['admin'])) {
    http_response_code(401);
    echo json_encode(['erro' => 'Não autorizado']);
    exit;
}


$dbFile = 'eventos.db';
$db = new PDO('sqlite:' . $dbFile);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
// Cria as tabelas se não existirem
$db->exec('CREATE TABLE IF NOT EXISTS eventos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    data TEXT NOT NULL,
    local TEXT NOT NULL,
    descricao TEXT
)');

$sql = 'SELECT id, nome, data, local, descricao FROM eventos ORDER BY data DESC';
$stmt = $db->query($sql);
$eventos = $stmt->fetchAll(PDO::FETCH_ASSOC);

if (isset($_GET['csv'])) {
    header('Content-Type: text/csv');
    header('Content-Disposition: attachment; filename="eventos.csv"');
    $out = fopen('php://output', 'w');
    if (!empty($eventos)) {
        fputcsv($out, array_keys($eventos[0]));
        foreach ($eventos as $row) {
            fputcsv($out, $row);
        }
    }
    fclose($out);
    exit;
}

header('Content-Type: application/json');
echo json_encode($eventos);
