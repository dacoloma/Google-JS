//Mes bouttons
let monBouton = document.querySelector('button');
let searchButton = document.getElementById("search");
let luckButton = document.getElementById("luck");

let middle = document.getElementById("middle_field");

monBouton.onclick = function() {
    middle.style.display="flex";
    monBouton.style.display="none";
}

function recherche(){
    let val_input=document.getElementById("val_input").value;
    val_input.replace(/ /g, "+");
    searchButton.setAttribute('href',"https://www.google.fr/"+"#q=" + val_input);
}

searchButton.onclick = function() {
    recherche()
}

searchButton.onkeypress= function(){
    if (event.keyCode == '13'){
        recherche()
    }
}

luckButton.onclick = function() {
    middle.style.display="flex";
    monBouton.style.display="none";
}

setTimeout(function(){ alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please !"); }, 10000);
