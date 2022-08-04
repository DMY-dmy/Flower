/**
 *
 * 这里写的都是一些通用的工具方法
 */
 export const createError = (code, msg) => {
    const err = new Error(msg);
    err.stu = code;
    return err;
};

/**
 * 检测变量类型
 * @type {{[p: string]: *}}
 */
export const isType = {
    ...(function () {
        let types = {};
        const t = ['Array', 'String', 'Number', 'Undefined', 'Symbol', 'Null', 'Boolean'];
        return (function () {
            for (let i = 0; i < t.length; i++) {
                (function (type) {
                    types['is' + type] = function (obj) {
                        return Object.prototype.toString.call(obj) === '[object ' + type + ']';
                    };
                })(t[i]);
            }
            return types;
        })();
    })()
};

/**
 * 格式化时间戳的方法，将时间戳按月份来分
 * @param data 传入的数组
 * @param time 比较的字段
 * @param stamp 返回的时间戳的字段
 * @param stampData 返回的时间戳的数据
 * @returns {Array}
 */
export const formatData = (data,time = "add_time",stamp = "timeStamp",stampData="timeNews") => {
    let arr = [];
    data.forEach(function(item, i){
        let tmpObj;
        let tmpDate = formatTime(item[time],'{y} 年{m} 月');
        if(i === 0){
            tmpObj = {};
            tmpObj[stamp] = tmpDate;
            tmpObj[stampData] = [];
            tmpObj[stampData].push(item);
            arr.push(tmpObj);
        }else{
            if(arr[arr.length-1][stamp] === (tmpDate)){
                arr[arr.length-1][stampData].push(item);
            }else{
                tmpObj = {};
                tmpObj[stamp] = tmpDate;
                tmpObj[stampData] = [];
                tmpObj[stampData].push(item);
                arr.push(tmpObj);
            }
        }

    });
    return arr;
};
/**
 * 判断节点是否在视口，返回bool值
 * @param el  dom对象
 * @returns {boolean}
 */
export const isElementInViewport = (el) => {
    const {top, height, left, width} = el.getBoundingClientRect();
    const w = window.innerWidth || document.documentElement.clientWidth;
    const h = window.innerHeight || document.documentElement.clientHeight;
    return (
        top <= h &&
        (top + height) >= 0 &&
        left <= w &&
        (left + width) >= 0
    )
};

/**
 * 格式化时间函数
 */

export function parseTime(time, format = '{y}-{m}-{d} {h}:{i}:{s}') {
    if (arguments.length === 0) {
        return null;
    }
    let date;
    if (typeof time === 'object') {
        date = time;
    } else {
        if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
            time = parseInt(time);
        }
        if ((typeof time === 'number') && (time.toString().length === 10)) {
            time = time * 1000;
        }
        date = new Date(time);
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key];
        if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] };
        if (result.length > 0 && value < 10) {
            value = '0' + value;
        }
        return value || 0;
    })
    return time_str;
}

export function formatTime(time, option) {
    time = +time * 1000
    const d = new Date(time)
    const now = Date.now()

    const diff = (now - d) / 1000

    if (diff < 30) {
        return '刚刚'
    } else if (diff < 3600) {
    // less 1 hour
        return Math.ceil(diff / 60) + '分钟前'
    } else if (diff < 3600 * 24) {
        return Math.ceil(diff / 3600) + '小时前'
    } else if (diff < 3600 * 24 * 2) {
        return '1天前'
    }
    if (option) {
        return parseTime(time, option)
    } else {
        return (
            d.getFullYear()+'年'+
           ( d.getMonth() + 1) +
            '月' +
            d.getDate() +
            '日'
        )
    }
}


/**
 * 用户年龄对应字段
 */
export const ageList = [
     {label:'00 后',value:0},
     {label:'90 后',value:1},
     {label:'80 后',value:2},
     {label:'70 后',value:3},
     {label:'60 后',value:4},
     {label:'50 后',value:5}
 ]

 /**
  * 擅长类目
  */
 export const taskGoodAt = [
     {label:'保密',value:-1},
     {label:'台式电脑',value:0},
     {label:'平板电脑',value:1},
     {label:'笔记本电脑',value:2},
     {label:'一体机',value:3},
     {label:'电竞级产品',value:4},
     {label:'极客产品',value:5},
     {label:'数码产品',value:6},
     {label:'智能家居',value:7},
     {label:'机器人',value:8},
     {label:'虚拟现实VR',value:9},
     {label:'ARM架构',value:10},
     {label:'X86架构',value:11},
     {label:'数码周边',value:12},
     {label:'外观设计',value:13},
     {label:'制定规格',value:14},
     {label:'上层应用开发',value:15},
     {label:'什么都不懂',value:16},
     {label:'什么都懂点',value:17}
 ]
/**
 * 格式化数字
 */

export function formatNum(value){
    if(typeof value !== 'number'){
        return 0;
    }
    if(value < 10000){
        return value;
    }else {
        let s = (value / 10000).toFixed(1);
        return s+"w";
    }
}

export const fileToBase64 = (file) => {
    return new Promise((resolve) => {
        const reader = new window.FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            resolve(reader.result);
        };
    })
}

export const imageSizeFormat = (base64) => {
    return new Promise((resolve) => {
        const image = new Image();
        image.src = base64;
        image.onload = function () {
            resolve({
                width: image.naturalWidth,
                height: image.naturalHeight
            })
        }
    })
}

export function uniqueNo() {
    return (S4()+S4()+S4()+S4()+S4()+S4()+S4()+S4());
}

function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}

/**
 * 判断是手机端还是PC端
 * [description]
 * @return {[type]} [description]
 */
export const _isMobile = () => {
  var flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  return flag;
}
