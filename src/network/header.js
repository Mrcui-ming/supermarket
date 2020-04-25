import {request,requestone} from './requset';
export function getHomeMultidata(){
 return request({
  url: '/home/multidata'
 })
}
export function getHomeGoods(type,page) {
  return requestone({
   url: 'home/data',
   params:{
     type,
     page
   }
  })
}