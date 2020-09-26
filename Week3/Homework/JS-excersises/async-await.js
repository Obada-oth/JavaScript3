// Exercise A
// function getData(url) {
//   fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
// }

// getData('https://randomfox.ca/floof/');

async function getDataAsync(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    appendImg(data);
  } catch (error) {
    console.error(error);
  }
}
function appendImg(data) {
  const img = document.createElement('img');
  img.src = data.image;
  document.body.appendChild(img);
}
getDataAsync('https://randomfox.cssa/floof/');

// Exercise B
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

// const makeAllCaps = array => {
//   return new Promise((resolve, reject) => {
//     let capsArray = array.map(word => {
//       if (typeof word === 'string') {
//         return word.toUpperCase();
//       } else {
//         reject('Error: Not all items in the array are strings!');
//       }
//     });
//     resolve(capsArray);
//   });
// };

// makeAllCaps(arrayOfWords)
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

async function makeAllCapsAsync(array) {
  try {
    let capsArray = await array.map(word => {
      if (typeof word === 'string') {
        return word.toUpperCase();
      } else {
        console.log('Error: Not all items in the array are strings!');
      }
    });
    console.log(capsArray);
  } catch (error) {
    console.log(error);
  }
}

makeAllCapsAsync(arrayOfWords);
