var card_1 = document.querySelector(".card_1");
var card_2 = document.querySelector(".card_2");
var card_3 = document.querySelector(".card_3");
var right_slide = document.querySelector("#right_slide");
var left_slide = document.querySelector("#left_slide");

var number_tours = 0;

function left_to_slide(){
    if(number_tours == 0)
    {
        card_1.id ="right";
        card_2.id ="midle";
        card_3.id ="left";
        number_tours++;
    }
    else if(number_tours == 1)
    {
        card_1.id ="midle";
        card_2.id ="left";
        card_3.id ="right";
        number_tours++;
    }
    else if(number_tours == 2)
    {
        card_1.id ="left";
        card_2.id ="right";
        card_3.id ="midle";
        number_tours=0;
    }
}

function right_to_slide(){
    if(number_tours == 0)
    {
        card_1.id ="midle";
        card_2.id ="left";
        card_3.id ="right";
        number_tours++;
    }
    else if(number_tours == 1)
    {
        card_1.id ="right";
        card_2.id ="midle";
        card_3.id ="left";
        number_tours++;
    }
    else if(number_tours == 2)
    {
        card_1.id ="left";
        card_2.id ="right";
        card_3.id ="midle";
        number_tours=0;
    }
}

left_slide.addEventListener("click", left_to_slide);
right_slide.addEventListener("click", right_to_slide);