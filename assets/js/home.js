var zone_our_service_2 = document.querySelector("#zone_our_service_2_off");
var more_btn = document.querySelector("#more_btn");

var is_work = true;
function show_more()
{
    if(is_work)
    {
        zone_our_service_2.id="zone_our_service_2_on";
        more_btn.innerHTML="Less";
        is_work=false;
    }
    else{
        zone_our_service_2.id="zone_our_service_2_off";
        more_btn.innerHTML="More";
        is_work= true
    }

}