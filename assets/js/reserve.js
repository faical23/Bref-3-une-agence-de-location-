let get_fulltype = document.querySelector(".fulltype");

var test = [' <button id="por_fulltype"  onclick="show_fulltype(0.05)">Elictrique<button>'
            ,'<button id="por_fulltype"   onclick="show_fulltype(0.14)">essense<button></button>'
            ,'<button id="por_fulltype"  onclick="show_fulltype(0.09)">hyprede<button>'
            , '<button id="por_fulltype"   onclick="show_fulltype(0.21)">diesel<button>']

function moto()
{
    get_fulltype.innerHTML = ` 
    ${test[0]}
    ${test[1]}
    `;
}
function compat()
{
    get_fulltype.innerHTML = ` 
    <button id="por_fulltype"  onclick="show_fulltype(0.14)">essense<button>
    <button id="por_fulltype"  onclick="show_fulltype(0.09)">hyprede<button>
    <button id="por_fulltype"   onclick="show_fulltype(0.21)">diesel<button>
    `;
}
function Berlin()
{
    get_fulltype.innerHTML = ` 
    <button id="por_fulltype"  onclick="show_fulltype(0.14)">essense<button>
    <button id="por_fulltype"  onclick="show_fulltype(0.09)">hyprede<button>
    <button id="por_fulltype"   onclick="show_fulltype(0.21)">diesel<button>
    `;
}
function Cetadin()
{
    
    get_fulltype.innerHTML = ` 
    <button id="por_fulltype"  onclick="show_fulltype(0.05)">Elictrique<button>
    <button id="por_fulltype"  onclick="show_fulltype(0.14)">essense<button>
    <button id="por_fulltype"  onclick="show_fulltype(0.09)">hyprede<button>
    <button id="por_fulltype"   onclick="show_fulltype(0.21)">diesel<button>
    `;
}
function Utilitaire()
{
    get_fulltype.innerHTML = ` 
    <button id="por_fulltype"   onclick="show_fulltype(0.21)">diesel<button>
    `;
}
function Camion()
{
    get_fulltype.innerHTML = ` 
    <button id="por_fulltype"   onclick="show_fulltype(0.21)">diesel<button>
    `;
}
function Engin()
{
    get_fulltype.innerHTML = ` 
    <button id="por_fulltype"  onclick="show_fulltype(0.14)">essense<button>
    <button id="por_fulltype"   onclick="show_fulltype(0.21)">diesel<button>
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
function show_fulltype(porcentage)
{   
    console.log(porcentage);
    var pp = x+x*y+x*porcentage;
    console.log(pp);
}

