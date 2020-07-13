// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config();

const getAddressFromPosition = (lat, lng) => {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: lat, lng
  };

  return opencage
    .geocode(requestObj)
    .then(response => response.results[0].formatted)
    .catch(error => {
      console.log('error', error.message);
    });
}

getAddressFromPosition('48.8584', '2.2945').then((response) =>
  console.log(response)
);