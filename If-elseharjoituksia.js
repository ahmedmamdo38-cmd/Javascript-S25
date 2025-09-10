// Tehtävä 1
console.log("IE01")
function suurempi(a, b){
    if (a > b){
    console.log(" Suurempi luku on " + a);
    }
    else if (b > a){
        console.log("Suurempi luku on " + b);
    }
    else{
        console.log("Luvut ovat yhtäsuuret");
    }
}
suurempi(3, 2);
suurempi(2, 3); 
suurempi(2, 2);

// Tehtävä 2
console.log("IE02")
function suurempi(luku1, luku2, luku3){
    if (luku1 > luku2 && luku1 > luku3){
        console.log(" Suurin luku on " + luku1);
    }
    else if (luku2 > luku3){
        console.log(" Suurin luku on " + luku2);
    }
    else {
        console.log(" Suurin luku on " + luku3)
    }

}
suurempi(3, 2, 1)
suurempi(2, 3, 1)
suurempi(1, 2, 3)

// Tehtävä 4
console.log("IE04")
function jaollinen(luku){
    if (luku % 5 == 0 && luku % 11 == 0)
        {
            console.log(" Luku on jaollinen sekä viidellä, että 11:stä ");
    }
    else if (luku % 11 == 0 )
        {
            console.log(" Luku on jaollinen 11:stä ");
        }
        else if(luku % 5 == 0)
            {
                console.log(" Luku on jaollinen viidellä ");
            }
            else{
                console.log(" Luku ei ole jaollinen 5:llä eikä 11:stä ");
            }
}
jaollinen(66);
jaollinen(25);
jaollinen(55);
jaollinen(19);
 
// Tehtävä 5
console.log("IE05")
function karkaus(vuosi){
    if (vuosi % 400 == 0){ 
        console.log("Vuosi " + vuosi + " on karkausvuosi");
    }

    else if (vuosi % 100 == 0){
        console.log("Vuosi " + vuosi + " ei ole karkausvuosi");
    }

    else if (vuosi % 4 == 0){
        console.log("Vuosi " + vuosi + " on karkausvuosi");
    }   

    else {
        console.log("Vuosi " + vuosi + " ei ole karkausvuosi");
    }
}
karkaus(2004);
karkaus(2000);
karkaus(2100);
karkaus(1997);

// Tehtävä 6
console.log("IE06")
function parillinenPariton(luku){
    if (luku & 2 == 0){
        console.log("Luku " + luku + " on parillinen");
    }
    else {
        console.log("Luku " + luku + " on pariton");
    }
}
parillinenPariton(3),
parillinenPariton(6);
parillinenPariton(0);