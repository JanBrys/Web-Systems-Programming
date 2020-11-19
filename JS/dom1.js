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

function showAddress() {
  var textnode = document.createTextNode("Kino mieści się na ulicy Piaskowej 21, 02-500 Wrocław. Wejście od strony ulicy Zamkowej");
  var item = document.getElementById("adres-kina").childNodes[0];
  item.replaceChild(textnode, item.childNodes[0]);

}
function hideDetails() {
  var list = document.getElementById("adres-kina");
  list.removeChild(list.childNodes[1]);
}
