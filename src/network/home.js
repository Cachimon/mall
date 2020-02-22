import {request} from './request'

export function getHomeMultidata(){
  return request({url: '/mogujie/banner.json'})
}
export function getGoods(type){
  return request({url: '/mogujie/'+type+'.json'})
}