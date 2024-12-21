let currentQuestion = 0;

const answers = {
  0: 'cat', // правильный ответ на первый вопрос
  1: 'mendi', // правильный ответ на второй
  2: 'mayot', // правильный ответ на третий
  3: 'volleyball' // правильный ответ на четвертый
};

function checkAnswer(answer) {
  if (answer === answers[currentQuestion]) {
    alert('Правильный ответ!');
    currentQuestion++;
    if (currentQuestion < 4) {
      loadQuestion(currentQuestion);
    } else {
      showFinalMessage();
    }
  } else {
    alert('Неправильный ответ! Попробуй еще раз.');
  }
}

function loadQuestion(index) {
  // Изменить вопрос и варианты ответа, в зависимости от номера вопроса
  const questions = [
    { text: 'Выбери котика', choices: ['cat', 'dog', 'cow', 'lion'] },
    { text: 'Выбери Менди', choices: ['mendi', 'fighter1', 'fighter2', 'fighter3'] },
    { text: 'Выбери Майота', choices: ['mayot', 'rapper1', 'rapper2', 'rapper3'] },
    { text: 'Выбери волейбол', choices: ['volleyball', 'basketball', 'football', 'tennis'] }
  ];

  const question = questions[index];
  document.getElementById('question-text').innerText = question.text;

  // Обновить картинки в вариантах ответов
  const choices = document.getElementById('choices').children;
  question.choices.forEach((choice, i) => {
    choices[i].querySelector('img').src = `${choice}.jpg`;
  });
}

function showFinalMessage() {
  const finalMessage = document.getElementById('final-message');
  finalMessage.style.display = 'block';
}

for (let i = 0; i < 200; i++) {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.innerText = '❄️';
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
  document.body.appendChild(snowflake);
}

loadQuestion(currentQuestion);
