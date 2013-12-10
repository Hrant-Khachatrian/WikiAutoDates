var text = "{{Տեղեկաքարտ Անձ\
    | ԱԱՀ = Խաչատուր Ավետիքի Աբովյան\
| բնագիր ԱԱՀ =\
| պատկեր = Abovianportrait.jpg\
    | չափ = 200px\
    | նկարագրում =\
| ծննդյան օր = [[Հոկտեմբեր 15]], [[1809]]\
    | ծննդավայր = [[Քանաքեռ]]\
    | վախճանի օր = անհետացել է [[ապրիլի 2]]-ին, [[1848]]\
    | վախճանի վայրը = անհայտ\
    | քաղաքացիություն = հայ\
    | հպատակություն =\
| ազգություն =\
| կրոն =\
| ազդվել fէ =\
| ազդել է =\
| գրքեր =\
| աշխատանք =\
| կարողություն =\
| մասնագիտություն =գրող, մանկավարժ\
    | ամուսին =\
| ծնողներ =\
| երեխաներ =\
| պարգևներ և մրցանակներ =\
| կայք =\
}}\
\
'''Խաչատուր Ավետիքի Աբովյան''' ([[հոկտեմբեր 15]], [[1809]], [[Քանաքեռ]] — անհետացել է [[ապրիլի 2]]-ին, [[1848]]) հայ ականավոր գրող, մանկավարժ, լուսավորիչ, [[արևելահայ]] [[աշխարհաբար]] գրականության հիմնադիրը. Աբովյանի ստեղծագործությամբ սկիզբ է առնում հայ գրականության զարգացման նոր փուլ, որ նախորդից տարբերվում էր թեմատիկայով, լեզվով, հերոսի ընտրությամբ և այլն:։\
\
== Կենսագրություն ==\
=== Վաղ տարիները ===\
* [http://www.youtube.com/watch?v=Ts5e4Rn8d5s Բացահայտում — Խաչատուր Աբովյան]";

function Data(d,m,y)
{
    this.day=d;
    this.month=m;
    this.year=y;
}

function Person(bir,dea){
    this.birth= new Data(bir.day,bir.month, bir.year);
    this.death= new Data(dea.day,dea.month, dea.year);
    this.setDat=function(bir, ded){
        this.birth=bir;
        this.death=ded;
    }
}
/*funcvia vor@ stugum e u veragrumm e amsativ@ */
var setData=function(tempdat, data){
    var templen=tempdat.lenght;
    var regexp=new RegExp("[0-9]{"+doleng+"}");
    var answer=tempdat.search(regexp);
    if(answer!=-1)
    {

        for( i=0; i<12; i++)
        {
            var answerTwo=tempdat.search(monthar[i]);
            if(answerTwo!=-1)
            {
                var number=tempdat.search([0-9]);
                if(number==templen-1)
                    var brday ='0'+tempdat[number];
                else
                    brday =tempdat[number]+tempdat[number+1];
                var brtmont=i+1;
                data.day=brday;
                data.month=brtmont;
                break;
            }
        }

    }
    else{
        data.year=tempdat;

    }

}

/*amisnei zangvac*/
var monthArrray=["Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգօստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"];

var GetDatesFromArticleText= function (text)
{


    var birt= new Data("00","00","0000");
    var deat=new Data("00","00","0000");
    var WIKI= new Person(birt, deat);

    var indexOne=text.search(/'''/,2);

    var textX=text.substring(indexOne+3,(text.lenght));


    var indexTwo=textX.search(')');
    var textTwo=textX.substring(indexOne+5,indexTwo-1);
    if(textTwo.search("[[")==(-1))
    {
        var indexTree=textX.indexOf('(',2);
        var indexFour=textX.indexOf(')',2);
        textTwo=textX.substring((i3)+1,(i4)-1);
    }
    /*stugum e yete ka "-" nshanY uremn bajanum e 2 masi @st dra el veragrum kam birthin kam deathin, yete chka miayn birthin*/
    var divBirthDeath=textTwo.search('-');
    if(divBirthDeath==(-1))
    {
        var sindex=1;
        var regIndexOne= new RegExp("[[",sindex);
        var regIndexTwo= new RegExp("]]",sindex);
        var datIndexOne=textTwo.search(regIndexOne);
        var datIndexTwo=textTwo.search(regIndexTwo);
        while(datIndexTwo!= ((textTwo.lenght)-1))
        {
            datIndexOne=textTwo.search(regIndexOne);
            datIndexTwo=textTwo.search(regIndexTwo);
            var tempdat=textTwo.substring(datIndexOne+2, datIndexTwo-1);
            setData(tempdat, birt);
            sindex++;

        }
    }
    else
    {
        var textTwoOne=textTwo.substring(0,divBirthDeath-1);
        var textTwoTwo=textTwo.substring(divBirthDeath+1);
        sindex=1;
        regIndexOne= new RegExp("[[",sindex);
        regIndexTwo= new RegExp("]]",sindex);

        while(divBirthDeath!= textTwoOne.lenght-1)
        {

            regIndexOne= new RegExp("[[",sindex);
            regIndexTwo= new RegExp("]]",sindex);
            datIndexOne=textTwoOne.search(regIndexOne);
            datIndexTwo=textTwoOne.search(regIndexTwo);
            while(datIndexTwo!= ((textTwoOne.lenght)-1))
            {
                datIndexOne=textTwoOne.search(regIndexOne);
                datIndexTwo=textTwoOne.search(regIndexTwo);
                tempdat=textTwoOne.substring(datIndexOne+2, datIndexTwo-1);
                setData(tempdat, birt);
                sindex++;

            }
            while(datIndexTwo!= textTwoTwo.lenght-1)
            {

                datIndexOne=textTwoTwo.search(regIndexOne);
                datIndexTwo=textTwoTwo.search(regIndexTwo);
                tempdat=textTwoTwo.substring(datIndexOne+2, datIndexTwo-1);
                setData(tempdat, deat);
                sindex++;
            }
        }

    }
    WIKI.setDat(birt, deat);
    return WIKI;
}
/**
 * Created by USER on 11.12.13.
 */
