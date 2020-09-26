const url = 'https://opentdb.com/api.php?amount=5';

const header = document.createElement('header');
document.body.appendChild(header);
const title = document.createElement('h1');
title.className = 'title';
title.innerText = 'Trivia Game';
const subTitle = document.createElement('h5');
subTitle.className = 'subtitle';
subTitle.innerText = 'Click on the question to reveal answer! ';
header.appendChild(title);
header.appendChild(subTitle);
const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.appendChild(wrapper);
const getNewQuestions = document.createElement('button');
getNewQuestions.innerText = 'Click me to get a new set of questions!';
getNewQuestions.className = 'get-more-questions';
document.body.appendChild(getNewQuestions);

getNewQuestions.addEventListener('click', () => {
  wrapper.innerHTML = '';
  getTrivia(url);
});

async function getTrivia(url) {
  let response = await fetch(url);
  let data = await response.json();
  let triviaQuestionsList = data.results;
  triviaQuestionsList.forEach(triviaQuestion => {
    const questionBtn = document.createElement('button');
    questionBtn.className = 'question';
    wrapper.appendChild(questionBtn);
    questionBtn.style.display = 'block';
    questionBtn.innerText = unescaped(triviaQuestion.question);

    const answerDiv = document.createElement('div');
    answerDiv.className = 'answer';
    wrapper.appendChild(answerDiv);
    answerDiv.innerText = unescaped(triviaQuestion.correct_answer);

    answerDiv.style.display = 'none';
    questionBtn.addEventListener('click', () => {
      if (answerDiv.style.display === 'block') {
        answerDiv.style.display = 'none';
      } else {
        answerDiv.style.display = 'block';
      }
    });
  });
}

function unescaped(text) {
  var doc = new DOMParser().parseFromString(text, 'text/html');
  return doc.documentElement.textContent;
}

getTrivia(url);
