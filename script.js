let attempts = 7;
let randomNum = Math.floor([Math.random() * 20]) + 1;

const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptsNum = document.getElementById("attempts");
const restartBtn=document.getElementById("restart");

submit.addEventListener("click", () => {
  const userValue = guess.value;
  if (userValue=="") {
    alert("please enter a number:");
    return;
  }
  if (isNaN(userValue)) {
    alert("That's not a number");
    return;
  }
  if (userValue > 20 || userValue < 1) {
    alert("Number must be between 1 to 20");
    return;
  }

  if (attempts > 0) {
    if (userValue == randomNum) {
      hint.textContent = "Congratulations!, you guessed it correct";
      attemptsNum.textContent = "Game Over!";
      endGame();
    } else if (userValue > randomNum) {
      hint.textContent = "Too high!,Try again";
      attemptsNum.textContent = "Attempts remaining: " + attempts;
      attempts--;
    } else {
      hint.textContent = "Too low!,Try again";
      attemptsNum.textContent = "Attempts remaining: " + attempts;
      attempts--;
    }
  } else {
    hint.textContent = `Game over! The correct number was ${randomNum}`;
    attemptsNum.textContent ="Wanna play again?";
    endGame();
   }
});

function endGame(){
   guess.disabled=true;
   submit.disabled=true;
   restartBtn.style.display="inline-block";
}

restartBtn.addEventListener("click",()=>{
   attempts=7;
   randomNum= Math.floor([Math.random() * 20]) + 1;
   guess.disabled=false;
   submit.disabled=false;
   guess.value="";
   hint.textContent="";
   attemptsNum.textContent=`Attempts Remaining: ${attempts}`;
   restartBtn.style.display="none";
})