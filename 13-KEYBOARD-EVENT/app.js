// Exerice 1
var couleurDiv = function (event) {
   var target = document.getElementById("character");
    switch (event.keyCode) {
    case '0':
        target.style.backgroundColor = 'red';
        break;
    case '1':
        target.style.backgroundColor = '#f5ff00';
        break;
    case '2':
        target.style.backgroundColor = '#6cff00';
        break;
    case '3':
        target.style.backgroundColor = '#00ff80';
        break;
    case '4':
        target.style.backgroundColor = '#0080ff';
        break;
    case '5':
        target.style.backgroundColor = '#4500ff';
        break;
    case '6':
        target.style.backgroundColor = '#ba00ff';
        break;
    case '7':
        target.style.backgroundColor = '#ff00a7';
        break;
    case '8':
        target.style.backgroundColor = '#ff0045';
        break;
    case '9':
        target.style.backgroundColor = '#ff0000';
        break;
    }
}
    
window.addEventListener('keydown',couleurDiv);


//Exercice 2
var highlightAddKey = function (event) {
   switch (event.keyCode) {
    case 37:
      document.getElementById("left").classList.add("highlight");
      break;
    case 38:
      document.getElementById("up").classList.add("highlight");
      break;
    case 39:
      document.getElementById("right").classList.add("highlight");
      break;
    case 40:
      document.getElementById("down").classList.add("highlight");
      break; 
    }
}

var highlightRemoveKey = function (event) {
   switch (event.keyCode) {
    case 37:
      document.getElementById("left").classList.remove("highlight");
      break;
    case 38:
      document.getElementById("up").classList.remove("highlight");
      break;
    case 39:
      document.getElementById("right").classList.remove("highlight");
      break;
    case 40:
      document.getElementById("down").classList.remove("highlight");
      break; 
    }
}

window.addEventListener('keydown',highlightAddKey);
window.addEventListener('keyup',highlightRemoveKey);

