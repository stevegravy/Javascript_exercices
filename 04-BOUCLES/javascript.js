// Pair et impair avec 'while'

var nombre = 2;
while (nombre <20 && nombre % 2 === 0) {
	console.log(nombre + " est un nombre pair");
	nombre = nombre + 1;
}

// Pair et impair avec 'for'
for (var nbr_Pair = 2; nbr_Pair <20 && nbr_Pair % 2 === 0; nbr_Pair++){
	console.log(nbr_Pair + " est un nombre pair");
}


