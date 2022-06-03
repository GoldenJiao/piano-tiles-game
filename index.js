let sequence = [];
let humanSequence = [];
let level=0;
let score=0;
let tiles = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'];
const startButton = document.querySelector('.js-start');
const tileContainer = document.querySelector('.js-container');
const info = document.querySelector('p');
let seq=[];


function startGame() {
  startButton.classList.add('hidden');
  info.classList.add('hidden');

  nxtRnd();
  return;

}

function nxtRnd(){
  level += 1;

  tileContainer.classList.add('unclickable');

  const nextSeq=[...sequence];
  nextSeq.push(nextStep());
  playRound(nextSeq);



  sequence = [...nextSeq];
  for(var i=0;i<sequence.length;i++){
    seq[i]=sequence[i].toString();
  }
  console.log(seq);

  setTimeout(() => {
    humanTurn();
  }, level * 600 + 1000);
  return;
}

function nextStep() {
  const random = tiles.splice([Math.floor(Math.random() * tiles.length)],1);


  return random;
}

function activateTile(tileno){
  const tile = document.querySelector(`[data-tile='${tileno}']`);
   tile.classList.add('pressed');
   setTimeout(() => {
    tile.classList.remove('pressed');
  }, 300);
  return;

}

function playRound(nextSeq) {
  nextSeq.forEach((tileno, index) => {
    setTimeout(() => {
      activateTile(tileno);
    }, (index + 1) * 600);
  });
  return;

}

function humanTurn() {
  tileContainer.classList.remove('unclickable');
 return;

}

function handleClick(tile) {
  const index = humanSequence.push(tile) - 1;


  const remainingTaps = sequence.length - humanSequence.length;

  compo(humanSequence,index,seq);
  console.log(seq);
  if(level==0){
    return;
  }


  if (humanSequence.length === sequence.length) {
    score+=1;
    if (humanSequence.length === 16) {
      resetGame('You Won!!!');
      return
    }
    humanSequence = [];

    setTimeout(() => {
      nxtRnd();
    }, 1000);
    return;
  }

  return;

}

function resetGame(text) {
  alert(text+", Score :"+score);
  sequence = [];
  humanSequence = [];
  level = 0;
  score=0;
  startButton.classList.remove('hidden');
  info.classList.remove('hidden');
  tiles = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'];


  tileContainer.classList.add('unclickable');
  return;
}

function compo(hum,index,seq){
  var ind=seq.indexOf(hum[index]);
  console.log(ind);
  if(ind!==-1){
    seq.splice(ind,1);
  }
  else{
    resetGame("Game Over");
  }

  return;

}








startButton.addEventListener('click', startGame);

tileContainer.addEventListener('click', event => {
  const  {tile}  = event.target.dataset;
  console.log(tile);

  if (tile) handleClick(tile);
});
