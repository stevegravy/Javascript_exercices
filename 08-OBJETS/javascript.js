//Exercice PNJ
let Character = {   //définir les valeurs des clés de l'objet
	name : "Steve",
	age : 39,
	items_to_give : ["chapeau", "canne", "guitare"]
}
console.log(Character.name);
console.log(Character.age);
console.log(Character.items_to_give);

function giveItem (){
	var aleatoire = (Math.floor(Math.random() * Character.items_to_give.length)); //Faire sortir un élément du tableau aléatoirement.
	console.log (Character.items_to_give[aleatoire]);
}

giveItem()




//Exercice Shop

let objetsAVendre = [//Tableau avec différents objets
	{ title: 'epee',
//	title : objetsAVendre[0],
	physic : 12,
	magic : 15,
	minLevel : 5,
	available : true,
},
 { title: 'hache',
//	title : objetsAVendre[1],
	physic : 2,
	magic : 6,
	minLevel : 1,
	available : false,
},
	
 { title : 'sceptre',
//	title : objetsAVendre[2],
	physic : 2,
	magic : 6,
	minLevel : 1,
	available : false,
},

 { title : 'ventouse',
//	title : objetsAVendre[3],
	physic : 20,
	magic : 26,
	minLevel : 15,
	available : true,
}];



let listeObjets = [];//Affiche liste title (nom des objets)
for(var i=0;i<objetsAVendre.length;i++){
	listeObjets.push(objetsAVendre[i].title);
}

console.log(listeObjets)



var objetsDisponibles = function (){//Affiche les objets disponibles
	for(var i = 0; i<objetsAVendre.length; i++){
		if (objetsAVendre[i].available == true) {
			console.log(objetsAVendre[i].title + " sont dispos")
		}
	}
}

 objetsDisponibles();


var niveauMinimum = function (){
	for(var i=0; i<objetsAVendre.length; i++){
		if (objetsAVendre[i].minLevel >= 10){
			console.log(objetsAVendre[1].title + " a le niveau minimum de 10 pour continuer")
		}
	}
}

niveauMinimum();



//Exercice Personnage
var mainCharacter={
	name: "Bibi",
	level: 36,
	life: 11,
	attack: function(){
		var nom = mainCharacter.name;
		var arme = mainCharacter.weapon.name;
		var accuracy = mainCharacter.level * mainCharacter.weapon.damage;
		console.log(nom + " attaque avec l'arme " + arme + " les dégats sont de " + accuracy);
	},
	weapon:
	{
		name: "faucille",
		damage: 12,
	},
};

mainCharacter.attack();




//Exercice Bonus
var charachter={
	name: "Lee",
	level: 32,
	life: 6,
	attack: function(){
		var nom = character.name;
		var arme = character.weapon.name;
		var accuracy = character.level * character.weapon.damage;
		console.log(nom + " attaque avec l'arme " + arme + " les dégats sont " + accuracy);
	},
	weapon:
	{
		name: "hache",
		damage: 62,
	},
};

var opponentCharacter={
	name: "Auroch",
	level: 26,
	life: 4,
	attack: function(){
		var nom = opponentCharacter.name;
		var arme = opponentCharacter.weapon.name;
		var accuracy = opponentCharacter.level * opponentCharacter.weapon.damage;
		console.log(nom + " attaque avec l'arme " + arme + " les dégats sont " + accuracy);
	},
	weapon:
	{
		name: "glaive",
		damage: 56,
	},
};

var mainCharacter={
	name: "Box shadow",
	level: 40,
	life: 14,
	attack: function(){
		var nom = mainCharacter.name;
		var arme = mainCharacter.weapon.name;
		var accuracy = mainCharacter.level * mainCharacter.weapon.damage;
		console.log(nom + " attaque avec l'arme " + arme + " les dégats sont " + accuracy);
	},
	weapon:
	{
		name: "épée à deux mains",
		damage: 62,
	},
};

attack()




