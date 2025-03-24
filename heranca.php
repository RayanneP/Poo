<?php

class Pessoa {
    public $nome;
    public $idade;

    public function __construct($nome, $idade)
    {
        $this->nome = $nome;
        $this->idade = $idade;
    }
    public function apresentar (){
        echo "Olá, sou {$this->nome} e tenho {$this->idade}";
    }
}
// A Classe Aluno herdar de Pessoa
class Aluno extends Pessoa{
    public function estudar(){
        echo "{$this->nome} esta estudando";
    }
}
// A Classe Professor herda de Pessoas

class Professor extends Pessoa{
    public function ensinar(){
        echo " Professor {$this->nome} esta ensinando";
    }
}
$lais = new Aluno ("Lais", 67);
$nadja = new Professor ("Nadja", 2);

$lais->apresentar();
$lais->estudar();
$nadja->apresentar();
$nadja->ensinar();
?>