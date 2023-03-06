function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto("Vanish", 10));

function criarProduto2(nome, preco) {
    if (preco > 10) {
        preco = preco - 2;
        console.log("Parabens! Voce recebeu um desconto pela sua compra! O valor final foi: " + preco);
    }
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto2("Pilha", 12));