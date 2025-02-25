class Aluno {
    #nota;
    constructor(nome, idade, nota) {
        this.nome = nome;
        this.idade = idade;
        this.#nota = nota;
    }
    
    estudar = () => console.log(`${this.nome} está estudando.`);
    
    verNota = () => this.#nota;
    
    notadoraul = () => 
        console.log(`${this.nome} tem ${this.idade} anos e tirou a nota ${this.#nota}.`);
}

const raul = new Aluno("Raul", 27, 100);

console.log(raul.nome);
console.log(raul.verNota());
raul.notadoraul(); 
