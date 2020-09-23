'use strict';
export const getDetails = async e => {
  try {
    let response = await fetch(
      `https://api.github.com/repos/HackYourFuture/${e.target.value}`,
    );
    let repoData = await response.json();
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
              </div>`;
    let repoDetailsDiv = document.getElementById('details');
    repoDetailsDiv.innerHTML = repoInformation;
  } catch {
    document.getElementById('details').innerHTML = `
        
    <p class="error">Network request failed</p>
    `;
  }
};
