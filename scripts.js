function eredmeny(){
    var iraspont1, iraspont2, iraspont3, iraspont4, szobelipont1, szobelipont2, szobelipont3, szobelipont4;
    iraspont1 = parseFloat(document.getElementById('szovszerk').value);
    iraspont2 = parseFloat(document.getElementById('webl').value);
    iraspont3 = parseFloat(document.getElementById('tablk').value);
    iraspont4 = parseFloat(document.getElementById('adatb').value);
    szobelipont1 = parseFloat(document.getElementById('tart').value);
    szobelipont2 = parseFloat(document.getElementById('felep').value);
    szobelipont3 = parseFloat(document.getElementById('szakny').value);
    szobelipont4 = parseFloat(document.getElementById('kommk').value);
    var osszpontiras, osszpontszo, osszpont, ir100, szo100, ossz100;
    osszpontiras = iraspont1+iraspont2+iraspont3+iraspont4;
    osszpontszo = szobelipont1+szobelipont2+szobelipont3+szobelipont4;
    osszpont = osszpontiras+osszpontszo;
    ir100 = (osszpontiras*100)/120;
    var irfix = ir100.toFixed(2);
    szo100 = (osszpontszo*100)/30;
    var szofix = szo100.toFixed(2);
    ossz100 = (osszpont*100)/150;
    var osszfix = ossz100.toFixed(2);
    document.getElementById('ossziras').innerHTML = osszpontiras;
    document.getElementById('irszaz').innerHTML = irfix+"%";
    document.getElementById('osszszo').innerHTML = osszpontszo;
    document.getElementById('szoszaz').innerHTML = szofix+"%";
    document.getElementById('fullossz').innerHTML = osszpont;
    document.getElementById('fullszaz').innerHTML = osszfix+"%";
    //innentől jegyszámolás
    var jegy;
    var hiba = 0, hibat=["Gratulálunk. A mondat lejtését, hangnemét te döntsd el a jegyed alapján.", "Hibás eredmény."];
    if(ir100<10 || szo100<10)
        {
            jegy=1;
        }
    else if(osszfix<=100 && osszfix>=80)
        {
            jegy = 5;
        }
    else if(osszfix<80 && osszfix>=60)
        {
            jegy = 4;
        }
    else if(osszfix<60 && osszfix>=40)
        {
            jegy = 3;
        }
    else if(osszfix<40 && osszfix>=25)
        {
            jegy = 2;
        }
    else if(osszfix<25 && osszfix>=0)
        {
            jegy = 1;
        }
    else
        {
            jegy = "hiba";
            hiba = 1;
            alert("Írj be helyes eredményt!");
        }
    document.getElementById('jegy1').innerHTML = jegy;
    document.getElementById('gratula').innerHTML = hibat[hiba];
    return false;
    e.preventDefault();
}