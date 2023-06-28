import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_DEVELOPMENT
    ? process.env.REACT_APP_BACKEND_DEVELOPMENT_URL
    : process.env.REACT_APP_BACKEND_PRODUCTION_URL,
});

export default client;
