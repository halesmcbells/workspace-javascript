//event
//var messageE = document.getElementById('message');
//messageE.addEventListener('keyup', showKey);

$('message').keyup(showKey);



//event handler
function showKey(e){
    console.log(e.key);
    document.getElementById('lastKey').textContent="The key is "+e.key;
}
//canvas test
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "pink";
ctx.fillRect(5, 10, 100, 100); //the last two parameters are the size
