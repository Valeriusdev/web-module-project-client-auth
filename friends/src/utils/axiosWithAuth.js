import axios from 'axios';

export const axiosWithAuth = () => {
    // get token
    const token = window.localStorage.getItem('token');
    //create new instance 
    return axios.create({
        headers: {
            authorization: token
        },
    //set base url 
        baseURL: 'http://localhost:5000'
    });
};