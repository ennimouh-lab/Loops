const prompt= require('prompt-sync')();
let n = parseInt(prompt("Entrez le nombre d'éléments :"));
let tableau = [];
for (let i = 0; i < n; i++) {
    tableau[i] = parseInt(prompt(`Entrez l'élément ${i + 1} :`));
}
let maximum = tableau[0];
for (let i = 1; i < n; i++) {
    if (tableau[i] > maximum) {
        maximum = tableau[i];
    }
}
console.log("Le plus grand élément est : " + maximum);