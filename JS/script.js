var average=0;
var sum=0;
function rollLuckyNumber()
{
    var lucky_number = document.getElementById("lucky_number");
    var number = -1;
    while(number<50)
    {
        number = Math.floor(Math.random()*100);
    }
    average++;
    sum +=number;
    lucky_number.innerHTML = "Twoja szczesliwa liczba to: " + number ;
}
function showAvarageNumber()
{
    var average_div = document.getElementById("average");
    if(sum===0 && average===0)
    {
        average_div.innerHTML = "Najedz,aby zobaczyć srednia wylosowanych liczb: "+ 0;
    }
    else
    {
        average_div.innerHTML ="Najedz, by zobaczyć srednia wylosowanych liczb: " + sum/average;
    }
}
