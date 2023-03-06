let contador = 1;
while(contador <= 10) {
    //console.log("Contador = " + contador);
    contador++;
}

for(let i = 1; i <= 10; i++) {
    //console.log("Contador = " + i);
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];
for(let j = 0; j < notas.length; j++) {
    console.log("Notas = " + notas[j]);
}

console.log(" ");

const notasB = [];
for(let k = 0; k < 10; k++) {
    notasB.push(Math.floor(Math.random() * (10 - 0) + 0));
    console.log("NotasB = " + notasB[k]);
}