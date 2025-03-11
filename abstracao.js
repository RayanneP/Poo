class pessoa { 
    constructor(nome, idade) {
        if(this.constructor === pessoa) {
            throw new Error("Imploro para você: não crie isso de novo pelo amor de Deus.")    }
        this.nome = nome; // significam "este objeto"
        this.idade = idade;
}
    apresentar = () => 
        console.log (`Olá, me chamo ${this.nome} e tenho ${this.idade} anos de idade.`)
}

class aluno extends pessoa{
    estudar = () => 
        console.log(`Meu nome é ${this.nome} e eu sou um(a) aluno(a) do SENAI.`);
}

class professor extends pessoa{
    ensinar = () => 
        console.log(`Olá, me chamo ${this.nome}, sou professor(a) no SENAI.`);
}

/*
try {
    const p = new pessoa("Nicolas", 40); // erro
} catch (e) {
    console.log(e.message); // Isso vai capturar e exibir a mensagem de erro
}
    */

// criar objeto
const ray = new aluno("Ray" , 17)
const dani = new professor ("Dani" , 80)

//chamar o objeto
ray.apresentar();
dani.apresentar();
ray.estudar();
dani.ensinar();