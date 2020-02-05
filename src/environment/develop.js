const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:8000/api'
});

const socketIO = {
  endpoint: 'http://localhost:8000/dixio'
};


export default {
  axios: instance,
  socketIO: socketIO
};
