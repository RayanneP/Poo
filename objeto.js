//POO:
//1- Classe:
//Modelo para criar vários objetos
//2-Objeto(atributo: propriedade, ação: método):
//Representação de algo do mundo real
//3-Pilares:
//Abstração, encapsulamento, herança e polimorfismo.
//Exemplo em js

//criando um objeto de aluno
const aluno = {
    nome: "Raul",
    idade:23,

    estudar: () => console.log
    (`${aluno.nome} está estudando.`),
};
console.log(aluno.nome);
aluno.estudar();


