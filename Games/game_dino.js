var dino = document.getElementById("dino");
var cactus = document.getElementById("cactus");

function Jump()
{
    if(dino.classList != "animate"){
        dino.classList.add("animate");
    }

    setTimeout(function(){ dino.classList.remove("animate"); }, 500);
}