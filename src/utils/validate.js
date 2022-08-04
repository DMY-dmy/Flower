
/**
 * 检测手机号是否合法的方法
 * @param value
 * @returns {boolean}
 */
export const validateMobile = (value) => {
    return /^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(value);
};

/**
 * 检测邮箱是否合法
 * @param  {[string]} value [邮箱]
 * @return {[boolean]} 
 */
export const validateEmail = (value) => {
    return /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(value);
}

/**
 * 检测url是否合法
 * @param value
 * @returns {boolean}
 */
export const validateUrl = (value) => {
    return /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(value);
}
