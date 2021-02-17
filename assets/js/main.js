/*  burger clicked and removed */


var burger_menu = document.querySelector("#burger-menu-on");
var navbar_mobile_off = document.querySelector("#nav-bar-mobile_off");
var burger_line_1 = document.querySelector("#line1_off");
var burger_line_2 = document.querySelector("#line2_off");
var burger_line_3 = document.querySelector("#line3_off");
var header = document.querySelector("header");

var navbar_work = true

function bruger_clicked()
{
    if(navbar_work)
    {
        burger_line_1.id="line1_on";
        burger_line_2.id="line2_on";
        burger_line_3.id="line3_on";
        burger_menu.id="burger-menu-off";
        navbar_mobile_off.id="nav-bar-mobile_on";
        header.id="header-zone-on";
        navbar_work = false;
    }
    else{
        burger_line_1.id="line1_off";
        burger_line_2.id="line2_off";
        burger_line_3.id="line3_off";
        burger_menu.id="burger-menu-on";
        header.id="header-zone-off";
        navbar_mobile_off.id="nav-bar-mobile_off";
        navbar_work = true;
    }
}
