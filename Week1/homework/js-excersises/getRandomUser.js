function getRandomUserXhr() {
  const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
  const xhr = new XMLHttpRequest();
  const url = 'https://www.randomuser.me/api';
  xhr.responseType = 'json';
  xhr.onload = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      console.log(JSON.stringify(xhr.response));
    } else {
      console.log('Error');
    }
  };
  xhr.open('GET', url);
  xhr.send();
}

function getRandomUserAxios() {
  // import axios from 'axios';
  // const axios = require('axios');
  axios
    .get('https://www.randomuser.me/api')
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}
getRandomUserXhr();
getRandomUserAxios();
