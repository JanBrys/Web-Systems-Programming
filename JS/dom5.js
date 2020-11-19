
nazwisko = document.getElementById("nazwisko_id");

nazwisko.addEventListener('focus',event =>
{
    event.target.placeholder = "Wpisz nazwisko";
});
nazwisko.addEventListener('blur',event =>
{
    event.target.placeholder = "";
});

form = document.getElementById("buy_form");

form.addEventListener('reset',event => {
   if (!confirm("Czy na pewno chcesz zresetowac formularz?"))
   {
       event.preventDefault();
   }
});

form.addEventListener('submit',event => {
    if(!confirm("Czy na pewno chcesz wyslac formularz?"))
    {
        event.preventDefault();
    }
});
