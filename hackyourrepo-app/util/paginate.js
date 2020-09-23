export function paginate(contributors, wrapper, contributorsPerPage, page) {
  wrapper.innerHTML = '';
  page--;

  let start = contributorsPerPage * page;
  let end = start + contributorsPerPage;
  let paginatedContributors = contributors.slice(start, end);
  for (let i = 0; i < paginatedContributors.length; i++) {
    let contributor = paginatedContributors[i];
    let contributorElement = document.createElement('li');
    contributorElement.innerHTML = `
                <div class="cont">
                <img src=${contributor.avatar_url} class="cont-img">
                <p>
                <a href=${contributor.html_url}>${contributor.login}</a>
                </p>
                </div>
                <div>
                <p class='cont-count'>${contributor.contributions}</p>
                </div>
                `;

    wrapper.appendChild(contributorElement);
  }
}

export function setupPagination(contributors, wrapper, contributorsPerPage) {
  wrapper.innerHTML = '';

  let numOfPages = Math.ceil(contributors.length / contributorsPerPage);
  for (let i = 1; i < numOfPages + 1; i++) {
    let btn = paginationButton(i, contributors);
    wrapper.appendChild(btn);
  }
}

export function paginationButton(page, contributorsData) {
  const contributorsOutput = document.getElementById('contributors-list');
  let currentPage = 1;
  let rows = 5;
  let button = document.createElement('button');
  button.innerText = page;

  if (currentPage === page) {
    button.classList.add('active');
  }

  button.addEventListener('click', function() {
    currentPage = page;
    paginate(contributorsData, contributorsOutput, rows, currentPage);

    let currentBtn = document.querySelector('.page-numbers button.active');
    currentBtn.classList.remove('active');

    button.classList.add('active');
  });

  return button;
}
