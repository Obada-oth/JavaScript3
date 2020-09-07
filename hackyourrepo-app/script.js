'use strict';

/*
  Write here your JavaScript for HackYourRepo!
*/
// debugger;
function main() {
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

  const main = document.createElement('main');
  document.body.appendChild(main);

  const repoDetails = document.createElement('div');
  repoDetails.className = 'details';
  const repoDetailsSection = document.createElement('section');
  repoDetailsSection.className = 'main-content';
  const repoDetailsDiv = document.createElement('div');
  repoDetailsDiv.id = 'details';
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
  contributorsOutput.id = 'contributors-list';
  contributorsWrapper.appendChild(contributorsOutput);

  function getRepos() {
    const xhr = new XMLHttpRequest();
    const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
    xhr.open('GET', url);

    xhr.onload = () => {
      if (xhr.status === 200) {
        const repos = JSON.parse(xhr.responseText);

        repos.forEach(repo => {
          const option = document.createElement('option');
          option.innerText = repo.name;
          option.value = repo.name;

          selectRepo.appendChild(option);
        });
      }
    };
    xhr.send();
  }
  function getDetails(e) {
    const xhr = new XMLHttpRequest();
    const repoName = e.target.value;
    const url = `https://api.github.com/repos/HackYourFuture/${repoName}`;
    xhr.open('GET', url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const repoData = JSON.parse(xhr.responseText);
        let repoInformation = '';
        repoInformation += `
        <table class="table">
            <tr>
            <td class="titles"> Repository: </td>
            <td class="content">
            <a href="${repoData.html_url}" target="#">
            ${repoData.name}
            </a>
            </td>
            </tr>
            <tr>
            <td class="titles"> Description: </td>
            <td class="content">
            ${repoData.description}
            </td>
            </tr>
            <tr>
            <td class="titles"> Forks: </td>
            <td class="content">
            ${repoData.forks_count}
            </td>
            </tr>
            <tr>
            <td class="titles"> Updated: </td>
            <td class="content">
            ${new Date(Date.parse(repoData.updated_at))}
            </td>
            </tr>
            </table>
            </div>
        
        `;
        repoDetailsDiv.innerHTML = repoInformation;
      }
    };

    xhr.send();
  }

  function getContributors(e) {
    const xhr = new XMLHttpRequest();
    const repoName = e.target.value;
    const url = `https://api.github.com/repos/HackYourFuture/${repoName}/contributors`;
    xhr.open('GET', url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const contributors = JSON.parse(xhr.responseText);

        let output = '';
        contributors.forEach(contributor => {
          output += `
          <ul>
          <li class="main-content">
          <div class="cont">
          <img src=${contributor.avatar_url} class="cont-img">
          <p>
          <a href=${contributor.html_url}>${contributor.login}</a>
          </p>
          </div>
          <div>
          <p class='cont-count'>${contributor.contributions}</p>
          </div>
          </li>
          </ul>
          `;
          contributorsOutput.innerHTML = output;
        });
      }
    };
    xhr.send();
  }
  selectRepo.addEventListener('change', getDetails);
  selectRepo.addEventListener('change', getContributors);
  getRepos();
}
window.addEventListener('load', main);
