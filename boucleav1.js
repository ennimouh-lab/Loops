 const prompt = require('prompt-sync')();
 let n = parseInt(prompt("Entrez un nombre pur avoir sa multiplication :"));
let affichage = "";
for (let i = 10; i >= 1; i--) {
      let resultat = n * i;
   affichage += `${n} * ${i} = ${resultat}   `};
   console.log (affichage);
