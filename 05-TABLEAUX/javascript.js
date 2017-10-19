//Addition
var tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sommeTotale = 0;

for (var i = 0; i < tableau.length; i++) {
   sommeTotale = tableau[i] + sommeTotale;
}
console.log(sommeTotale);


//Vos meilleurs choix
var tabActeur = ["Cluzet", "Whahlberg", "Damon"];

console.log("le numéro 1 est " + tabActeur[1]);
console.log("le numéro 2 est " + tabActeur[2]);
console.log("le numéro 3 est " + tabActeur[3]);	


//clone
var nintendo = ["Mario", "Luigi", "Peach"];
console.log(nintendo);

var sliced = nintendo.slice();
nintendo.push("Bowser");

console.log(sliced);







