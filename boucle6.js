const prompt= require('prompt-sync')();
let n = parseFloat(prompt("entrez un nombre "));
let x = 2;
let i = 2;
while(i <= n)
{
    console.log(`${x}`);
    x += 2;
    i++;
}