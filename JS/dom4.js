function isKeyPressed(event) {
  if (event.altKey) {
    alert("The ALT key was pressed!");
  } else if (event.ctrlKey){
    alert("The CTRL key was pressed!");
  }
  else if (event.shiftKey){
    alert("The SHIFT key was pressed!");
  }
  else if (event.keyCode == 67) {
    alert ("You pressed the C key!");
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
  var coords1 = "client - X: " + cX + ", Y: " + cY;
  var coords2 = "screen - X: " + sX + ", Y: " + sY;
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
