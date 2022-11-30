import axios from "axios";

const api = axios.create({
    baseURL: 'https://diogo1.herokuapp.com/'
});

export default api;
