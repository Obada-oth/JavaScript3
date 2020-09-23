'use strict';
import { paginate, setupPagination } from './paginate.js';

export async function getContributors(e) {
  try {
    let response = await fetch(
      `https://api.github.com/repos/HackYourFuture/${e.target.value}/contributors`,
    );
    let contributorsData = await response.json();
    const contributorsOutput = document.getElementById('contributors-list');
    const pageBtnsDiv = document.getElementById('page-btn-div');
    let currentPage = 1;
    let rows = 5;
    paginate(contributorsData, contributorsOutput, rows, currentPage);
    setupPagination(contributorsData, pageBtnsDiv, rows);
  } catch (error) {
    console.log(error);
    document.getElementById('contributors-list').innerHTML = `
        
    <p class="error">Network request failed</p>
    `;
  }
}
