/**
 * Created by hovo on 11.12.13.
 */
var monthName={
    1:'Հունվար',
    2:'Փետրվար',
    3:'Մարտ',
    4:'Ապրիլ',
    5:'Մայիս',
    6:'Հունիս',
    7:'Հուլիս',
    8:'Օգոստոս',
    9:'Սեպտեմբեր',
    10:'Հոկտեմբեր',
    11:'Նոյեմբեր',
    12:'Դեկտեմբեր'
};
var DayObject={
    day:11,
    month:12,
    year:1994
}
function monthNumber(m)
{
    return monthName[m];
}
var ConvertMonthDayName=function(DayObject)
{
    return  monthNumber(DayObject.month)+"—"+DayObject.day;
}

var  ShowPageText = function (DayObject, onComplete) {

    var page = new Morebits.wiki.page(ConvertMonthDayName(DayObject));

    page.load(function () {
        var text = page.getPageText();
        onComplete(text);
    });

};

////// գլխավոր  ֆունկցիա//////

var getDatePageText = function(){
    var processText = function (text) {
        Print(text);
    };

    ShowPageText(DayObject, processText);

}

var Print=function(text)
{
    document.getElementById("demo").innerHTML=text;
}