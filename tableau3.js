const prompt =require('prompt-sync')();
let taille = parseInt(prompt("Combien d'éléments voulez-vous dans le tableau ? "));
let monTableau = [];
let somme = 0;
for (let i = 0; i < taille; i++) {
    let valeur = parseInt(prompt(`Entrez l'élément n°${i + 1} :`));

    monTableau.push(valeur);
}
for(let j = 0; j < monTableau.length; j++)
{
    somme += monTableau[j];
}
console.log("Voici le resultat :");
console.log(somme);