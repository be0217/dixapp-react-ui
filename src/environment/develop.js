const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:8000/api'
});

const socketIO = {
  response: false,
  endpoint: 'http://localhost:8000'
};


export default {
  axios: instance,
  socketIO: socketIO
};
