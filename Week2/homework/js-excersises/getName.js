const getAnonName = firstName => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!firstName) {
        reject("You didn't pass in a first name!");
      } else {
        resolve(`${firstName} Doe`);
      }
    }, 2000);
  });
};

const displayFullName = resolveVal => {
  console.log(resolveVal);
};
const throwError = rejectReason => {
  console.log(rejectReason);
};
getAnonName('Obi')
  .then(displayFullName)
  .catch(throwError);
