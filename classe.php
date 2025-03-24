<?php
class Aluno {
    public $nome;
    public $idade;

    public function __construct($nome, $idade) {
        $this->nome = $nome;
        $this->idade = $idade;
    }

    public function estudar() {
        echo "{$this->nome} está estudando";
    }
}

// Criando objetos 
$dani = new Aluno("Dani", 17);
$zani = new Aluno("Zani", 91);

//echo $dani->nome;  
//echo $zani->idade;

$dani->estudar();
$zani->estudar();

?>
