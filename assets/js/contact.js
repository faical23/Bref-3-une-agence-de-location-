

function send_mail()
{
    var  name = document.querySelector("#name").value;
    var  email = document.querySelector("#email").value;
    var  subject = document.querySelector("#subject").value;
    var  message = document.querySelector("#message").value;
    let validation_email = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var  zone_popup_contact_off = document.querySelector("#zone_popup_contact_off");
    var  zone_popup_contact__error_off = document.querySelector("#zone_popup_contact__error_off");
    var  popup_contact = document.querySelector(".popup-contact");


    if(name == "" || email=="" || message=="" || !(email.match(validation_email)))
    {
        zone_popup_contact__error_off.id="zone_popup_contact__error_on";
    }
    else{
        popup_contact.innerHTML = `
        <img src="">
        <p>Name : <span>${name}</span> <p>
        <p>Email :  <span>${email}</span> <p>
        <p>Subject : <span>${subject}</span>  <p>
        <p>Message :  <span>${message}</span> <p>
        <button class="done-contact-btn reserve-btn-header" onclick="done_contact()">Done</button>

        `
        zone_popup_contact_off.id="zone_popup_contact_on";
        
    }

}

function done_contact(){
    zone_popup_contact_on.id="zone_popup_contact_off";
}
function reapet_contact_error(){
    zone_popup_contact__error_on.id="zone_popup_contact__error_off";
}