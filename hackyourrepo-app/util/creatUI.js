'use strict';
export const createUI = () => {
  const header = document.createElement('header');
  header.style.backgroundColor = 'blue';
  document.body.appendChild(header);
  const divSelect = document.createElement('div');
  divSelect.className = 'select';
  header.appendChild(divSelect);
  const label = document.createElement('label');
  label.setAttribute('for', 'select-repo');
  label.innerText = 'HYF Repositories';
  divSelect.appendChild(label);
  const selectRepo = document.createElement('select');
  selectRepo.id = 'select-repo';
  divSelect.appendChild(selectRepo);
  const choosPrompt = document.createElement('option');
  choosPrompt.setAttribute('selected', 'selected');
  choosPrompt.setAttribute('disabled', 'disabled');
  choosPrompt.innerText = '---Choose a Repo---';
  selectRepo.appendChild(choosPrompt);
  const main = document.createElement('main');
  document.body.appendChild(main);
  const repoDetails = document.createElement('div');
  repoDetails.className = 'details';
  const repoDetailsSection = document.createElement('section');
  repoDetailsSection.className = 'main-content';
  const repoDetailsDiv = document.createElement('div');
  repoDetailsDiv.id = 'details';
  repoDetailsDiv.innerHTML = `<h3> Select a repo to see more details</h3>`;
  repoDetailsSection.appendChild(repoDetailsDiv);
  repoDetails.appendChild(repoDetailsSection);
  main.appendChild(repoDetails);

  const contributorsWrapper = document.createElement('div');
  contributorsWrapper.className = 'contributors';
  main.appendChild(contributorsWrapper);
  const contributorsSection = document.createElement('section');
  contributorsSection.className = 'main-content';
  contributorsSection.id = 'contributors';
  contributorsWrapper.appendChild(contributorsSection);
  const h3 = document.createElement('h3');
  h3.innerText = 'Contributors';
  contributorsSection.appendChild(h3);

  const contributorsOutput = document.createElement('section');
  const pageBtnsDiv = document.createElement('div');
  pageBtnsDiv.id = 'page-btn-div';
  pageBtnsDiv.classList.add('page-numbers');
  contributorsWrapper.appendChild(pageBtnsDiv);
  contributorsOutput.id = 'contributors-list';
  contributorsWrapper.appendChild(contributorsOutput);
  return {
    header,
    divSelect,
    label,
    selectRepo,
    main,
    repoDetails,
    repoDetailsSection,
    repoDetailsDiv,
    contributorsWrapper,
    contributorsSection,
    h3,
    contributorsOutput,
  };
};
