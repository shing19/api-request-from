const axios = require('axios');
require('dotenv').config();


const proxyConfig = {
  host: process.env.PROXY_HOST,
  port: process.env.PROXY_PORT,
};

const axiosInstance = axios.create({
  proxy: {
    host: proxyConfig.host,
    port: proxyConfig.port,
  }
});

const apiRequestConfig = {
    method: 'GET',
    url: 'http://api.ipstack.com/check',
    params: {
      access_key: process.env.API_KEY
    }
  };

axios(apiRequestConfig)
.then(response => {
    const { data } = response;
    console.log(`IP address: ${data.ip}`);
    console.log(`Country: ${data.country_name}`);
    console.log(`City: ${data.city}`);
})
.catch(error => {
    console.error(error);
});