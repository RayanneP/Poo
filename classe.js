//o que é uma classe?
// Modelo para criar vários objetos

//Aluno: é um modelo para criar um aluno(pessoas)
//constructor(nome,idade): criar propriedades
//this.nome: significam este objeto

//Criando a classe aluno
class Aluno{
    constructor(nome, idade) {
        //O constructor é um método tradicional
        this.nome = nome;
        this.idade = idade;
    }
    estudar = () => console.log(`${this.nome} está estudando.`);
    feliz = () => console.log(`${this.nome} está feliz.`);
}

const raul = new Aluno("Raul" , 27)
const daniluski = new Aluno("Daniluski" , 17)
const dani = new Aluno("Dani" , 87)

console.log(raul.nome)

console.log(daniluski.estudar())

console.log(dani.nome) 
console.log(dani.idade)

console.log(dani.feliz())

//Encapsulamento: protege informações privadas evitando mudanças acidentais. Exemplo, um aluno tem uma nota secreta.