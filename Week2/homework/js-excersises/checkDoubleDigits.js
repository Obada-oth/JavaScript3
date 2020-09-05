function checkDoubleDigits(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num >= 10) {
        resolve('The number is a double digits number!');
      } else {
        reject('Error! The number is a single digit number..');
      }
    }, 2000);
  });
}
const doubleDigits = resolveVal => console.log(resolveVal);
const singleDigit = rejectReason => console.log(rejectReason);
checkDoubleDigits(9)
  .then(doubleDigits)
  .catch(singleDigit);
