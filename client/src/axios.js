import Axios from 'axios';

export const axios = Axios.create({ 
    baseURL: 'https://stark-escarpment-53173.herokuapp.com',
});