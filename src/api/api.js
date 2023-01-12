import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.ceacademy.world',
});

export default api;
