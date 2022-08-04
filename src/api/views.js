import {handleGet,handlePost} from '@/utils/http-model';
import host from '@/utils/host';
/**
 * 获取banner图数据
 */
export const getAllData = () => {
    return handleGet("/")
}