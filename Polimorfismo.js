class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    apresentar = () => {
        console.log(`${this.nome} está se apresentando.`);
    }
}

class Aluno extends Pessoa {
    constructor(nome) {
        super(nome);
    }

    apresentar = () => {
        console.log(`${this.nome} é um aluno e está se apresentando.`);
    }
}

class Professor extends Pessoa {
    constructor(nome) {
        super(nome);
    }

    apresentar = () => {
        console.log(`${this.nome} é um professor e está se apresentando.`);
    }
}

// Criando instâncias
const ray = new Aluno("Ray");
const nadja = new Professor("Nadja");

ray.apresentar();  // Ray é um aluno e está se apresentando.
nadja.apresentar(); // Nadja é um professor e está se apresentando.
