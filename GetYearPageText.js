/**
 * Created by hovo on 11.12.13.
 */
var DayObject={
    day:11,
    month:12,
    year:1994
}
var  showYearPageText = function (DayObject, onComplete) {

    var page = new Morebits.wiki.page(DayObject.month);

    page.load(function () {
        var text = page.getPageText();
        onComplete(text);
    });

};

////// գլխավոր  ֆունկցիա//////

var getYearPageText = function(){
    var processText = function (text) {
        Print(text);
    };

    showYearPageText(DayObject, processText);

}

var Print=function(text)
{
    document.getElementById("demo").innerHTML=text;
}