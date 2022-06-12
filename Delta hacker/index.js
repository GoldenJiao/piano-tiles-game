let sequence = [];
let humanSequence = [];
let level=0;
let score=0;
const startButton = document.querySelector('.js-start');
const tileContainer = document.querySelector('.js-container');
const info = document.querySelector('p');
let tiles = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36'];

function startGame() {
  var name=prompt("Enter your name:")
  startButton.classList.add('hidden');
  info.classList.add('hidden');

  nxtRnd();
  return;
}

function nxtRnd(){
  level += 1;
  score+=1;

  tileContainer.classList.add('unclickable');

  const nextSeq=[...sequence];
  nextSeq.push(nextStep());
  playRound(nextSeq);

  sequence = [...nextSeq];
  //for(var i=0;i<sequence.length;i++){
  //  seq[i]=sequence[i].toString();
  //}
  //console.log(seq);



  setTimeout(() => {
    humanTurn();
  }, level * 600 + 1000);
  return;
}

function nextStep() {
  const random = tiles.splice([Math.floor(Math.random() * tiles.length)],1);


  return random;
}

function activateTile(tileno) {
  const tile = document.querySelector(`[data-tile='${tileno}']`);


  tile.classList.add('pressed');


  setTimeout(() => {
    tile.classList.remove('pressed');
  }, 300);
}

function playRound(nextSeq) {
  nextSeq.forEach((tileno, index) => {
    setTimeout(() => {
      activateTile(tileno);
    }, (index + 1) * 600);
  });
}

function humanTurn() {
  tileContainer.classList.remove('unclickable');
 return;

}

function handleClick(tile) {
  const index = humanSequence.push(tile) - 1;
  const sound = document.querySelector(`[data-sound='crt']`);
  sound.play();

  //const remainingTaps = sequence.length - humanSequence.length;
  console.log(humanSequence);
  console.log(sequence);

  if (humanSequence[index] != sequence[index]) {
    resetGame('Game over');
    return;
  }



  if (humanSequence.length === sequence.length) {

    if (humanSequence.length === 36) {

      resetGame('You Won!!!');

      return;


    }
    //else{
      //if(timeDur<=30+((10*sequence.length)-1)){
        //score+=10*sequence.length
      //}

    //}


    humanSequence = [];
    //info.textContent = 'Success! Keep going!';
    setTimeout(() => {
      nxtRnd();
    }, 1000);
    return;
  }

  //info.textContent = `Your turn: ${remainingTaps} Tap${
  //  remainingTaps > 1 ? 's' : ''
  //}`;
}

function resetGame(text) {
  alert(text+", Score :"+score);
  sequence = [];
  humanSequence = [];
  level = 0;
  score=0;
  startButton.classList.remove('hidden');
  info.classList.remove('hidden');
  tiles = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36'];


  tileContainer.classList.add('unclickable');
  return;
}









startButton.addEventListener('click', startGame);
tileContainer.addEventListener('click', event => {
  const  {tile}  = event.target.dataset;
  console.log(tile);

  if (tile) handleClick(tile);
});
