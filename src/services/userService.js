import api from '../api/api';
import authHeader from './authHeader';

const getPublic = () => {
    return api.get("all",)
};

const getUserBoard = () => {
    return api.get("user", {
        headers: authHeader(),
    });
};

export default {
    getPublic,
    getUserBoard
}