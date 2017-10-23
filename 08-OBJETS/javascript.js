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




var mainCharacter={
	name: "Bibi",
	level: 36,
	life: 11,
	var attack = function
	weapon:
	{
		name: "faucille",
		damage: 12,
	}
};
