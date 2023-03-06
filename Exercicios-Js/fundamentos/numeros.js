const peso1 = 1.0;
const peso2 = Number("2.0");
const peso3 = 1.1;

console.log(peso1, peso2);
console.log(typeof peso2);
console.log("Peso1 = 1.0 eh inteiro? " + Number.isInteger(peso1));
console.log("Peso2 = 2.0 eh inteiro? " + Number.isInteger(peso2));
console.log("Peso3 = 1.1 eh inteiro? " + Number.isInteger(peso3));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;
const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); //toFixed para mostrar apenas duas casas decimais
console.log(media.toString(2)); //toString(2) para transformar o numero em binario
console.log(typeof media);
console.log(typeof Number);
