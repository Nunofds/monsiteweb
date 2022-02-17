/* jQuery pour fermeture bouton collapse, une fois le click effectué sur le lien */
$(function () {
    $(".nav-link").click(function () {
        $(".navbar-collapse").collapse("hide");
    });
});

// js affiche texte au click bouton cv
let btnDisplaytext = document.getElementById("btnDisplaytext");
let displaytext = document.getElementById("displaytext");
displaytext.addEventListener("click", function () {
    document.getElementById("displayThanks").style.display = "block";
    document.getElementById("displayThanks").style.color = "gray";
    document.getElementById("displayThanks").style.padding = "10px";
    btnDisplaytext.style.backgroundColor = "orange";
});
