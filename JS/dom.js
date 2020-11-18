function foo()
{
    div = document.getElementById('dom_task1');
    h2 = document.createElement('h2');
    h2.setAttribute("id","h2_task_id");
    h2.innerHTML = "Jan i Tomasz";
    div.appendChild(h2);


}
var counter = 0;
function dodajLiczbe()
{
    let div = document.getElementById('dom_task1');
    let h2 = document.getElementById('h2_task_id');
    let h3_to_show = document.createElement('h2');
    text = document.createTextNode(counter.toString());
    h3_to_show.appendChild(text);
    div.insertBefore(h3_to_show,h2);
    counter++;
}

function changeStyle(number)
{
    div = document.getElementById("change_style");
    if(number===1)
    {

        div.style.backgroundColor = "red"
    }
    else if(number===2)
    {
        div.style.backgroundColor = "blue"
    }
    else if(number===3)
    {
        div.style.backgroundColor = "green"
    }
    else if(number===4)
    {
        div.style.color = "red"
    }
    else if(number===5)
    {
        div.style.color = "blue"
    }
    else if(number===6)
    {
        div.style.color = "green"
    }
    else if(number===7)
    {
        div.style.fontFamily = "Arial"
    }
    else if(number===8)
    {
        div.style.fontFamily = "Monotype Corsiva"

    }
    else if(number===9)
    {
        div.style.fontFamily = "Times New Roman"
    }
}

function showAddress() {
  var textnode = document.createTextNode("Kino mieści się na ulicy Piaskowej 21, 02-500 Wrocław. Wejście od strony ulicy Zamkowej");
  var item = document.getElementById("adres-kina").childNodes[0];
  item.replaceChild(textnode, item.childNodes[0]);

}
function hideDetails() {
  var list = document.getElementById("adres-kina");
  list.removeChild(list.childNodes[1]);
}

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

function isKeyPressed(event) {
  if (event.altKey) {
    alert("The ALT key was pressed!");
  } else if (event.ctrlKey){
    alert("The CTRL key was pressed!");
  }
  else if (event.shiftKey){
    alert("The SHIFT key was pressed!");
  }
  else {
    alert("No key was pressed!");
  }
}

function showCoords(event) {
  var cX = event.clientX;
  var sX = event.screenX;
  var cY = event.clientY;
  var sY = event.screenY;
  var coords1 = "client - X: " + cX + ", Y coords: " + cY;
  var coords2 = "screen - X: " + sX + ", Y coords: " + sY;
  document.getElementById("demo").innerHTML = coords1 + "<br>" + coords2;
}
function onMouseMoving(e) {
  var x = e.clientX;
  var y = e.clientY;
  var coor = "Coordinates: (" + x + "," + y + ")";
  document.getElementById("demo1").innerHTML = coor;
}

function clearCoor() {
  document.getElementById("demo1").innerHTML = "";
}

function mouseDown() {
  document.getElementById("welcome").style.color = "red";
}

function mouseOver() {
  document.getElementById("samples").style.color = "red";
}

function mouseOut() {
document.getElementById("samples").style.color = "black";
document.getElementById("welcome").style.color = "black";

}
