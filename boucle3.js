const prompt = require('prompt-sync')();
let n = parseInt(prompt("demendez un nombre pour calculer la somme:"));
let result = 0
for ( let i = 1; i <= n; i++)
    result += i;
console.log(`le resultat est ${result}`);

