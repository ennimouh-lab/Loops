const prompt= require('prompt-sync')();
let n = Number(prompt("Entrez le nombre d'éléments :"));
let tableau = [];
for (let i = 0; i < n; i++) {
    tableau[i] = Number(prompt("Entrez l'élément " + (i + 1) + " :"));
}
let facteur = Number(prompt("Entrez le facteur de multiplication :"));

for (let i = 0; i < n; i++) {
    tableau[i] = tableau[i] * facteur;
}
console.log("Le tableau résultant est :");
console.log(tableau);