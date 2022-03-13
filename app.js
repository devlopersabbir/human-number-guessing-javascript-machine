const userInputNumber = +prompt("Enter your number");

if (userInputNumber <= 3) {
  const randomNumberMaking = Math.floor(Math.random() * 3);

  if (userInputNumber == randomNumberMaking) {
    document.write(`You win. ${userInputNumber} ===== ${randomNumberMaking}`);
  } else {
    document.write(`You loss. ${userInputNumber} ===== ${randomNumberMaking}`);
  }
} else {
  alert('Invalid Number');
}
