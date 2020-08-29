'use strict';

/*
  Write here your JavaScript for HackYourRepo!
*/

const selectRepo = document.getElementById('select-repo');
const repoDetails = document.getElementById('details');
function getDetails(event) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'placeholders.json', true);
  xhr.onload = () => {
    if (xhr.status === 200) {
      const repos = JSON.parse(xhr.responseText);
      const options = Array.from(document.getElementsByTagName('option'));
      for (let i in options) {
        options[i].value = '';

        options[i].value +=
          '<table>' +
          '<tr>' +
          '<td class="titles"> Repository: </td>' +
          '<td class="content">' +
          '<a href="" targer="#">' +
          repos[i].name +
          '</a>' +
          '</td>' +
          '</tr>' +
          '<tr>' +
          '<td class="titles"> Description: </td>' +
          '<td class="content">' +
          repos[i].description +
          '</td>' +
          '</tr>' +
          '<tr>' +
          '<td class="titles"> Forks: </td>' +
          '<td class="content">' +
          repos[i].forks +
          '</td>' +
          '</tr>' +
          '<tr>' +
          '<td class="titles"> Updated: </td>' +
          '<td class="content">' +
          repos[i].updated +
          '</td>' +
          '</tr>' +
          '</table>';

        repoDetails.innerHTML = event.target.value;
      }
    }
  };

  xhr.send();
}
document.addEventListener('load', getDetails);
selectRepo.addEventListener('change', getDetails);
