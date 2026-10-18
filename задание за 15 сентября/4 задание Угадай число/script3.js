function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkGuess(guess, secret) {
  if (guess === secret) return "Угадал!";
  return secret > guess ? "Загаданное число больше" : "Загаданное число меньше";
}

let secret = getRandomInt(1, 10);
let attempts = 0;
const result = document.getElementById("result");

document.getElementById("btn").addEventListener("click", function () {
  const guess = Number(document.getElementById("guess").value);
  if (!Number.isInteger(guess) || guess < 1 || guess > 10) {
    result.textContent = "Введите целое число от 1 до 10";
    return;
  }
  attempts++;
  let message = checkGuess(guess, secret);
  if (guess === secret) message += " Попыток: " + attempts;
  result.textContent = message;
});

document.getElementById("restart").addEventListener("click", function () {
  secret = getRandomInt(1, 10);
  attempts = 0;
  document.getElementById("guess").value = "";
  result.textContent = "Новая игра! Я загадал число.";
});
