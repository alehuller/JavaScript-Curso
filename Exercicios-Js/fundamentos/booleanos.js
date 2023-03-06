let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);
console.log(!isAtivo);

console.log("Os verdadeiros ...");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!"teste");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("Os falsos ...");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Pra finalizar ...");
console.log(!!("" || null || 0 || " ")); // o " " eh a unica expressao verdadeira nessa equacao

let nome = "Lucas";
console.log(nome || "Desconhecido");

let nome2 = "";
console.log(nome2 || "Desconhecido");