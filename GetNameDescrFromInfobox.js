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

function Click() {
    ////////////////Նախ պարզենք  Տեղեկաքարտի տեսակը.////////////////

    var start = text.indexOf("Տեղեկաքարտ") + "Տեղեկաքարտ".length;
    var end = text.indexOf("|", start);
    var description = text.slice(start, end);
    description = description.trim();
    var info;

    ///////////////Անուհետև աշխատեցնենք GetNameDescription ֆունկցիան ըստ տեղեկաքարտի տեսակի//////////

    switch (description) {
        case "Կաթողիկոս":info=GetNameDescription("հայերեն անուն","տիտղոս");break;
        case "Անձ": info = GetNameDescription("ԱԱՀ", "նկարագրում");break;
        case "Գրող": info = GetNameDescription("name", "occupation");break;
        case "երաժիշտ": info = GetNameDescription("Name", "Occupation");break;
        case "Դերասան": info = GetNameDescription("Բնագիր անուն", "Մասնագիտություն");break;
        case "Պաշտոնատար": info = GetNameDescription("ԱԱՀ", "պաշտոն");break;
        case "Ռազմական գործիչ": info = GetNameDescription("ամբողջական անուն", "պաշտոն");break;
        case "Ըմբշամարտիկ": info = GetNameDescription(" անուն", "նկարագրում");break;
        case "Շախմատիստ": info = GetNameDescription(" անուն", "նկարագրում");break;
        case "Նկարիչ":info=GetNameDescription("Ի ծնե տրված անունը","Ոճ(եր)ը");break;
        case "Գիտնական":info=GetNameDescription("անուն","գա");break;

    }

    document.getElementById("demo").innerHTML = info;
}