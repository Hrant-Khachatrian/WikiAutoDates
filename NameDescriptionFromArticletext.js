/**
 * Created by Mariam on 10.12.13.
 */
var  text="'''Հովհաննես Թադևոսի Թումանյան''' ([[Փետրվար 19]], [[1869]], [[Դսեղ]] - [[Մարտ 23]], [[1923]], [[Մոսկվա]]),\
     [[հայ]] բանաստեղծ, արձակագիր, գրական, ազգային և հասարակական գործիչ:\
     Հովհաննես Թումանյանի ստեղծագործություններում մարմնավորված են հայ ժողովրդի\
     հավաքական իմաստնությունն ու հանճարը, նրա տենչերն ու երազանքները։";
function getDataFromArticleText(text)
{
    var NameObject= {
        name: "",
        description: ""
    }
    var pos1=text.search("'''")+"'''".length;
    var pos2=text.indexOf("(",pos1);
    NameObject.name=text.slice(pos1,pos2);
    var p=text.indexOf(")");
    var pos3=text.indexOf(",",p);

    var pos4=text.indexOf(":");
    NameObject.description=text.slice(pos3,pos4);
    NameObject.description=NameObject.description.replace("'''","");
    NameObject.description=NameObject.description.replace(",","");
    NameObject.description=NameObject.description.replace("[[","");
    NameObject.description=NameObject.description.replace("]]","");
    //NameObject.description=NameObject.name.trim();
    NameObject.description=NameObject.description.trim();
    //alert(NameObject.description);

    //document.getElementById('demo').innerHTML=NameObject.name+"- "+NameObject.description;
    return NameObject;
}
var result=getDataFromArticleText(text);
console.log(result);
