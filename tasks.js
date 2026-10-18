// ===== 1) Проверка числа =====
function checkNumber(number) {
  if (typeof number !== "number" || Number.isNaN(number)) {
    return "Это не число";
  }

  let sign;
  if (number > 0) sign = "положительное";
  else if (number < 0) sign = "отрицательное";
  else sign = "ноль";

  // чётность имеет смысл только для целых чисел
  if (!Number.isInteger(number)) {
    return `${number}: ${sign}, дробное (чётность не определяется)`;
  }

  const parity = number % 2 === 0 ? "чётное" : "нечётное";
  return `${number}: ${sign}, ${parity}`;
}

console.log("--- Задача 1 ---");
console.log(checkNumber(7));    // 7: положительное, нечётное
console.log(checkNumber(-4));   // -4: отрицательное, чётное
console.log(checkNumber(0));    // 0: ноль, чётное
console.log(checkNumber(2.5));  // дробное

// ===== 2) Работа с массивом =====
const numbers = [4, 8, 15, 16, 23, 42];

// --- через цикл ---
let sumLoop = 0;
let maxLoop = numbers[0];
const bigLoop = [];
for (let i = 0; i < numbers.length; i++) {
  sumLoop += numbers[i];
  if (numbers[i] > maxLoop) maxLoop = numbers[i];
  if (numbers[i] > 10) bigLoop.push(numbers[i]);
}

// --- через методы массивов ---
const sumMethod = numbers.reduce((acc, n) => acc + n, 0);
const maxMethod = Math.max(...numbers);
const bigMethod = numbers.filter((n) => n > 10);

console.log("--- Задача 2 ---");
console.log("Цикл:   сумма =", sumLoop, ", максимум =", maxLoop, ", >10:", bigLoop);
console.log("Методы: сумма =", sumMethod, ", максимум =", maxMethod, ", >10:", bigMethod);

// ===== 3) Список учеников =====
const students = [
  { name: "Анна", grade: 5 },
  { name: "Иван", grade: 3 },
  { name: "Мария", grade: 4 },
  { name: "Олег", grade: 2 },
  { name: "Елена", grade: 5 },
];

function printStudentsAbove(list, minGrade) {
  const result = list.filter((s) => s.grade > minGrade);
  console.log(`Ученики с оценкой выше ${minGrade}:`);
  if (result.length === 0) {
    console.log("  таких нет");
  }
  result.forEach((s) => console.log(`  ${s.name} — ${s.grade}`));
}

function averageGrade(list) {
  if (list.length === 0) return 0;
  const total = list.reduce((acc, s) => acc + s.grade, 0);
  return total / list.length;
}

console.log("--- Задача 3 ---");
printStudentsAbove(students, 3);
console.log("Средняя оценка:", averageGrade(students).toFixed(2));

// ===== 4*) Угадай число =====
// Запуск: node tasks.js  (после задач 1-3 начнётся игра)
const readline = require("readline");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkGuess(guess, secret) {
  if (guess === secret) return "Угадал!";
  return secret > guess ? "Загаданное число больше" : "Загаданное число меньше";
}

function playGame() {
  const secret = getRandomInt(1, 10);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("--- Задача 4: Угадай число от 1 до 10 ---");

  function ask() {
    rl.question("Ваш вариант: ", (answer) => {
      const guess = Number(answer);
      if (!Number.isInteger(guess) || guess < 1 || guess > 10) {
        console.log("Введите целое число от 1 до 10");
        return ask();
      }
      const message = checkGuess(guess, secret);
      console.log(message);
      if (guess === secret) rl.close();
      else ask();
    });
  }
  ask();
}

playGame();
