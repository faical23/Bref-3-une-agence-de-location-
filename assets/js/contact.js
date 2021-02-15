

function send_mail()
{
    var  name = document.querySelector("#name").value;
    var  email = document.querySelector("#email").value;
    var  phone = document.querySelector("#phone").value;
    var  message = document.querySelector("#message").value;
    let validation_email = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var  zone_popup_contact_off = document.querySelector("#zone_popup_contact_off");
    var  zone_popup_contact__error_off = document.querySelector("#zone_popup_contact__error_off");


    if(name == "" || email=="" || message=="" || !(email.match(validation_email)))
    {
        zone_popup_contact__error_off.id="zone_popup_contact__error_on";
    }
    else{
        zone_popup_contact_off.id="zone_popup_contact_on";
    }

}

function done_contact(){
    zone_popup_contact_on.id="zone_popup_contact_off";
}
function reapet_contact_error(){
    zone_popup_contact__error_on.id="zone_popup_contact__error_off";
}