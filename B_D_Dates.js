/**
 * Created by User on 11/30/13.
 */
/**
 * Created by User on 11/30/13.
 */
// amsatver@ petqa stananq, cankali e hetevyal anunnerov
// ->
var Birth_Day=19;
var Birth_Month=2;
var Birth_Year=1869;
var Death_Day=23;
var Death_Month=3;
var Death_Year=1923;



function SaveDates(){
    document.getElementById('display1').style.display = 'none';
    document.getElementById('display2').style.display = '';
    /*var url = "saveDates.html";
     window=window.open(url, "_self");*/


    //******texteri mej texadrel hetevyal amsatver@, u cankali e texteri anunner@ grel text1,text2,text3,text4***********
    var B_Day = document.getElementById('ID_Birth_Day');
    var B_Month = document.getElementById('ID_Birth_Month');
    var B_Year = document.getElementById('ID_Birth_Year');
    var D_Day = document.getElementById('ID_Death_Day');
    var D_Month = document.getElementById('ID_Death_Month');
    var D_year = document.getElementById('ID_Death_Year');

}


// 2rd display

var text1="Ծննդյան ամսաթիվ";
var text2="Ծննդյան ամսաթիվ Ծննդյան ամսաթիվ Ծննդյան ամսաթիվ Ծննդյան ամսաթիվ";

var text3=1122;
var text4="Ծննդյան ամսաթիվ Ծննդյան ամսաթիվ";
function insertText ()
{
    document.getElementById('ID_Birth_Day').value = Birth_Day;
    document.getElementById('ID_Birth_Month').value = Birth_Month;
    document.getElementById('ID_Birth_Year').value = Birth_Year;
    document.getElementById('ID_Death_Day').value = Death_Day
    document.getElementById('ID_Death_Month').value = Death_Month;
    document.getElementById('ID_Death_Year').value = Death_Year;
    //function to insert any text on the td with id "****"
    document.getElementById('text1_id').innerHTML= text1;
    document.getElementById('text2_id').innerHTML = text2;
    document.getElementById('text3_id').innerHTML= text3;
    document.getElementById('text4_id').innerHTML= text4;
}

function closeWin()
{
    var win=location.pathname;
    win.close();
    document.close(location.pathname);
}
