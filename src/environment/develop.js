const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:8000/api'
});


export default {
  axios: instance
};
