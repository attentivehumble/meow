let currentQuestion = 0;
const questions = [
  { question: "Выбери котика:", correctAnswer: "cat", options: ["cat", "dog", "cow", "lion"] },
  { question: "Выбери Менди:", correctAnswer: "mendi", options: ["mendi", "fighter1", "fighter2", "fighter3"] },
  { question: "Выбери Майота:", correctAnswer: "mayot", options: ["mayot", "rapper1", "rapper2", "rapper3"] },
  { question: "Выбери волейбол:", correctAnswer: "volleyball", options: ["volleyball", "basketball", "football", "tennis"] }
];
let correctAnswers = 0;

function loadQuestion() {
  const question = questions[currentQuestion];
  document.getElementById('question-text').textContent = question.question;
  
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = ''; // очищаем контейнер перед загрузкой новых картинок

  question.options.forEach(option => {
    const img = document.createElement('img');
    img.src = `${option}.jpg`;
    img.alt = option;
    img.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(img);
  });
}

function checkAnswer(selected) {
  const correctAnswer = questions[currentQuestion].correctAnswer;
  
  if (selected === correctAnswer) {
    correctAnswers++;
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      loadQuestion();
    } else {
      showFinalMessage();
    }
  } else {
    showErrorMessage();
  }
}

function showErrorMessage() {
  const errorMessage = document.getElementById('error-message');
  errorMessage.style.display = 'block';
  setTimeout(() => {
    errorMessage.style.display = 'none';
  }, 2000);
}

function showFinalMessage() {
  document.getElementById('final-message').style.display = 'block';
  const finalImages = document.getElementById('final-images');
  finalImages.innerHTML = ''; // очищаем предыдущие изображения

  questions.forEach(question => {
    const img = document.createElement('img');
    img.src = `${question.correctAnswer}.jpg`;
    img.alt = question.correctAnswer;
    finalImages.appendChild(img);
  });
}

loadQuestion();  // загружаем первый вопрос при старте
