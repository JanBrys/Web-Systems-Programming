
function borderFirst(){
  var x = document.images[0];
  x.style.border = "10px dotted black";

}

function markBack() {
  document.links[0].style.border = "5px solid red";
}

function checkValues(){
    var x = document.forms[0];
    var txt = "";
    var i;
    for (i = 0; i < x.length-2; i++) {
      txt = txt + x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = txt;
}

function anchorsNumber() {
    var x = document.anchors.length;
    document.getElementById("demo").innerHTML = x;

}

function change_title(){
  document.getElementsByTagName("h1")[0].innerHTML = "Zarejestruj się i odbierz nagrodę!";
}
