/* Game similar to the google browser game when you're not connected to the internet
/Good case study of a simple animation
*/
var character = document.getElementById("character");
var block = document.getElementById("block");


function jump(){
   if(character.classList != "animate"){
    character.classList.add("animate");
   }
   //have to remove the animate each time or you can't keep jumping
   setTimeout(function(){
    character.classList.remove("animate");
    //checks every 500ms
   },500);
}

//detects whether blocks are hitting each other
var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 %% characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("u lose.");
    }
    //checks every 10ms
},10);