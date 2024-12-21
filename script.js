const questions = [
  {
    question: "Выбери котика",
    options: ["cat.jpg", "dog.jpg", "cow.jpg", "lion.jpg"],
    correct: "cat.jpg"
  },
  {
    question: "Выбери Менди",
    options: ["mendi.jpg", "fighter1.jpg", "fighter2.jpg", "fighter3.jpg"],
    correct: "mendi.jpg"
  },
  {
    question: "Выбери Майота",
    options: ["mayot.jpg", "rapper1.jpg", "rapper2.jpg", "rapper3.jpg"],
    correct: "mayot.jpg"
  },
  {
    question: "Выбери волейбол",
    options: ["volleyball.jpg", "basketball.jpg", "football.jpg", "tennis.jpg"],
    correct: "volleyball.jpg"
  }
];

let currentQuestionIndex = 0;

function showQuestion(index) {
  const question = questions[index];
  document.getElementById("question-text").textContent = question.question;

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";
  question.options.forEach(option => {
    const img = document.createElement("img");
    img.src = option;
    img.alt = option;
    img.onclick = () => checkAnswer(option, question.correct);
    optionsContainer.appendChild(img);
  });
}

function checkAnswer(selected, correct) {
  const errorMessage = document.getElementById("error-message");

  if (selected === correct) {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      showQuestion(currentQuestionIndex);
    } else {
      showFinalMessage();
    }
  } else {
    errorMessage.style.display = "block";
    errorMessage.textContent = "Неправильный ответ! Попробуй еще раз.";
    setTimeout(() => {
      errorMessage.style.display = "none";
    }, 2000);
  }
}

function showFinalMessage() {
  const finalMessage = document.getElementById("final-message");
  const finalImages = document.getElementById("final-images");

  finalMessage.style.display = "block";

  questions.forEach(question => {
    const img = document.createElement("img");
    img.src = question.correct;
    finalImages.appendChild(img);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  showQuestion(currentQuestionIndex);
});
