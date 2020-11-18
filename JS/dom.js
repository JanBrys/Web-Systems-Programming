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