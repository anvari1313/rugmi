import api from '../../api/imgur';
import qs from 'qs';
import { router } from '@/main';

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

        router.push('/');
    },
    logout: ({commit}) => {
        commit('setToken', null);
        window.localStorage.removeItem('imgur_access_token');
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