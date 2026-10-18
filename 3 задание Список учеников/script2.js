const students = [
  { name: "Анна", grade: 5 },
  { name: "Иван", grade: 3 },
  { name: "Мария", grade: 4 },
  { name: "Олег", grade: 2 },
  { name: "Елена", grade: 5 },
];

function studentsAbove(list, minGrade) {
  return list.filter((s) => s.grade > minGrade);
}

function averageGrade(list) {
  if (list.length === 0) return 0;
  return list.reduce((acc, s) => acc + s.grade, 0) / list.length;
}

function show() {
  const minGrade = Number(document.getElementById("min").value);
  const found = studentsAbove(students, minGrade);

  let text = "Ученики с оценкой выше " + minGrade + ":\n";
  text += found.length === 0
    ? "  таких нет"
    : found.map((s) => "  " + s.name + " — " + s.grade).join("\n");
  text += "\n\nСредняя оценка всех учеников: " + averageGrade(students).toFixed(2);

  document.getElementById("result").textContent = text;
}

document.getElementById("btn").addEventListener("click", show);
show();
