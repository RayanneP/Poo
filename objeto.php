<?php
$aluno = [
    "nome" => "Pedro",
    "idade" => 15,

    "estudar" => function() use (&$aluno) {
        echo "{$aluno['nome']} está estudando";
    }
];

$aluno['estudar'](); 
?>
