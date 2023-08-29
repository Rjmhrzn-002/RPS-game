const choices = ['rock', 'paper', 'scissor'];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function play() {
  const playerChoiceButtons = document.querySelectorAll('#player-choice .btn');
  let playerChoice = '';

  playerChoiceButtons.forEach(button => {
    if (button.classList.contains('selected')) {
      playerChoice = button.id;
    }
  });

  if (!playerChoice) {
    alert('Please select a choice before clicking PLAY.');
    return;
  }

  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);

  const resultText = `Player chose: ${playerChoice}\nComputer chose: ${computerChoice}\nResult: ${result}`;
  alert(resultText);
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissor') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissor' && computerChoice === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

document.querySelectorAll('#player-choice .btn').forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'selected' class from all buttons
    document.querySelectorAll('#player-choice .btn').forEach(btn => btn.classList.remove('selected'));
    // Add 'selected' class to the clicked button
    button.classList.add('selected');
  });
});
