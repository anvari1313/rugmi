import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = 'f97feace0d52421';
const BASE_URL = 'https://api.imgur.com';

export default {
    login() {
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token'
        };

        window.location = `${BASE_URL}/oauth2/authorize?${qs.stringify(querystring)}`
    },

    fetchIMages(token) {
        const config = {
            method: 'get',
            url: `${BASE_URL}/3/account/me/images`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        return axios(config);
    }
};