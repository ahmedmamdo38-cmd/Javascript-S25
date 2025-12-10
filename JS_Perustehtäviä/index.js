function muunna(){
    let vkop = parseInt(document.getElementById("viikonpaiva").value);
    switch (vkop){
        case 1:
            document.getElementById("vastaus").innerHTML = "Maanantai";
            break;
        case 2:
            document.getElementById("vastaus").innerHTML = "Tiistai";
            break;
        case 3:
            document.getElementById("vastaus").innerHTML = "Keskivikko";
            break;
        case 4:
            document.getElementById("vastaus").innerHTML = "Torstai";
            break;
        case 5:
            document.getElementById("vastaus").innerHTML = "Perjaintai";
            break;
        case 6:
            document.getElementById("vastaus").innerHTML = "Lauantai";
            break;
        default:
            document.getElementById("vastaus").innerHTML = "Suunantai";
    }
}