let get_fulltype = document.querySelector(".fulltype"); /* div get_fulltype */
let jours = document.querySelector(".jours"); /* div jours */
let btn_valide = document.querySelector(".btn-valide"); /* btn validation */
let validation_button = document.querySelector(".validation_button"); /* div validation_button */
let reserve_card = document.querySelector(".card-reserve"); /* div reserve card*/
let btn_card = document.querySelector(".btn_card"); /* div reserve card*/
var chose_type_car ="<h1><span>Fuel </span>type</h1>";

var all_fulltype = [' <button class="por_fulltype"  onclick="show_fulltype(0.05,\'Elictrique\')">Elictrique<button>'
            ,'<button class="por_fulltype"   onclick="show_fulltype(0.14,\'essense\')">essense</button>'
            ,'<button class="por_fulltype"  onclick="show_fulltype(0.09,\'hyprede\')">hyprede<button>'
            , '<button class="por_fulltype"   onclick="show_fulltype(0.21,\'diesel\')">diesel<button>']

function moto()
{
    get_fulltype.innerHTML = ` 
    ${chose_type_car}
    ${all_fulltype[0]}
    ${all_fulltype[1]}
    `;
}
function compat()
{
    get_fulltype.innerHTML = ` 
    ${chose_type_car}
    ${all_fulltype[1]}
    ${all_fulltype[2]}
    ${all_fulltype[3]}
    `;
}
function Berlin()
{
    get_fulltype.innerHTML = ` 
    ${chose_type_car}
    ${all_fulltype[1]}
    ${all_fulltype[2]}
    ${all_fulltype[3]}
    `;
}
function Cetadin()
{
    
    get_fulltype.innerHTML = ` 
    ${chose_type_car}
    ${all_fulltype[0]}
    ${all_fulltype[1]}
    ${all_fulltype[2]}
    ${all_fulltype[3]}
    `;
}
function Utilitaire()
{
    get_fulltype.innerHTML = ` 
    ${chose_type_car}
    ${all_fulltype[3]}
    `;
}
function Camion()
{
    get_fulltype.innerHTML = ` 
    ${chose_type_car}
    ${all_fulltype[3]}
    `;
}
function Engin()
{
    get_fulltype.innerHTML = ` 
    ${chose_type_car}
    ${all_fulltype[1]}
    ${all_fulltype[3]}
    `;
}

var x,y,p;

function show_price(price,type,fulltype)
{

    x = price;
    y = type;
    p = fulltype;
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
var h ;
var get_type_charge ;
function show_fulltype(porcentage,type_charge)
{   
    get_type_charge = type_charge;
    h = porcentage;
    jours.innerHTML = ` 
    <h1><span>Duration </span>time</h1>
    <div class="chose_days">
    <p >days :</p>
    <input type="number" class="jrs value="0">
    </div>
    `;
    validation_button.innerHTML = ` 
    <button class="btn-valide"  onclick="validation()">valide</button>
    `;
    console.log(porcentage);
    var pp = x+x*y+x*porcentage;
    console.log(pp);
}



function validation()
{
    let get_jrs = document.querySelector(".jrs").value; /* get number jrs */
    montant_total = (x+x*y+x*h)*get_jrs;
    alert(` name : ${p}
    type : ${get_type_charge}
    price : ${x}
    price/jrs : ${get_jrs}
    montant total : ${montant_total}$`);
}