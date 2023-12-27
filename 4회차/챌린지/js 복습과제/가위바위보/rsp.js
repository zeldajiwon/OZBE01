function playGame(userChoice) {
    const options = ['rock', 'paper', 'scissors'];
    const computerChoice = options[Math.floor(Math.random() * 3)];

    const outcome = document.getElementById('outcome');

    if (userChoice === computerChoice) {
        outcome.textContent = '비겼습니다!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        outcome.textContent = '이겼습니다!';
    } else {
        outcome.textContent = '졌습니다!' ;
    }
    
}