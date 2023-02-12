var block = document.getElementById("block");
var hole = document.getElementById("hole");
var bird = document.getElementById("bird");
var jumping = 0;
var counter = 0;

hole.addEventListener('animationiteration', () => {

    var random = -((Math.random() * 300) + 150);
    hole.style.top = random + "px";
    counter++;
});

setInterval(function(){
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(jumping == 0){
        bird.style.top = (birdTop + 3) + "px";
    }
    
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    var cTop = -(800-birdTop);

    if((birdTop > 810) || ((blockLeft<20) && (blockLeft>-50) && ((cTop < holeTop + 10) || (cTop >holeTop+150))))        
    {
        alert("Game Over. Score: " + counter);
        bird.style.top = 200 + "px";
        counter = -1;
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
