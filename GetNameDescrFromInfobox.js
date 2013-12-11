/**
 * Created by win 7 on 28.11.13.
 */
var text = "{{Տեղեկաքարտ Գրող\
    | name = Վիլյամ Սարոյան\
    | image = William Saroyan.jpg\
    | imagesize = 200px\
    | caption = Վիլյամ Սարոյան, 1940\
    | pseudonym = Սիրակ Գորյան\
    | birthdate = [[Օգոստոս 31]], [[1908]]\
    | birthplace = [[Ֆրեզնո, Կալիֆորնիա]], [[ԱՄՆ]]\
    | deathdate = {{Մահվան ամսաթիվ և տարիք|df=1|1981|5|18|1908|8|31}}\
    | deathplace = [[Ֆրեզնո, Կալիֆորնիա]], [[ԱՄՆ]]\
    | occupation = վիպասան, թատերագիր, short story writer\
    | nationality = [[Հայ]]\
    | period = 1934-1980\
}}";

////////////////Վերադարձնում է  NameObject` name ,description դաշտերով,որտեղ name-ը տվյալ անձի անունն է,description-ը՝ ազգանունը՝ կախված տեղեկաքարտի տեսակից///////////

function GetNameDescription(name, descr) {
    var start = text.indexOf(name) + name.length;
    var end = text.indexOf("|", start);
    var n = text.slice(start, end);
    n = n.replace(/=/, "");
    n=n.trim();
    start = text.indexOf(descr) + descr.length;
    end = text.indexOf("|", start);
    var description = text.slice(start, end);
    description = description.replace(/=/, "");
    description = description.replace("[[", "");
    description = description.replace("]]", "");
    description = description.trim();
    var NameObject = { name: n, description: description };
    return NameObject.name+NameObject.description;

}

function Click(text) {
    ////////////////Նախ պարզենք  Տեղեկաքարտի տեսակը.////////////////

    var start = text.indexOf("Տեղեկաքարտ") + "Տեղեկաքարտ".length;
    var end = text.indexOf("|", start);
    var description = text.slice(start, end);
    description = description.trim();
    var info;

    ///////////////Անուհետև աշխատեցնենք GetNameDescription ֆունկցիան ըստ տեղեկաքարտի տեսակի//////////

    var fieldsName={
        "գրող":{
            name1:"name",
            profession:"occupation"
        },
        "Անձ":{
            name1:"հայերեն անուն",
            profession:"տիտղոս"
        },
        "Կաթողիկոս":{
            name1:"հայերեն անուն",
            profession:"տիտղոս"
        },
        "երաժիշտ":{
            name1:"Name",
            profession:"Occupation"
        },
        "Դերասան":{
            name1:"Բնագիր անուն",
            profession:"Մասնագիտություն"
        },
        "Պաշտոնատար":{
            name1:"ԱԱՀ",
            profession:"պաշտոն"
        },
        "Ռազմական գործիչ":{
            name1:"ամբողջական անուն",
            profession:"պաշտոն"
        },
        "Ըմբշամարտիկ":{
            name1:"անուն",
            profession:"նկարագրում"
        },
        "Շախմատիստ": {
            name1:"անուն",
            profession:"նկարագրում"
        },
        "Նկարիչ":{
            name1:"Ի ծնե տրված անունը",
            profession:"Ոճ(եր)ը"
        },
        "Գիտնական":{
            name1:"անուն",
            profession:"գա"
        }
    }
    /////տեղեկաքարտերը շատ են․․․/////



    info=GetNameDescription(fieldsName[description].name1,fieldsName[description].profession);
    return info;

    //document.getElementById("demo").innerHTML = info;
}
var result=Click(text);
console.log(result);