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
    return number + ": " + sign + ", дробное (чётность не определяется)";
  }

  const parity = number % 2 === 0 ? "чётное" : "нечётное";
  return number + ": " + sign + ", " + parity;
}

document.getElementById("btn").addEventListener("click", function () {
  const value = document.getElementById("num").value;
  const result = document.getElementById("result");
  result.textContent = value === "" ? "Введите число" : checkNumber(Number(value));
});
