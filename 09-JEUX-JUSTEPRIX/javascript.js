var afficherMessage;
var compteEssai = 0;
var valeurMinimum = 20;
var valeurMaximale = 80;

var random = (Math.floor((valeurMaximale-valeurMinimum)*Math.random())+20);//sort un nombre aléatoirement compris entre 20  et 80.

function jeu(){
	var input = parseInt(prompt("Entrez un nombre compris entre 20 et 80 et trouvez le nombre mystère... ou pas!"));
	if(input < 20 || input > 80){
		window.alert("On avait dit un nombre entre 20 et 80. Essaies encore!");
		compteEssai++;
		jeu();
	}else if (input < random){
		window.alert("C'est plus!");
		compteEssai++;
		jeu();
	}else if (input > random){
		window.alert("C'est moins!");
		compteEssai++;
		jeu();
	}else if (input == random){
		window.confirm("Bravo, tu as trouvé en " + compteEssai + " coups!");
	}
}
jeu();
console.log(random);

