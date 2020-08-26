// debugger;
const ul = document.createElement('ul');
ul.style.listStyle = 'none';
const li = document.createElement('li');
const buttonXhr = document.createElement('button');
buttonXhr.innerText = 'New pic with xhr!';
const buttonAxios = document.createElement('button');
let img = document.createElement('img');
img.src = ' ';
li.appendChild(img);
buttonAxios.innerText = 'Another one with axios!';
document.body.appendChild(buttonXhr);
document.body.appendChild(buttonAxios);
document.body.appendChild(ul);
ul.appendChild(li);

function getDogPicXhr() {
  const xhr = new XMLHttpRequest();
  const endpoint = 'https://dog.ceo/api/breeds/image/random';
  xhr.responseType = 'json';
  xhr.onload = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      img.src = xhr.response.message;
    } else {
      console.log('No doggy happiness for you! ');
    }
  };
  xhr.open('GET', endpoint);
  xhr.send();
}

function getDogPicAxios() {
  axios({
    method: 'get',
    url: 'https://dog.ceo/api/breeds/image/random',
  })
    .then(res => {
      img.src = res.data.message;
    })
    .catch(err => {
      console.error(err);
      console.log('No doggy happiness for you!');
    });
}

buttonXhr.addEventListener('click', getDogPicXhr);
buttonAxios.addEventListener('click', getDogPicAxios);
