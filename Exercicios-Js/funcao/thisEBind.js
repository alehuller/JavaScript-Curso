const pessoa = {
    saudacao: "Bom dia!",
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar();

const falar = pessoa.falar;
falar(); //vai dar ruim, falar nao aponta para a funcao falar de do objeto pessoa.

const falarDePessoa = pessoa.falar.bind(pessoa); //bind aponta para a funcao falar do bojeto pessoa
falarDePessoa(); 