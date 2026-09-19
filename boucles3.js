const prompt= require('prompt-sync')();
let n = parseInt(prompt("Entrez un nombre pour calculer sa factorielle :"));
let Factorielle = 1;
for (let i = 1; i <= n; i++)
     { Factorielle *= i;}
console.log(`${n}! = ${Factorielle}`);

