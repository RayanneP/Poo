<?php

class Pessoa {
    public $nome;

    public function __construct($nome)
    {
        $this->nome = $nome;
    }
    public function apresentar(){
        echo "Olá, sou {$this->nome}";
    }
}
//A classe Aluno Herda de Pessoa e sobrescreve o metodo apresentar

class Aluno extends Pessoa{
    public function apresentar()
    {
        echo "Oi! Meu nome é {$this->nome} e sou aluno";
    }
}
class Professor extends Pessoa{
    public function apresentar()
    {
        echo "Oi! Eu sou o professor {$this->nome}";
    }
}
$bruno = new Aluno("Bruno");
$marcos = new Professor("Marcos");

echo $bruno->apresentar();
echo $marcos->apresentar();
?>