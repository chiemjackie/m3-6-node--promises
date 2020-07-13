// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
  return new Promise((resolve, reject) => {
    array.every(i => typeof i === 'string')
      ? resolve(array.map(x => { return x.toUpperCase() }))
      : reject('Error');
  });
};

const sortWords = (array) => {
  return new Promise((resolve, reject) => {
    resolve(array.sort());
  })
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
