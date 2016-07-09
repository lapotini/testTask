


var block = document.querySelector('.block');
var tablo = document.querySelector('.tablo');
var start = document.querySelector('.buttonStart');
var finish = document.querySelector('.buttonFinish');
var topPosition = 0;
var scoreCount = 0;
var gameStart = false;
var letters = [
  {
    letter: 'Q',
    keyCode: 81
  },
  {
    letter: 'W',
    keyCode: 87
  },
  {
    letter: 'E',
    keyCode: 69

  },
  {
    letter: 'R',
    keyCode: 82
  },
  {
    letter: 'T',
    keyCode: 84
  }
];

var r1 = randomInteger(0, letters.length-1);



start.addEventListener('click', function(e){
  if (!gameStart){
    dropElement(block);
    block.textContent = letters[r1].letter;
  }
    e.preventDefault();
});
finish.addEventListener('click', function(e){
  clearInterval(interval);
  e.preventDefault();
});


document.addEventListener('keydown', function(e) {
  if (e.keyCode == letters[r1].keyCode) {
    removeBlock();
    e.preventDefault();
  }
});




function dropElement (element){
  gameStart = true;
  var speed = 10;
  var duration = 30;

  var interval =  setInterval(function(){
   if(topPosition > 450){
     scoreCount--;
     refresh();
   }
   topPosition += 3;
   element.style.top = topPosition + 'px';
  },duration);
}

function removeBlock(){
  scoreCount++;
  refresh()
}

function refresh(){
  r1 = randomInteger(0, letters.length-1);
  block.textContent = letters[r1].letter;
  topPosition = 0;
  tablo.textContent = scoreCount;
}


function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
}



