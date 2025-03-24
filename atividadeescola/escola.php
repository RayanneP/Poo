<?php

class Pessoa {
    protected $nome;
    protected $idade;
    
    public function __construct($nome, $idade) {
        $this->nome = $nome;
        $this->idade = $idade;
    }
    
    public function falar() {
        return "Olá, sou {$this->nome}.";
    }
}

class Aluno extends Pessoa {
    private $nota;
    
    public function __construct($nome, $idade, $nota) {
        parent::__construct($nome, $idade);
        $this->nota = $nota;
    }
    
    public function falar() {
        return "Eu sou o aluno {$this->nome} e estou aprendendo!";
    }
    
    public function getNota() {
        return $this->nota;
    }
}

class Professor extends Pessoa {
    private $disciplina;
    
    public function __construct($nome, $idade, $disciplina) {
        parent::__construct($nome, $idade);
        $this->disciplina = $disciplina;
    }
    
    public function falar() {
        return "Eu sou o professor {$this->nome} e ensino {$this->disciplina}.";
    }
}

$alunos = [
    new Aluno("Carlos", 16, 8.5),
    new Aluno("Mariana", 17, 9.0)
];

$professores = [
    new Professor("José", 40, "Matemática"),
    new Professor("Ana", 35, "Português")
];

$pessoas = array_merge($alunos, $professores);

foreach ($pessoas as $pessoa) {
    echo $pessoa->falar() . "<br>";
    if ($pessoa instanceof Aluno) {
        echo "Nota: " . $pessoa->getNota() . "<br>";
    }
}

?>