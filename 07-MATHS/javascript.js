// Variables
var a = Math.min(7, 5, -12, 6, 32, 18, 14, -2);

var b = Math.max(-3, 9, 21, 36, 27, 54, 17, 35)
var c = a + b;

console.log(a);
console.log(b);
console.log(c);

//Exercice: Aléatoire 1
var floatBateau = 10.4;
var couleBateau = Math.floor(floatBateau);
var voleBateau = Math.ceil(floatBateau);

console.log(floatBateau);
console.log(couleBateau);
console.log(voleBateau);

//Exercice: Aléatoire 2
var zeroUn = Math.random();
var cinquanteaCent = Math.floor((zeroUn)*100);
var zeroDix = Math.floor((zeroUn)*11);

console.log(zeroUn);
console.log(cinquanteaCent);
console.log(zeroDix);

//Exercice: Aléatoire 3
let tab = ["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"];

var nombre = (Math.floor(Math.random()* tab.length));
console.log (tab[nombre])