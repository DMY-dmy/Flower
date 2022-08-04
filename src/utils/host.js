const isTest = require("../../config/build.model");
const BASE_URL = process.env.NODE_ENV === 'development' ? '/api' : '/api';
const WWW = isTest ? 'https://localhost:3000':'https://localhost:3000'; //表示是测试环境 

export default BASE_URL;
export {
    WWW
}
