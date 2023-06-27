import axios from 'axios';

const {
  env: {
    development,
    REACT_APP_BACKEND_DEVELOPMENT_URL,
    REACT_APP_BACKEND_PRODUCTION_URL,
  },
} = process;
const client = axios.create({
  baseURL: development
    ? REACT_APP_BACKEND_DEVELOPMENT_URL
    : REACT_APP_BACKEND_PRODUCTION_URL,
});

export default client;
