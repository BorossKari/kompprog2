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
    
    return false;
    e.preventDefault();
}