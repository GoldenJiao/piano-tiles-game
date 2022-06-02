function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },200);
}

function handleClick(){
  var buttonInnerHTML="d"+this.innerHTML;
  buttonAnimation(buttonInnerHTML);
}

for(var i=0;i<document.querySelectorAll(".d").length;i++){
document.querySelectorAll(".d")[i].addEventListener("click",handleClick);
}
