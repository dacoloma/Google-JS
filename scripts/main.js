let monBouton = document.querySelector('button');
let middle = document.getElementById("middle_field");

monBouton.onclick = function() {
    middle.style.display="flex";
    monBouton.style.display="none";
}
