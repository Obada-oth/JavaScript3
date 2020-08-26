function getGigglesXhr() {
  const xhr = new XMLHttpRequest();
  const endpoint = 'https://xkcd.now.sh/?comic=latest';
  const img = document.createElement('img');
  document.body.appendChild(img);
  xhr.responseType = 'json';
  xhr.onload = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      console.log(xhr.response);
      img.src = xhr.response.img;
    } else {
      console.log("Something went wrong. I can't get you a giggle now :(");
    }
  };
  xhr.open('GET', endpoint);
  xhr.send();
}

function getGigglesAxios() {
  const img = document.createElement('img');
  document.body.appendChild(img);
  axios({
    method: 'get',
    url: 'https://xkcd.now.sh/?comic=latest',
  })
    .then(response => {
      console.log(response);
      img.src = response.data.img;
    })
    .catch(err => {
      console.error(err);
    });
}

getGigglesXhr();
getGigglesAxios();
