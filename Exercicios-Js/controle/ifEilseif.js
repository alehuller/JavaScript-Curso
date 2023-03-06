Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim;
}

const imprimirResultado = function (nota) {
    if(nota.entre(9, 10)) {
        console.log("Quadro de Honra");
    }
    else if (nota.entre(7, 8.99)) {
        console.log("Aprovado");
    }
    else if (nota.entre(4, 6.99)) {
        console.log("Recuperacao");
    }
    else if(nota.entre(0, 3.99)) {
        console.log("Reprovado");
    }
    else {
        console.log("Nota Invalida");
    }
    console.log("Fim");
}

//imprimirResultado(-1);

const imprimirResultado1 = function (nota) {
    if(nota >= 9 && nota <= 10) {
        console.log("Quadro de Honra");
    }
    else if (nota >= 7 && nota <= 8.99) {
        console.log("Aprovado");
    }
    else if (nota >= 4 && nota <= 6.99) {
        console.log("Recuperacao");
    }
    else if(nota >= 0 && nota <= 3.99) {
        console.log("Reprovado");
    }
    else {
        console.log("Nota Invalida");
    }
    console.log("Fim");
}

imprimirResultado(-1);