import axios from 'axios';

// api mongodb para crud de usuarios
const api = axios.create({
    baseURL: 'http://localhost:4000'
});

export default api;