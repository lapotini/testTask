
document.addEventListener("DOMContentLoaded", function(event) {

    var block = document.querySelector('.block');
    var scoreboard = document.querySelector('.scoreboard');
    var start = document.querySelector('.buttonStart');
    var finish = document.querySelector('.buttonFinish');
    var topPosition = 0;
    var lastPosition = 0;
    var scoreCount = 0;
    var gameStart = false;
    var speed;
    var acceleration;
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

    var randInt = randomInteger(0, letters.length-1);



    start.addEventListener('click', function(e){
      if (!gameStart){
        dropElement(block);
        block.textContent = letters[randInt].letter;
    	resetSpeed();
      }
        e.preventDefault();
    });
    finish.addEventListener('click', function(e){

      clearInterval(interval);
      e.preventDefault();
    });


    document.addEventListener('keydown', function(e) {

      if (e.keyCode == letters[randInt].keyCode) {
        removeBlock();

        e.preventDefault();
      }
    });


    function dropElement (element){
      gameStart = true;

      var interval =  setInterval(function(){
       if(topPosition > 450){
         scoreCount--;
         refresh();
       }
       accelerate();   //умножаем скорость на 1.1
       topPosition += speed;
       element.style.top = topPosition + 'px';
      },30);
    }

    function removeBlock(){
      scoreCount++;
      refresh()
    }


    function refresh(){
      randInt = randomInteger(0, letters.length-1);
      block.textContent = letters[randInt].letter;
      topPosition = 0;
      scoreboard.textContent = scoreCount;

      resetSpeed();
    }

    function accelerate(){
    	if(Math.abs(topPosition)>=10){
    		speed *= acceleration;
    	}
    }

    function resetSpeed(){
    	speed = 1.0;
    	acceleration = 1.1;
    }


    function randomInteger(min, max) {
      var rand = min - 0.5 + Math.random() * (max - min + 1);
      rand = Math.round(rand);
      return rand;
    }



});
