import axios from 'axios';
// import Toast from '../components/toast/function';
import store from '@/store';
import { getToken,removeToken,removeUserId} from './auth';
import host from './host'; 

const http = axios.create({
    // baseURL: host, // api 的 base_url
    baseURL: 'http://localhost:27017', // api 的 base_url
    timeout: 5000 // 请求超时时间
});

http.interceptors.request.use(
    config => {
        if (store.getters.token) { // 检测token
            config.headers['Authorization'] = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
        }
        return config;
    },
    error => {
        Promise.reject(error);
    }
);

http.interceptors.response.use(
    response => {
        let result = response.data;
        if (result.code === 0) {
            return Promise.reject(result);
        } else {
            return result;
        }
    },
    error => {
        return Promise.reject(error);
    }
);

export default http;
