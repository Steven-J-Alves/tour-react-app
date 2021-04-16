import axios from 'axios';

// axios.create({ withCredentials: true, credentials: 'include' });

const api = axios.create({
  baseURL: 'http://localhost:3333/api/v1/',
});

export default api;
