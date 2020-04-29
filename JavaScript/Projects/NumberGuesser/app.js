// Variable

let min = 5,
    max = 20,
    winningNumber = getRandomNum(min,max);
    guessesLeft = 3;

//UI Variable
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input')
      btnGuess = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');


minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function(e){
  if(e.target.className == 'play-again'){
    window.location.reload();
  }
})

btnGuess.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  console.log(guess);

  if(isNaN(guess) || guessInput < min || guessInput > max){
    setMessage(`Please choose a number between ${min} and ${max}.`, 'red');

  }else{
    // if winnning number
    if(guess === winningNumber){
      gameOver(true, `${winningNumber} is correct, YOU WIN!!`)
    } else {
      guessesLeft -= 1;
      if( guessesLeft === 0 ){
        gameOver(false, `The correct number is ${winningNumber}. GAME OVER`)
      } else {
        guessInput.value = '';
        guessInput.style.borderColor = 'red';
        setMessage(`${guess} is wrong, Try again, you have ${guessesLeft} guesses left.`, 'blue');
      }

      
    }

  }
});

function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}

function getRandomNum(min, max){
  console.log(Math.random() * (max-min+1) + min)
}

function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';

  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg, color);

  //play again
  btnGuess.value = 'PLAY AGAIN';
  btnGuess.className += 'play-again';
}

