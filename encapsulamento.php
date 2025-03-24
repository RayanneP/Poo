<?php
class Aluno {
    public $nome;
    public $idade;
    private $nota; 

    public function __construct($nome, $idade, $nota) {
        $this->nome = $nome;
        $this->idade = $idade;
        $this->nota = $nota; 
    }

    public function verNota() {
        return $this->nota;
    }
}

$daniluski = new Aluno("Daniluski", 9, 0);

echo $daniluski->nome; 
echo $daniluski->verNota(); 
?>
