import http from './http';
import qs from 'qs';
export const handleGet = (url, params) => {
    return new Promise((resolve, reject) => {
        http({
            url: url,
            params: params,
            method: 'get'
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
};

export const handlePost = (url, params) => { 
    return new Promise((resolve, reject) => {
        http({
            url: url,
            data: qs.stringify(params),
            method: 'post'
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
};

export const handleDelete = (url,params) => {
    return new Promise((resolve,reject) => {
        http({
            url: url,
            data: qs.stringify(params),
            method: 'delete'
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    })
}
