import axios from 'axios';

// axios.create({ withCredentials: true, credentials: 'include' });

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default api;
