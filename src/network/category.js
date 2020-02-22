import {request} from './request'


export function getCateData(type){
  return request({url: '/mogujie/categories_data/'+type+'_cate.json'})
}