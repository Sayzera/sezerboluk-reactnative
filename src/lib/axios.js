import axios from 'axios';
import { config } from '../utils/config';

const instance = axios.create({
  baseURL: 'https://upayments-studycase-api.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + config.token,
  },
});

export default instance;
