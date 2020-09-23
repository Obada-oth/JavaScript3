export const getContributors = async e => {
  try {
    let response = await fetch(
      `https://api.github.com/repos/HackYourFuture/${e.target.value}/contributors`,
    );
    let contributorsData = await response.json();
    let contributorsInformation = '';
    contributorsData.forEach(contributor => {
      contributorsInformation += `
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
      const contributorsOutput = document.getElementById('contributors-list');
      contributorsOutput.innerHTML = contributorsInformation;
    });
  } catch {
    document.getElementById('contributors-list').innerHTML = `
        
    <p class="error">Network request failed</p>
    `;
  }
};
