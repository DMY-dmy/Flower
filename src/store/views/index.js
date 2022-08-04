import {
    getAllData,
} from '../../api/views.js';

export default {
    state: {
        disappear:false
    },
    mutations:{
       
    },
    actions: {
        // banner图
        getAllData(store){
            return getAllData();
        },
    }
};
