let get_fulltype = document.querySelector(".fulltype"); /* div get_fulltype */
let jours = document.querySelector(".jours"); /* div jours */
let btn_valide = document.querySelector(".btn-valide"); /* btn validation */


var all_fulltype = [' <button id="por_fulltype"  onclick="show_fulltype(0.05)">Elictrique<button>'
            ,'<button id="por_fulltype"   onclick="show_fulltype(0.14)">essense<button></button>'
            ,'<button id="por_fulltype"  onclick="show_fulltype(0.09)">hyprede<button>'
            , '<button id="por_fulltype"   onclick="show_fulltype(0.21)">diesel<button>']

function moto()
{
    get_fulltype.innerHTML = ` 
    ${all_fulltype[0]}
    ${all_fulltype[1]}
    `;
}
function compat()
{
    get_fulltype.innerHTML = ` 
    ${all_fulltype[1]}
    ${all_fulltype[2]}
    ${all_fulltype[3]}
    `;
}
function Berlin()
{
    get_fulltype.innerHTML = ` 
    ${all_fulltype[1]}
    ${all_fulltype[2]}
    ${all_fulltype[3]}
    `;
}
function Cetadin()
{
    
    get_fulltype.innerHTML = ` 
    ${all_fulltype[0]}
    ${all_fulltype[1]}
    ${all_fulltype[2]}
    ${all_fulltype[3]}
    `;
}
function Utilitaire()
{
    get_fulltype.innerHTML = ` 
    ${all_fulltype[3]}
    `;
}
function Camion()
{
    get_fulltype.innerHTML = ` 
    ${all_fulltype[3]}
    `;
}
function Engin()
{
    get_fulltype.innerHTML = ` 
    ${all_fulltype[1]}
    ${all_fulltype[3]}
    `;
}

var x,y;

function show_price(price,type,fulltype)
{
    x = price;
    y = type;
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
function show_fulltype(porcentage)
{   
    h = porcentage;
    jours.innerHTML = ` 
    <h1>how much days</h1>
    <input type="number" class="jrs">
    `;
    console.log(porcentage);
    var pp = x+x*y+x*porcentage;
    console.log(pp);
}



function validation()
{
    let get_jrs = document.querySelector(".jrs").value; /* get number jrs */
    montant_total = (x+x*y+x*h)*get_jrs;
    alert(montant_total);
}