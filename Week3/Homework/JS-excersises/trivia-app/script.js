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
getNewQuestions.addEventListener('click', refreshPage);

function refreshPage() {
  location.reload();
}

async function getTrivia(url) {
  let response = await fetch(url);
  let data = await response.json();
  let triviaQuestionsList = data.results;
  triviaQuestionsList.forEach(triviaQuestion => {
    const questionBtn = document.createElement('button');
    questionBtn.className = 'question';
    wrapper.appendChild(questionBtn);
    questionBtn.style.display = 'block';
    questionBtn.innerText = triviaQuestion.question
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&Eacute;/g, 'é');
    const answerDiv = document.createElement('div');
    answerDiv.className = 'answer';
    wrapper.appendChild(answerDiv);
    answerDiv.innerText = triviaQuestion.correct_answer
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&Eacute;/g, 'é');

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

getTrivia(url);
