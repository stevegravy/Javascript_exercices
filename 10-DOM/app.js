//Manipulation de classe
document.body.classList.remove('bg-aqua');
document.body.classList.add('bg-olive');

document.getElementById("first-paragraph").classList.remove('bg-lime', 'gray');

document.getElementById("first-paragraph").classList.add('aqua');

document.getElementsByTagName("blockquote").classList.add('bg-while');



//Selecteurs CSS
var a = document.querySelector('#my-table');
a.classList.add('bg-purple');

var b = document.querySelectorAll('p');
b.classList.add('shadow');



//Exercice 3
document.getElementsByTagName("pre").style.color="red";//change la couleur du texte

document.getElementsByTagName("pre").style.backgroundColor="blue";//change le background


document.getElementsByTagName("pre").style.borderTop="3px solid red";

document.getElementsByTagName("pre").style.borderBottom="3px solid red";

var h3 = document.getElementsByTagName("h3")
h3.innerHTML="<em>Itelic title ! yeah !</em>";