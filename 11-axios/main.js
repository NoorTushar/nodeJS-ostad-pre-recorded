const axios = require("axios");

let url = "https://restcountries.com/v3.1/all";

axios
   .get(url)
   .then((res) => {
      let countryList = res.data;
      let status = res.status;
      console.log(countryList);
      console.log(status);
   })
   .catch((error) => {
      console.log(error);
   });
