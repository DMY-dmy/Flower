import Vue from 'vue';
import Vuex from 'vuex';
import views from './views';
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        accessToken:null
    },
    getters:{
        // accessToken:state => state.accessToken
    },
    modules: {   
        views,    
    },

});
export default store;
