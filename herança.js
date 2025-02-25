//Herança Permite que uma classe aproveite características de outra, evitando repetição.
//Exemplo: cria a classe pessoa que contém nome e idade, depois criar aluno e professor que herdam as características de pessoa

//Criar classe 
//Com Parametros Nome e Idade
//Criar metodo para apresentar
//Olá, sou nome e tenho idade anos.

class Pessoa{
    constructor(nome, idade) {
        //O constructor é um método tradicional
        this.nome = nome;
        this.idade = idade;
    }
    apresentar = () => 
        console.log(`Olá, sou ${this.nome} e tenho ${this.idade} anos .`);
}
class Aluno extends Pessoa{
    estudar = () => console.log(`Aluno ${this.nome} esta estudando`)
}
class Professor extends Pessoa{
    ensinar = () => console.log(`Professor(a) ${this.nome} esta ensinando`)
}
const lucas = new Aluno("Lucas", 17);
const ray = new Aluno("Rayanne", 17);

const raul = new Professor("Raul", 28);
const nadja = new Professor("Nadja", 31);


lucas.apresentar(); 
raul.apresentar(); 

lucas.estudar();
ray.estudar();

nadja.ensinar();
raul.ensinar();
