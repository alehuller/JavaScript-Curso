const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let x in nums) {
    if(x == 5) {
        break;
    }
    console.log(x + " = " + nums[x]);
}

console.log(" ");

for (y in nums) {
    if (y == 5) {
        continue; //corta o indice 5 e continua a partir do 6
    }
    console.log(y + " = " + nums[y]);
}

console.log(" ");

externo:
for (a in nums) {
    for(b in nums) {
        if (a == 2 && b == 3) break externo
            console.log("Par = " + a + "," + b); 
    }
}