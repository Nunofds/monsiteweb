/* jQuery pour fermeture bouton collapse, une fois le click effectué sur le lien */
$(function () {
    $(".nav-link").click(function () {
        $(".navbar-collapse").collapse("hide");
    });
});
