
//Exercice 1
var over = document.querySelectorAll('.hoverMe') ;

for (var i = 0; i < over.length; i++) {
    over[i].addEventListener('mouseover',function(event){
    var target = over[i];
    event.target.style.display = 'none';

    setTimeout(function() {
    event.target.style.display = '';
    },3000);
  },false);
};


//Exercice 2
document.querySelector('#reset').addEventListener("click",function() {
  for (var i = 0; i < over.length; i++) {
    var target = over[i]
    target.style.backgroundColor = 'aqua';
  }
});


//Exercice 3
var ax = document.querySelector('.axe-x');
var ay = document.querySelector('.axe-y');

document.addEventListener("mousemove",function(event) {
  var x = event.clientX;
  var y = event.clientY;
  ax.innerHTML = 'Position en x = '+x;
  ay.innerHTML = 'Position en y = '+y;
})