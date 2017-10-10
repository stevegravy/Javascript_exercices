//Langues
var lang = "fr";
var message;

if (lang == "fr"){
	message = "Bonjour tout le monde !";
} 

else if (lang == "en"){
	message = "Hello, how are you?"
}

else if (lang == "es"){
	message = "Holà, que tal?"
}

else {
	message = "Nous n'avons pas compris quelle est votre langue";
}

console.log(message);


// Affichage des scores
var score = 100;
var résultat;

if (score >= 90){
	résultat = "Vous avee le rang A";
}

else if (score < 90 && score >50){
	résultat = "Vous avez le rang B";
}

else if (score <= 50){
	résultat = "Vous avez le rang C";
}

else {
	résultat = "Le score ne peut etre négatif ou avec décimale";
}

console.log(résultat);


//mattre au pluriel
var mot = "carotte";
var nombre = -2;
var plur;

if (nombre <= 1 && nombre == 0){
	plur = 'je possède ' + nombre + ' carotte';
}

else if (nombre > 1){
	plur = 'je possède ' + nombre + ' carottes';
}

else if (nombre < 0){
	plur = 'on ne peut pas posséder un nombre négatif de carotte!';
}
console.log(plur);

