<?php
// Estatísticas agregadas para o painel admin
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


// Total de eventos
$total_eventos = $db->query('SELECT COUNT(*) FROM eventos')->fetchColumn();

// Total de inscrições
$db->exec('CREATE TABLE IF NOT EXISTS inscricoes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    data TEXT NOT NULL,
    evento_id INTEGER NOT NULL,
    FOREIGN KEY(evento_id) REFERENCES eventos(id)
)');
$total_inscricoes = $db->query('SELECT COUNT(*) FROM inscricoes')->fetchColumn();

// Inscrições por evento
$sql = 'SELECT eventos.id, eventos.nome, COUNT(inscricoes.id) as inscricoes FROM eventos LEFT JOIN inscricoes ON eventos.id = inscricoes.evento_id GROUP BY eventos.id ORDER BY eventos.data DESC';
$eventos = $db->query($sql)->fetchAll(PDO::FETCH_ASSOC);

header('Content-Type: application/json');
echo json_encode([
    'total_eventos' => $total_eventos,
    'eventos' => $eventos
]);
