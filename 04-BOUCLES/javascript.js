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


// Multiplication Tables avec 'while'
var multNeuf = 2;
var resultat = multNeuf*9;
while (multNeuf >= 0 && multNeuf < 11){
	console.log(multNeuf + " * 9 = " + resultat)
	multNeuf = multNeuf +1;
}

// Multiplication Tables avec 'for'
var i = 2;
for (var i=0; i<=10; i++) {
	resultat= 9*i;
	console.log(i + " * 9 = " + resultat);
	break
}


//assigner des grades
var grade = 10;
for (var grade = 0; grade <= 100; grade++) {
	if (grade >= 90){
	console.log("pour " + grade + " points, vous avez le grade A");
	}
	
	else if (grade < 90 && grade>= 80){
	console.log("pour " + grade + " points, vous avez le grade B");
	}
	
	else if (grade  < 80 && grade >= 70){
		console.log("pour " + grade + " points, vous avez le grade C");
	}
		
	else if (grade  < 70 && grade >= 65){
		console.log("pour " + grade + " points, vous avez le grade D");
	}
	
	else{
		console.log("pour " + grade + " points, vous avez le grade F");
	}
}


//pyramide
var pyramide = "*";
for (var pyramide = 0; pyramide <= 5; pyramide++) {
	resultat_= pyramide + "*";
	console.log(resultat_);
}