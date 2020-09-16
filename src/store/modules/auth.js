import api from '../../api/imgur';
import qs from 'qs';

const state = {
    token: window.localStorage.getItem('imgur_access_token')
};

const getters = {
    isLoggedIn: state => !!state.token
};

const actions = {
    login: () => {
        api.login();
    },
    finalizeLogin: ({commit}, hash) => {
        const query = qs.parse(hash.replace('#', ''));
        const accessToken = query['access_token']

        commit('setToken', accessToken);
        window.localStorage.setItem('imgur_access_token', accessToken);
    },
    logout: ({commit}) => {
        commit('setToken', null);
        window.localStorage.setItem('imgur_access_token', null);
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};