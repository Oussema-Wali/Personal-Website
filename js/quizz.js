function checkAnswers() {
  let score = 0;
  const total = 15;

  // Correct answers
    const answers = {
    q1: "b", // <img>
    q2: "b", // margin: auto
    q3: "b", // alt
    q4: "b", // alert()
    q5: "a", // background-color
    q6: "b", // Tokyo
    q7: "c", // 7 continents
    q8: "c", // Pacifique
    q9: "c", // Léonard de Vinci
    q10: "b", // Mercure
    q11: "c", // 11 players
    q12: "b", // France 2018
    q13: "a", // 1 point for a free throw
    q14: "a", // Lionel Messi
    q15: "b"  // 3 sets
    };



  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  const result = document.getElementById("result");
  result.innerHTML = `Vous avez obtenu ${score} / ${total} bonnes réponses.`;

  if (score >= 7) {
    result.style.color = "green";
  } else {
    result.style.color = "red";
  }
}
