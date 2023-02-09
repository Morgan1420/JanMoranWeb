var dino = document.getElementById("dino");
var cactus = document.getElementById("cactus");
var gameStarted = false;

function Jump()
{
    if(!gameStarted){
        cactus.classList.add("cactus_movement");
        gameStarted = true;
    }


    if(dino.classList != "animate"){
        dino.classList.add("animate");
    }

    setTimeout(function(){ dino.classList.remove("animate"); }, 500);
}

var checkDead = setInterval(function() {
    var dinoTopPos = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    var cactusLeftPos = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if(cactusLeftPos < 60 && cactusLeftPos > 0 && dinoTopPos >= 390){
        cactus.style.animation = "none";
        cactus.style.display = "none";
        alert("Game Over");  
    }
}, 10);