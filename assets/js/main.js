/*  burger clicked and removed */


var burger_menu = document.querySelector(".burger-menu");
var navbar_mobile_off = document.querySelector("#nav-bar-mobile_off");

function bruger_clicked()
{
    navbar_mobile_off.id="nav-bar-mobile_on";
}

function bruger_removed(){
    navbar_mobile_off.id="nav-bar-mobile_off";
}