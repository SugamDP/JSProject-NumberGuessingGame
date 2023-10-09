'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '😒 No Number!!';
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent =
      'Congratulations! You Won!💕🙌';
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 0) {
      score = score - 1;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Too High!!👆👆👆';
    } else {
      document.querySelector('.message').textContent =
        'You lost the game!!🤦‍♂️🤦‍♀️🤷‍♀️💀';
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      score = score - 1;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Too Low!!👇👇👇';
    } else {
      document.querySelector('.message').textContent =
        'You lost the game!!🤦‍♂️🤦‍♀️🤷‍♀️💀';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
