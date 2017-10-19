var tableauRempli = ["B", "O", "N", "J", "O", "U", "R"];
var tableauVide = ["", "", "", "", "", "", ""];
var fin = tableauRempli.length;
var cpt=0;

while (fin >0){ //On répète la boucle tant qua le nombre de lettre à trouver est strictement plus grand que 0.
	
	var input = prompt("Entrez votre lettre, svp!"); //Affichage de la console utilisateur pour proposer des lettres
	input=input.toUpperCase(); // On peut rentrer minuscule ou majuscule (pas sensible à la casse)
	/*if (input.length != 1){//si la longueur de la chaine de caractères entrée dans la console est diff de 1
		console.log("tappe UNE lettre, connard!")
	}*/
	if(tableauRempli.includes(input)){
		for (var i=0; i<tableauRempli.length; i++){
			if (tableauRempli[i]==input){ //Si la lettre entrée = une lettre du tableau rempli
				var index=tableauRempli.indexOf(input); // il va aller chercher la bonne lettre dans le tableau rempli
				tableauVide.splice (index, 1, input); // il va modifier le tableau vide en remplaçant un vide par la lettre rentrée et comprise dans le tableau rempli (à la bonne place, évidemment.)
				tableauRempli.splice (index, 1, "*");
				fin--; //(on décrémente -1 par lettre remplie dans le tableau vide jusqu'a atteindre 0 et finir la grande boucle while)
				console.log(tableauVide)
				}

			}
		}
		else {
			cpt++;
			console.log("Ratté, essaie encore!")
		}
	}


console.log("Bravo, vous avez gagné!");
console.log(cpt + " erreur(s)!")

