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

var seq=[];

var allar=[];
for(var i=1;i<17;i++){
  allar.push(".d"+i);
}
function seqe(){
  if(allar.length===0){
    alert("You Won!!!");
  }
  else{
   var randind=Math.floor(Math.random()*(allar.length));
   var currentelement= allar.splice(randind,1);
   seq.push(currentelement);
   for(var i=0;i<seq.length;i++){
     var blink=document.querySelector(seq[i]);
       blink.classList.add("pressed");
     setTimeout(function(){
       blink.classList.remove("pressed");
     },2000*i+200);

    }
  }
}
seqe();
seqe();










////////////////////////////////////////////////////////
function sequ(){
  var randele=".d"+(Math.floor(Math.random()*16)+1);
  var codn=seq.includes(randele);
  while(codn){
    randind=Math.floor(Math.random()*16)+1;
  }
  seq.push(randele);
}
