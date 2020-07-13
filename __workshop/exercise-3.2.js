// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config();

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address
  }

  return opencage
    .geocode(requestObj)
    .then(response => response.results[0].geometry)
    .catch(error => {
      console.log('error', error.message);
    });
};

getPositionFromAddress(
  '1600 Amphitheatre Parkway Mountain View, CA 94043 United States'
).then((response) => console.log(response));
