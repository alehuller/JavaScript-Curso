class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log("Meu nome eh " + this.nome);
    }
}

const p1 = new Pessoa("Alejandro");
p1.falar();

const criarPessoa = nome => {
    return {
        falar: () => console.log("Meu nome eh " + nome)
    }
}

const p2 = criarPessoa("Alejandro");
p2.falar();