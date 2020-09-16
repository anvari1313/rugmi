import qs from 'qs';

const CLIENT_ID = 'f97feace0d52421';
const BASE_URL = 'https://api.imgur.com';

export default {
    login() {
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token'
        };

        window.location = `${BASE_URL}/oauth2/authorize?${qs.stringify(querystring)}`
    }
};