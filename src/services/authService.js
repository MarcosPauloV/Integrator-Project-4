import api from '../api/api'
import axios from 'axios';

const register = (username, lastname, cpf, pnumber, email, password, password2) => {
    return api.post('api/user/create-account',{
        username,
        lastname,
        cpf,
        pnumber,
        email,
        password,
        password2
    });
};

const login = async(email, password) => {
    return axios.post('https://diogo1.herokuapp.com/api/auth/login', {
        email,
        password,
    }).then((response) => {
        console.log(response)
        if(response){
            localStorage.setItem("user", JSON.stringify(response.data));
        };
        return response.data;
    }).catch((err) => {
        console.log(err);
    })
};

const logout = ( ) => {
    localStorage.removeItem("user");
};

export default {
    register,
    login,
    logout
}


