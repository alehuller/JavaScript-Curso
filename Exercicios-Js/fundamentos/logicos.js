function comprar(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;   // || ou
    const comprarTv50 = trabalho1 && trabalho2; // && e
    const comprarTv32 = trabalho1 != trabalho2 //bitwise xor, se os dois forem verdadeiros ou falsos, o resultado eh false; se os dois forem diferentes, o resultado eh true.
    const manterSaudavel = !comprarSorvete;

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel};
}

console.log(comprar(true, true));


