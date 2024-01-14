var quotes=new Array();
quotes[0] = "nuie gata bos";
quotes[1] = "bos dai deo bere?";
quotes[2] = "mai avem oleaka sefule";
quotes[3] = "cheam munshit azi";
quotes[4] = "-Doreleeee! Adu' trai-ti-ar familia ta mustaru' ala!";
quotes[5] = "da' cheai cefule de the grabesti asa";
quotes[6] = "Bos bagam shi noi o manea?";
quotes[7] = "da boz munhim munhim, pana maine e gata";
quotes[8] = "Adika nuti plake sandu ciorba?!";
quotes[9] = "Boz nam luat io pagina sa moara mama";


var q = quotes.length;
var whichquote=Math.round(Math.random()*(q-1));
function showquote(){document.write(quotes[whichquote]);}
showquote();
