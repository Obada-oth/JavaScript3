'use strict';

/*
  Write here your JavaScript for HackYourRepo!
*/

const selectRepo = document.getElementById('select-repo');
const repoDetails = document.getElementById('details');
const contributorsList = document.getElementById('contributors-list');
function getReposList() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'placeholders.json');
  xhr.onload = () => {
    if (xhr.status === 200) {
      const repos = JSON.parse(xhr.responseText);

      repos.forEach(repo => {
        const option = document.createElement('option');
        option.innerText = repo.name;
        selectRepo.appendChild(option);
      });
    }
  };
  xhr.send();
}
function getDetails() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'placeholders.json');
  xhr.onload = () => {
    if (xhr.status === 200) {
      const repos = JSON.parse(xhr.responseText);
      const options = Array.from(document.getElementsByTagName('option'));
      for (let i in options) {
        options[i].value = '';
        options[i].value += `
        <div class="table">
        <table >
        <tr>
        <td class="titles"> Repository: </td>
        <td class="content">
        <a href="" target="#">
        ${repos[i].name}
        </a>
        </td>
        </tr>
        <tr>
        <td class="titles"> Description: </td>
        <td class="content">
        ${repos[i].description}
        </td>
        </tr>
        <tr>
        <td class="titles"> Forks: </td>
        <td class="content">
        ${repos[i].forks}
        </td>
        </tr>
        <tr>
        <td class="titles"> Updated: </td>
        <td class="content">
        ${repos[i].updated}
        </td>
        </tr>
        </table>
        </div>;

        `;
      }
      repoDetails.innerHTML = selectRepo.value;
    }
  };
  xhr.send();
}

function getContributors() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'placeholders.json');
  xhr.onload = () => {
    if (xhr.status === 200) {
      const repos = JSON.parse(xhr.responseText);
      const options = Array.from(document.getElementsByTagName('option'));
      for (let i in options) {
        options[i].value = '';

        options[i].value += `
          <ul>
          <li>
          <img src="
          ${repos[i].contributor1.img} 
          " width="40" class="cont-img">
          <a href="" target=#>
          ${repos[i].contributor1.name}
          </a>
          </li>
          <li>
          <img src="
          ${repos[i].contributor2.img}
          " width="40" class="cont-img">
          <a href="" target=#>
          ${repos[i].contributor2.name}
          </a>
          </li>
          </ul>`;
      }

      contributorsList.innerHTML = selectRepo.value;
    }
  };
  xhr.send();
}

window.addEventListener('load', getReposList);
selectRepo.addEventListener('change', getDetails);
selectRepo.addEventListener('change', getContributors);
