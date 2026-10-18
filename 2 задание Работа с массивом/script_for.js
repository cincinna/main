const numbers = [4, 8, 15, 16, 23, 42];

let sum = 0;
let max = numbers[0];
const bigNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  if (numbers[i] > max) max = numbers[i];
  if (numbers[i] > 10) bigNumbers.push(numbers[i]);
}

document.getElementById("result").textContent =
  "Массив: [" + numbers.join(", ") + "]\n\n" +
  "Сумма элементов: " + sum + "\n" +
  "Самое большое число: " + max + "\n" +
  "Числа больше 10: [" + bigNumbers.join(", ") + "]";
