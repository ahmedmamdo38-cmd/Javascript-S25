// Tehtävä 1
console.log("P01");
console.log("Hei maailma");
console.log("Pieni possu sanoi," + "\"Olen iloinen\"");
// Tehtävä 2
console.log("P02");
var luku1 = 3;
var luku2 = 4;
summa = luku1 + luku2;
console.log("Likujen"  + luku1 + "ja" + luku2  + "summa = " + summa );

// Tehtävä 3
// Jatketaan tehtävästä 2
console.log("P03");
var erotus = luku1 - luku2;
console.log("Lukujen"  + luku1 +  "ja" + luku2 +  "erotus =" + erotus);

// Tehtävä 4
// Jatketaan tehtävästä 2
console.log("P04");
var tulo = luku1 * luku2;
console.log("Lukujen" + luku1 + "ja" + luku2 + " tulo =" + tulo);

//Tehtävä 5
// Jatketaan tehtävästä 2
console.log("P05");
var osamaara = luku1/luku2;
console.log("Lukujen" + luku1 + "ja" + luku2 + "osamaara =" + osamaara);

//Tehtävä 6
console.log("P06");
var celssius = 44;
var Fahrenheit = celssius * 9 / 5 + 32;
console.log(`${celssius} Celsiusta on ${Fahrenheit} Fanrenheita astetta`);

// Tehtävä 7
console.log("P07");
  Fahrenheit = 44;
  celssius = ( Fahrenheit - 32) * 5 / 9;
 console.log(`${Fahrenheit} Fanrenheitia astetta  on ${celssius} Celsius astetta `);

 // Tehtävä 8 
 console.log("P08");
 var km, maili, muunnos = 1.609;
 maili = 100;
 km = muunnos * maili;
 console.log(`${maili} mailia on ${km} kilometriä`);

 // Tehtävä 9
 console.log("P09");
 var km, maili, muunnos = 1.609;
 km = 100;
 maili = km / muunnos;
 console.log(`${km} kilometriä on ${maili} mailia`);

 // Tehtävä 10
 console.log("P10");
 var sentit, tuumat;
 muunnos = 2.54;
 tuumat = 5;
 sentit = tuumat * muunnos;
 console.log(`${tuumat} tuumaa on ${sentit} senttiä`);

 // Tehtävä 11
 console.log("P11"),
sentit = 5;
tuumat = sentit / muunnos;
console.log(`${sentit} senttiä on ${tuumat} tuumaa`);

// Tehtävä 12
console.log("P12");
var yardit, metrit;
yardit = 10;
muunnos = 0.9144;
metrit = yardit * muunnos ;
console.log(`${yardit} yardia on ${metrit} on metriä`);

// Tehtävä 13
console.log("P13");
yardit = metrit / muunnos;
console.log(`${metrit} metriä on ${yardit} yardiaa`);

// Tehtävä 14
console.log("P14");
function summafunktio(luku1, luku2)
{
  console.log(" Lukujen " + luku1 + " ja " + luku2 + " summa on= " + (luku1, luku2));
}
function erotusfunktio(luku1, luku2)
{
  console.log(" Lukujen" + luku1 + " ja " + luku2 + " erotus on= " + (luku1, luku2));
}
function tulofunktio(luku1, luku2)
{ 
  console.log(" Lukujen " + luku1 + " ja " + luku2 + " tulo on= " + luku1*luku2);
}
function osamaarafunktio(luku1, luku2)
{ 
  console.log(" Lukujen " + luku1 + " ja " + luku2 + " osamaara on= " + luku1/luku2 );
}
summafunktio(3, 4);
erotusfunktio(3, 4);
tulofunktio(3, 4);
osamaarafunktio(3, 4);

// Tehtävä 15
console.log("P15")
var pii = 3.1415;
function ympyranAla(sade)
{
  console.log(" Ympyrän pinta-ala on " + (sade * sade * pii) + " kun säde on " + sade);
}
ympyranAla(2);

// Tehtävä 16
console.log("P16")
function nelioAla(sivu)
{
  console.log(sivu * sivu);
}
nelioAla(2);

// Tehtävä 17
console.log("P17")
function suorakulmionAla(sivu1, sivu2)
{
  console.log(sivu1 * sivu2);
}
suorakulmionAla(2, 3);

// Tehtävä 18
console.log("P18")
function muunnaVuosiksi(paivat)
{
  let vuodet = parseInt(paivat / 365);
  let kuukaudet = parseInt((paivat % 365) / (365 / 12));
  let pvt = parseInt((paivat % 365) - kuukaudet * (365 / 12));
  console.log(paivat + " päivää on " + vuodet + " vuotta " + kuukaudet + "kuukautta ja " + pvt + " päivää.");
}
muunnaVuosiksi(22500);