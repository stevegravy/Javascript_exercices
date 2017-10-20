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

let objetsAVendre = [
 { nom: 'epee',
//	title : objetsAVendre[0],
	physic : 12,
	magic : 15,
	minLevel : 5,
	available : true,
},
 { nom: 'hache',
//	title : objetsAVendre[1],
	physic : 2,
	magic : 6,
	minLevel : 1,
	available : false,
},
	
 { nom : 'sceptre',
//	title : objetsAVendre[2],
	physic : 2,
	magic : 6,
	minLevel : 1,
	available : false,
},

 { nom: 'ventouse',
//	title : objetsAVendre[3],
	physic : 20,
	magic : 26,
	minLevel : 15,
	available : true,
}];
function tousObjets(){
	for (i in objetsAVendre)
		console.log(objetsAVendre[i].nom)
}

tousObjets();


