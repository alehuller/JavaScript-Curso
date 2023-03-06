function tratarErroELancar(erro) {
    //throw new Error("...");
    //throw 10
    //throw true
    throw "Mensagem";
}

function imprimirNomeGritado(obj) {
    try {
    console.log(obj.nome.toUpperCase() + "!!!");
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log("final");
    }
}

const vasco = {nome: "Roberto"};
imprimirNomeGritado(vasco);