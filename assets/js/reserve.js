let get_fulltype = document.querySelector(".fulltype"); /* div get_fulltype */
let jours = document.querySelector(".jours"); /* div jours */
let btn_valide = document.querySelector(".btn-valide"); /* btn validation */
let validation_button = document.querySelector(".validation_button"); /* div validation_button */
let reserve_card = document.querySelector(".card-reserve"); /* div reserve card*/
let btn_card = document.querySelector(".btn_card"); /* div reserve card*/
let zone_popup = document.querySelector("#zone_popup_off"); /* div reserve card*/
let zone_type_fuil = document.querySelector(".zone_type_fuil"); /* div zone all fuil  */
let fulltype = document.querySelector(".fulltype"); /* div fulltype  */
let validation_email = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;



var chose_type_car ="<h2><span>Fuel </span>type</h2>";


var Eliqtrque = `
    <div class="type_fuel">
    <img src="assets/img/fiul_img/diesel.jpg">
    <div class="centent-fiul-car">
    <h4>Eliqctrique</h4>
    <a href="#jours"><button class="por_fulltype"  onclick="show_fulltype(0.05,\'Elictrique\')">chose it</button></a>

    </div>
    </div>
`;
var Hyprede = `
    <div class="type_fuel">
    <img src="assets/img/fiul_img/essence.jpg">
    <div class="centent-fiul-car">
    <h4>Hyprede</h4>
    <a href="#jours"><button class="por_fulltype"  onclick="show_fulltype(0.09,\'hyprede\')">chose it</button></a>

    </div>
    </div>
`;
var Essence = `
    <div class="type_fuel">
    <img src="assets/img/fiul_img/hybred.jpg">
    <div class="centent-fiul-car">
    <h4>Essense</h4>
    <a href="#jours"><button class="por_fulltype"  onclick="show_fulltype(0.14,\'essense\')">chose it</button></a>
    </div>
    </div>
`;
var Disiel= `
    <div class="type_fuel">
    <img src="assets/img/fiul_img/voiture-electrique.jpg">
    <div class="centent-fiul-car">
    <h4>Disiel</h4>
    <a href="#jours"><button class="por_fulltype"  onclick="show_fulltype(0.21,\'diesel\')">chose it</button></a>
    </div>
    </div>
`;

var all_fulltype = [Eliqtrque,Essence,Hyprede,Disiel];

function moto()
{
    fulltype.innerHTML = chose_type_car;
    zone_type_fuil.innerHTML= ` 
    ${all_fulltype[0]}
    ${all_fulltype[1]}
    `;
}
function compat()
{
    fulltype.innerHTML = chose_type_car;
    zone_type_fuil.innerHTML = ` 
    ${all_fulltype[1]}
    ${all_fulltype[2]}
    ${all_fulltype[3]}
    `;
}
function Berlin()
{
    fulltype.innerHTML = chose_type_car;
    zone_type_fuil.innerHTML = ` 
    ${all_fulltype[1]}
    ${all_fulltype[2]}
    ${all_fulltype[3]}
    `;
}
function Cetadin()
{
    fulltype.innerHTML = chose_type_car;  
    zone_type_fuil.innerHTML = ` 
    ${all_fulltype[0]}
    ${all_fulltype[1]}
    ${all_fulltype[2]}
    ${all_fulltype[3]}
    `;
}
function Utilitaire()
{
    fulltype.innerHTML = chose_type_car;
    zone_type_fuil.innerHTML = ` 
    ${all_fulltype[3]}
    `;
}
function Camion()
{
    fulltype.innerHTML = chose_type_car;
    zone_type_fuil.innerHTML = ` 
    ${all_fulltype[3]}
    `;
}
function Engin()
{
    fulltype.innerHTML = chose_type_car;
    zone_type_fuil.innerHTML = ` 
    ${all_fulltype[1]}
    ${all_fulltype[3]}
    `;
}

var price_car,type_car,véhicule;

function show_price(price,type,fulltype)
{

    price_car = price;
    type_car = type;
    véhicule= fulltype;
    let porc_fulltype = document.querySelector("#por_fulltype");
    var ress = 0;
    ress = price + price*type;
    console.log(ress,fulltype);


    switch(fulltype) {
        case 'moto':
            moto();
            break;
        case 'compat':
            compat();
            break;
        case 'berlin':
            Berlin();
            break;
        case 'cetadin':
            Cetadin();
            break;
        case 'utilitaire':
            Utilitaire();
            break;
        case 'camion':
            Camion();
            break;
        case 'engi':
            Engin();
            break;
        default:
          // code block
      }
}
var percentage_type_charge ;
var get_type_charge ;
function show_fulltype(porcentage,type_charge)
{   
    get_type_charge = type_charge;
    percentage_type_charge = porcentage;
    jours.innerHTML = ` 
    <h2><span>Duration </span>time</h2>
    <div class="chose_days">
    <p >days :</p>
    <input type="number" class="jrs" min="1" maprice_car="9000">
    </div>
    `;
    validation_button.innerHTML = ` 
    <button class="btn-valide"  onclick="validation()">valide</button>
    `;
    // console.log(porcentage);
    // var pp = price_car+price_car*type_car+price_car*porcentage;
    // console.log(pp);
}

let popup_card = document.querySelector(".popup_card");

function accept_card()
{
    zone_popup.id="zone_popup_off";
}


function validation()
{
    let reserve_name = document.querySelector("#reserve-name").value; /* get reserve-name from html  */
    let reserve_name_border = document.querySelector(".reserve-name"); /* get reserve-name from html  */
    let reserve_email = document.querySelector("#reserve-email").value; /* get reserve-name from html  */
    let reserve_email_border = document.querySelector(".reserve-email"); /* get reserve-name from html  */
    let reserve_cin = document.querySelector("#reserve-cin").value; /* get reserve-name from html  */
    let reserve_cin_border = document.querySelector(".reserve-cin"); /* get reserve-name from html  */
    let get_jrs = document.querySelector(".jrs").value; /* get number jrs */
    montant_total = (price_car+price_car*type_car+price_car*percentage_type_charge)*get_jrs;
    zone_popup.id="zone_popup_on";
    if(reserve_name == "" || reserve_email =="" || reserve_cin==""|| !(reserve_email.match(validation_email)))
    {
        if(reserve_name == "")
        {
            reserve_name_border.id="error_input";
        }
        if(reserve_email == "")
        {
            reserve_email_border.id="error_input";
        }
        if(reserve_cin == "")
        {
            reserve_cin_border.id="error_input";
        }
        
        popup_card.innerHTML =
        `
        <p>Sorry u forgot some information</p>
        <img class="gift-img gift-img-sorry" src="assets/img/gift/sorrygift2.gif">
        <br/>
        <a href=""><button class="popop_btn accept_tecket"  onclick="accept_card()">Reapet</button></a>
    `
    }
    else if(get_jrs < 0 ){
        reserve_name.id="error_input";
        popup_card.innerHTML =
        `
        <p>u Have some error in days please check it</p>
        <img class="error_img_reserve" src="assets/img/icons/error-icon-4.png">
        <br/>
        <a href=""><button class="popop_btn accept_tecket"  onclick="accept_card()">Reapet</button></a>
    `
    }
    else{
        popup_card.innerHTML =
                `
                <p>Name : <span> ${reserve_name}</span></p>
                <p>Email : <span> ${reserve_email}</span></p>
                <p>Cin: <span> ${reserve_cin}</span></p>
                <p>véhicule : <span> ${véhicule}</span></p>
                <p>Fuel : <span>${get_type_charge}</span></p>
                <p>Jours : <span> ${get_jrs} days</span></p>
                <p>Price : <span> ${montant_total} $</span></p>
                <img class="gift-img" src="assets/img/gift/gift3.gif">
                <br/>
                <a href=""><button class="popop_btn accept_tecket"  onclick="accept_card()">Opretaion Done</button></a>
            `
        }

}
