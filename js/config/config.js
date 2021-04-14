import axios from 'axios';
const API_URL = 'https://5f871d4b49ccbb0016176fe1.mockapi.io/ai';

function callAPI(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body
    }).catch( err => {
        console.log(err);
    });
};