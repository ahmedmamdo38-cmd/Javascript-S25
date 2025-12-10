function jarjesta(){
    var luku1, luku2, luku3;
    luku1 = parseInt(document.getElementById("first").value);
    luku2 = parseInt(document.getElementById("second").value);
    luku3 = parseInt(document.getElementById("third").value);

    let taulu = [];
    taulu.push(luku1, luku2, luku3);
    taulu.sort();
    document.getElementById("vastaus").innerHTML = `Luvut järjestyksessä on ${taulu}`;
    
    }

    function etsiNumero(){
    var luku1, luku2, luku3, luku4, luku5;
     luku1 = parseInt(document.getElementById("l1").value);
     luku2 = parseInt(document.getElementById("l2").value);
     luku3 = parseInt(document.getElementById("l3").value);
     luku4 = parseInt(document.getElementById("l4").value);
     luku5 = parseInt(document.getElementById("l5").value);
    
     let taulu = [];
     taulu.push(luku1, luku2, luku3, luku3, luku4, luku5);
     taulu.sort();
     document.getElementById("vastaus2").innerHTML = `Suurimaan luvu on ${taulu[taulu.length-1]}`;

    }


    function paritonParillinen(){
        var luku;
        luku = document.getElementById("luku").value;
        //document.writeln("Antamasi luku; " + luku);
        if(luku%2 == 0){
            document.getElementById("vastaus3").innerHTML = `Antamasi luku on parillinen ${luku}`;
        } else{
            document.getElementById("vastaus3").innerHTML = `Antamasi luku on pariton ${luku}`;
        }

    }

    function ajonevo(){
        var age = parseInt(document.getElementById("ika").value);
        if (age < 16){
            document.getElementById("vastaus4").innerHTML = `Voit ajaa polkupyörää. ${ika} `;
        }
        else if(age < 18){
            document.getElementById("vastaus4").innerHTML = `Voit ajaa mopoa. ${ika} `;
        }
        else {
            document.getElementById("vastaus4").innerHTML = `Voit ajaa autoa. ${ika} `;
        }
    }

    function kaanna(){
        var lang = document.getElementById("kieli").value;
         if(lang == 'eng'){
            document.getElementById("vastaus5").innerHTML = `Hello World! ${kieli}`;
         } else if(lang == 'swe') {
            document.getElementById("vastaus5").innerHTML = `Hej Världen! ${kieli}`;
         } else {
            document.getElementById("vastaus5").innerHTML = `Hola Mundo! ${kieli}`;
         }

    }