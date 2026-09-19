const prompt= require('prompt-sync')();
let RevenuAnnuel = parseFloat(prompt('entrez votre Revenu annuel (en euros):'));
let ScoreDeCrédit = parseFloat(prompt('entrez score de credit(sur1000):'));
let dureeDePret = parseFloat(prompt('duree de credit'));
if (RevenuAnnuel >= 30000 && ScoreDeCrédit >= 700 && dureeDePret <= 10) 
    console.log ('Éligible')
 else if (RevenuAnnuel >= 30000 && ScoreDeCrédit >= 650 && dureeDePret <= 15) 
    console.log('Éligible avec conditions')
else 
    console.log('Non éligible')