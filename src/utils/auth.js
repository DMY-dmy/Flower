import Cookies from 'js-cookie';
const TOKENKEY = "Authorization";
// const USERID = "x-station-id";
/**
 * 设置cookies
 */
export const setToken = (token,expires) => {
    const timeStamp = new Date(expires*1000);
    Cookies.set(TOKENKEY,token,{expires:timeStamp});
}

/**
 * 获取token
 */

export const getToken = () => {
    return Cookies.get(TOKENKEY);
}

/**
 * 删除token
 */
export const removeToken = () => {
    Cookies.remove(TOKENKEY);
}

/**
 * 设置id
 */
export const setUserId = (id,expires) => {
    const timeStamp = new Date(expires*1000);
    Cookies.set(USERID,id,{expires:timeStamp});
}

/**
 * 获取id
 */
export const getUserId = () => {
    return Cookies.get(USERID);
}
/**
 * 删除id
 */
export const removeUserId = () => {
    Cookies.remove(USERID);
}
