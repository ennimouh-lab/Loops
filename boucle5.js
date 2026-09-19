const prompt= require('prompt-sync')();
let base = parseFloat(prompt("entrez un base"));
let exposant = parseFloat(prompt("entrez exposant"));
let resultat = 1 ; 
for (let i=0 ; i<exposant ;i++)
      {resultat*=base}
console.log(`${resultat}`);