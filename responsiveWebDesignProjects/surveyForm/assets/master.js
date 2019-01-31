var form;
var modal;
var mdlTxt;

function init(){
  console.log("- DOM LOADED -");
  form = document.getElementById('survery-form');
  form.addEventListener("submit", sbtAction);
  modal = document.getElementById('mdlBox');
  mdlTxt = document.getElementById('mdlOutput');

}

function sbtAction(e){
  e.preventDefault();
  modal.style.display = "block";
  var sbtForm = document.getElementById('survery-form');

  var fName   = sbtForm.elements['name'].value;
  var fEmail  = sbtForm.elements['email'].value;
  var fEdad   = sbtForm.elements['edad'].value;

  var fPlanet = sbtForm.elements['planets'].value;

  var fMotivo = sbtForm.elements['motivo'].value;
  var fObsv   = sbtForm.elements['obsv'].value;
  var fAlim = "Indefinido";
  var cont = 0;
  var aVal;
  for (var i = 0; i < sbtForm.elements['alim'].length; i++) {
    if(sbtForm.elements['alim'][i].checked){
      cont ++;
      aVal = sbtForm.elements['alim'][i].value;
    }
  }
  if(cont == 1){
    fAlim = aVal;
  }else if (cont > 1) {
    fAlim = "omnívoro";
  }

  mdlTxt.innerHTML = "<b>" +fName+ "</b>, del planeta <b>" +fPlanet+ "</b>, bienvenido a la Tierra, siéntase a gusto al realizar su objetivo de <b>" +fMotivo+ "</b> en nuestro planeta. Le invitamos a saborear de nuestros especímenes terrestre que seguro agradaran a su paladar de alimentación preferentemente <b>" +fAlim+ "</b>. Pronto le estaremos enviando recomendaciones de actividades correspondiente a su edad (<b>" +fEdad+ " años</b>) al e-mail: <b>" +fEmail+ "</b>. <br> Disfrute de su estadía! <br>";
  if(fObsv){
    mdlTxt.innerHTML += "<br>Observaciones: <br><i>" +fObsv+ "</i>";
  }
}

function mdlClose(){
  modal.style.display = "none";
}


document.addEventListener("DOMContentLoaded", init);
