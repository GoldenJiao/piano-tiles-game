let sequence = [];
let humanSequence = [];
let level=0;
let tiles = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'];
const startButton = document.querySelector('.js-start');
const tileContainer = document.querySelector('.js-container');
const info = document.querySelector('p');

function startGame() {
  startButton.classList.add('hidden');
  info.classList.add('hidden');
  nxtRnd();
}

function nxtRnd(){
  level += 1;

  tileContainer.classList.add('unclickable');

  const nextSeq=[...sequence];
  nextSeq.push(nextStep());
  playRound(nextSeq);

  sequence = [...nextSeq];
  setTimeout(() => {
    humanTurn();
  }, level * 600 + 1000);
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
}

function handleClick(tile) {
  const index = humanSequence.push(tile) - 1;
  console.log(index);
  console.log(sequence[index]);
  console.log(humanSequence[index]);

 

  if (humanSequence[index] != sequence[index]) {
    resetGame('Game over');
    return;
  }

  if (humanSequence.length === sequence.length) {
    if (humanSequence.length === 16) {
      resetGame('You Won!!!');
      return
    }
    humanSequence = [];
    //info.textContent = 'Success! Keep going!';
    setTimeout(() => {
      nxtRnd();
    }, 1000);
    return;
  }

}

function resetGame(text) {
  alert(text);
  sequence = [];
  humanSequence = [];
  level = 0;
  startButton.classList.remove('hidden');
  info.classList.remove('hidden');
  tileContainer.classList.add('unclickable');
}









startButton.addEventListener('click', startGame);

tileContainer.addEventListener('click', event => {
  const  {tile}  = event.target.dataset;
  console.log(tile);

  if (tile) handleClick(tile);
});

