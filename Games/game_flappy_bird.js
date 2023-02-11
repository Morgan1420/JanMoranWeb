var block = document.getElementById("block");
var hole = document.getElementById("hole");
var bird = document.getElementById("bird");
var jumping = 0;


hole.addEventListener('animationiteration', () => {

    var random = -((Math.random() * 300) + 150);
    hole.style.top = random + "px";

});

setInterval(function(){
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(jumping == 0){
        bird.style.top = (birdTop + 3) + "px";
    }
}, 10)


function Jump()
{
    // make everyone know we are jumping and create a jump count 
    jumping = 1;
    var jumpCount = 0;

    var jumpInterval = setInterval(function(){
        // we get the bird's vertical position
        var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));

        // if we are not on top of the div we move up by 5px
        if(birdTop > 6 && jumpCount < 15){
            bird.style.top = (birdTop - 5) + "px"
        }

        // if we have "jumped" 20 continuous times
        if(jumpCount > 20)
        {

            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++;
    }, 10)
}