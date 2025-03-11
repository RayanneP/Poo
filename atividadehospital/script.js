class Funcionario {
    constructor(nome, cargo) {
        this.nome = nome;
        this.cargo = cargo;
    }
    falar() {
        return `Olá, sou ${this.nome} e sou ${this.cargo}.`;
    }
}

class Medico extends Funcionario {
    falar() { return `O médico ${this.nome} diz: Vou fazer uma cirurgia.`; }
}

class Enfermeiro extends Funcionario {
    falar() { return `A enfermeira ${this.nome} diz: Vou aplicar uma injeção.`; }
}

class Recepcionista extends Funcionario {
    falar() { return `A recepcionista ${this.nome} diz: Bem-vindo ao hospital!`; }
}

class Tecnico extends Funcionario {
    falar() { return `O técnico ${this.nome} diz: Vou realizar um exame.`; }
}

class Limpeza extends Funcionario {
    falar() { return `A equipe de limpeza ${this.nome} diz: Vou higienizar a sala.`; }
}

class Diretor extends Funcionario {
    falar() { return `A diretora ${this.nome} diz: Vamos melhorar o hospital!`; }
}

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        let _idade = idade;
        this.getIdade = () => _idade;
        this.setIdade = (novaIdade) => { if (novaIdade > 0) _idade = novaIdade; };
    }
}

class Paciente extends Pessoa {
    falar() { return `${this.nome} (Paciente) diz: Preciso de atendimento.`; }
}

const funcionarios = [
    new Medico("Dr. Miguel", "Médico"),
    new Enfermeiro("Clara", "Enfermeira"),
    new Recepcionista("Paula", "Recepcionista"),
    new Tecnico("Marcos", "Técnico"),
    new Limpeza("José", "Limpeza"),
    new Diretor("Fernanda", "Diretora"),
    new Paciente("Ricardo", 45)
];

// Verifica se o ambiente é o navegador
if (typeof document !== "undefined" && document.getElementById) {
    // Se estiver no navegador, encontra o elemento <div> com id "output"
    const outputDiv = document.getElementById("output");

    // Cria os elementos <p> para cada funcionário, com o texto retornado pelo método falar(),
    // e insere todos esses elementos dentro do <div> de uma vez, usando innerHTML
    outputDiv.innerHTML = funcionarios.map(func => `<p>${func.falar()}</p>`).join("");
} else if (typeof console !== "undefined") {
    // Se não for no navegador, verifica se o console está disponível (indicando ambiente Node.js)
    funcionarios.forEach(func => {
        // Imprime a mensagem de cada funcionário no console
        console.log(func.falar());
    });
}
