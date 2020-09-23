'use strict';

/*
  Write here your JavaScript for HackYourRepo!
*/
// debugger;
import { createUI } from './util/creatUI.js';
import { getRepos } from './util/getRepos.js';
import { getDetails } from './util/getDetails.js';
import { getContributors } from './util/getContributors.js';
import { paginate } from './util/paginate.js';
function main() {
  let UItemplate = createUI();
  getRepos(UItemplate);
  UItemplate.selectRepo.addEventListener('change', getDetails);
  UItemplate.selectRepo.addEventListener('change', getContributors);
}

window.addEventListener('load', main);
