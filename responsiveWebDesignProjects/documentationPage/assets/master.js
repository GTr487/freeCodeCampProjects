document.addEventListener('DOMContentLoaded', ready);

function ready(){
  var aList    = document.getElementsByClassName('nav-link');
  var boxMenu  = document.getElementById('toggle-men');
  console.log (aList)

  for (var i = 0; i < aList.length; i++) {
    aList[i].addEventListener('click', function(){
      boxMenu.checked = false;
    })
  }
}
