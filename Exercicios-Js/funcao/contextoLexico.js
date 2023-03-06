const valor = "Global";

function minhaFuncao() {
    //const valor = "Local";
    console.log(valor);
}

function exec() {
    const valor = "Local";
    minhaFuncao();
}

exec();