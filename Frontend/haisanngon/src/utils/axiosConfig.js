import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8082/haisanngon/';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
