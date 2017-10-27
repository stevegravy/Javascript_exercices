/*//Manipulation de classe
document.body.classList.remove('bg-aqua');
document.body.classList.add('bg-olive');

document.getElementById("first-paragraph").classList.remove('bg-lime', 'gray');

document.getElementById("first-paragraph").classList.add('aqua');

document.getElementsByTagName("blockquote").classList.add('bg-while');



//Selecteurs CSS
var a = document.querySelector('#my-table');
a.classList.add('bg-purple');//Ajouter la classe "bg-purple" à l'élément "my-table"

var b = document.querySelectorAll('.container p');
b.classList.add('shadow');//Ajouter la classe "shadow" à tous les paragraphes dans 'container'.





//Exercice 3
document.getElementsByTagName("pre").style.color="red";//change la couleur du texte

document.getElementsByTagName("pre").style.backgroundColor="blue";//change le background


document.getElementsByTagName("pre").style.borderTop="3px solid red";//Ajouter border-top

document.getElementsByTagName("pre").style.borderBottom="3px solid red";//ajouter border-bottom

var h3 = document.getElementsByTagName("h3")[0];
h3.innerHTML="<em>Itelic title ! yeah !</em>";

var h2 = document.getElementsByTagName("h3") [0];
h2.innerHTML="<strong>HTML doens't work !</strong>";


//Exercice 4 : Création d'éléments
var li = document.createElement("li");// Créer un élément <li> dans le premier <ul>
var contenu = document.createTextNode("Mon meilleur ami est <a href='http://www.google.com'>Google</a>");// Créer du contenu texte
li.appendChild(contenu);// ajouter le contenu dans la nouvelle balise <li>
document.ul.appendChild(li);// placer le nouveau <li> dans le <ul>
ul.li.getElementsByTagName(a).style.backgroundColor="green";//Changer la couleur du lien*/


//Exercice 4 (qui est en fait le 5) : Création et suppression de plusieurs éléments
var ol = document.getElementsByTagName("ol");
var li = document.createElement("li");
var tab = ["Silent Teacher", "Code Monkey", "CodeCombat"];

for (var i=0; i<ol.length; i++){
    ol.removeChild[i](ol.firstChild);
}


for (var i=0; i<tab.length; i++){
    var tabConstruction = document.createElement("li");
    tab[i]
    
}









