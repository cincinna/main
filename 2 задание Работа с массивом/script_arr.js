const numbers = [4, 8, 15, 16, 23, 42];

const sum = numbers.reduce((acc, n) => acc + n, 0);
const max = Math.max(...numbers);
const bigNumbers = numbers.filter((n) => n > 10);

document.getElementById("result").textContent =
  "Массив: [" + numbers.join(", ") + "]\n\n" +
  "Сумма элементов: " + sum + "\n" +
  "Самое большое число: " + max + "\n" +
  "Числа больше 10: [" + bigNumbers.join(", ") + "]";
