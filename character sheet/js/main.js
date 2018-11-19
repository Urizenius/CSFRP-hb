var str = document.getElementById("str")
var agi = document.getElementById("agi")
var tfn = document.getElementById("tfn")
var per = document.getElementById("per")
var int = document.getElementById("int")
var kwn = document.getElementById("kwn")
var luck = document.getElementById("luck")

var hide = false;

var attrVal = document.getElementById("atr-val")
attrVal.addEventListener('change' , atributeSet);

function atributeSet(){
  var attrType = document.getElementById("atr-type").value;
  debugger;

  switch(attrType){
    case 'Strength':
      str.innerHTML =  attrVal.value
      break;
    case 'Agility':
      agi.innerHTML =  attrVal.value
      break;
    case 'Percepcion':
      per.innerHTML =  attrVal.value
      break;
    case 'Inteligance':
      int.innerHTML =  attrVal.value
      break;
    case 'Knowlage':
      knw.innerHTML =  attrVal.value
      break;
    case 'Luck':
      luck.innerHTML =  attrVal.value
      break;
    case 'Toughness':
      tfn.innerHTML =  attrVal.value
      break;
  }

}


function hideShow(){

  var addA = document.getElementById("addAtribute");
  var addP = document.getElementById("addPerk");
  var addAr = document.getElementById("addArmor");
  var addW = document.getElementById("addWeapon");
  var addPr = document.getElementById("newPerson");

  if (hide == false) {    
    addA.classList.add("hide");
    addP.classList.add("hide");
    addAr.classList.add("hide");
    addW.classList.add("hide");
    addPr.classList.add("hide");

    hide = true;
} else {
    addA.classList.remove("hide");
    addP.classList.remove("hide");
    addAr.classList.remove("hide");
    addW.classList.remove("hide");
    addPr.classList.remove("hide");

    hide = false;
}
}

