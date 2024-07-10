// Menu color

var logo = document.querySelector('.logoColor');

window.addEventListener("scroll", function () {

    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 800);

    console.log(window.innerWidth)

    if (window.scrollY > 0) {

        header.style.backgroundColor = "#0008";

    } else {

        if (window.innerWidth > 900) {
            header.style.backgroundColor = "transparent";
        }

    }

    if (window.scrollY > 800) {

        header.style.backgroundColor = "#fff";
        logo.style.fill = "#000";

    } else {

        logo.style.fill = "#fff";

    }

})

// Menu hamburguesa

document.addEventListener('DOMContentLoaded', function () {

    var menuIcon = document.getElementById('burger');
    var nav = document.getElementById('nav');

    menuIcon.addEventListener('click', function () {
        nav.classList.toggle('open');
    });

});