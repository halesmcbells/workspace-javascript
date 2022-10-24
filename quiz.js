//event handlers
function changeStyle(){
    var classname = this.getAttribute("class");
    if(classname=="answer"){
        this.setAttribute("class","answer selected");
    }else{
        
    }

}
for(var i=0;i<4;i++){
document.getElementsByClassName('answer')[i].addEventListener('click',changeStyle,false);
}