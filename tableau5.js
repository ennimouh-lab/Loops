const prompt= require('prompt-sync')();
let n = parseInt(prompt("Entrez le nombre d'éléments :"));
let tableau = [];
for (let i = 0; i < n; i++) {
    tableau[i] = parseInt(prompt(`Entrez l'élément ${i + 1} :`));
}
let minimum = tableau[0];
for (let i = 1; i < n; i++) {
    if (tableau[i] < minimum) {
        minimum = tableau[i];
    }
}
console.log("Le plus petit élément est : " + minimum);