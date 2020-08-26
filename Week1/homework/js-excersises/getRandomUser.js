function getRandomUserXhr() {
  const xhr = new XMLHttpRequest();
  const url = 'https://www.randomuser.me/api';
  xhr.responseType = 'json';
  xhr.onload = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      console.log(xhr.response);
    } else {
      console.log('Error');
    }
  };
  xhr.open('GET', url);
  xhr.send();
}

function getRandomUserAxios() {
  axios({
    mehtod: 'get',
    url: 'https://www.randomuser.me/api',
  })
    .then(response => console.log(response))

    .catch(error => {
      console.error(error);
    });
}

getRandomUserXhr();
getRandomUserAxios();
