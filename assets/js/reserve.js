let get_fulltype = document.querySelector(".fulltype");



function show_fulltype(porcentage)
{   
    console.log(porcentage);
}
function show_price(price,type,fulltype)
{
    let porc_fulltype = document.querySelector("#por_fulltype");
    var ress = 0;
    ress = price + price*type;
    console.log(ress,fulltype);



    if(fulltype== 'moto')
    {
        
        get_fulltype.innerHTML += ` 
        <button id="por_fulltype"  onclick="show_fulltype(0.66666)">essense<button>
        <button id="por_fulltype"   onclick="show_fulltype(0.11111)">mazzote<button>
        `;
    }
    if(fulltype== 'compat')
    {
        
        get_fulltype.innerHTML += ` 
        <button id="por_fulltype"  onclick="show_fulltype(0.66666)">essense<button>
        <button id="por_fulltype"   onclick="show_fulltype(0.11111)">mazzote<button>
        `;
    }

}

