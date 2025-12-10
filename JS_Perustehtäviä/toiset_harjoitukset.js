function tarkista(){
    var luku;
    luku = parseInt(document.getElementById("muuttuja").value);
    if(luku < 0){
    document.getElementById("vastaus1").innerHTML = `Luku on negattiivinen ${luku}`;
    } else {
        document.getElementById("vastaus1").innerHTML = `Luku on posittivinen ${luku}`;
    }
}


function viikonpaiva(){
    var vkp;
    vkp = parseInt(document.getElementById("vkp").value);
    if(vkp === 1){
        document.getElementById("vastaus2").innerHTML = `Maanantai`;
    } else if(vkp === 2){
        document.getElementById("vastaus2").innerHTML = `Tiistai`;
    } else if(vkp === 3){
        document.getElementById("vastaus2").innerHTML = `Keskivikko`;
    } else if(vkp === 4){
        document.getElementById("vastaus2").innerHTML = `Torstai`;
    } else if(vkp === 5){
        document.getElementById("vastaus2").innerHTML = `Perjaintai`;
    } else if(vkp === 6){
        document.getElementById("vastaus2").innerHTML = `Lauantai`;
    } else {
        document.getElementById("vastaus2").innerHTML = `Suunantai`;
    }

    
}

function  karkausvuosi(){
    var vuosi;
    vuosi = parseInt(document.getElementById("vluku").value);
    if(vuosi % 4 === 0 && vuosi % 100 !== 0){
        document.getElementById("vastaus3").innerHTML = `Vuosi on karkausvuosi`;
    } else if(vuosi % 4 === 0){
        document.getElementById("vastaus3").innerHTML = `Vuosi on karkausvuosi`;
    } else{
        document.getElementById("vastaus3").innerHTML = `Vuosi ei ole karkausvuosi`;
    }
}


function sk_arvo(){
    var num1, num2, num3, num4, num5;
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    num3 = parseInt(document.getElementById("num3").value);
    num4 = parseInt(document.getElementById("num4").value);
    num5 = parseInt(document.getElementById("num5").value);
    
    summa = num1 + num2 + num3 + num4 + num5;
    keskiarvo = summa / 5;
    document.getElementById("vastaus4").innerHTML = "Lukujen summa on: " + summa + " ja keskiarvo on: " + keskiarvo;



}

function keertolasku(){
    var luku = parseInt(document.getElementById("times").value);
    let lause = "";

    for (let i = 1; i <= 10; i++){
        lause += `${luku} x ${i} = ${luku * i}\n`;
    }

    document.getElementById("vastaus5").innerHTML = lause;
     
}



