import {
  ADD_COUNTER,
  ADD_TOCART
} from './mutations_types';
export default {
  addCart(context,payload){
    //返回一个添加成功与否的状态
    return new Promise((resolve,reject) => {
      let oldLoad = null;
      let oldcount = payload.count;
      for(let item of context.state.carList){
        if(item.iid === payload.iid && item.style == payload.style && item.size == payload.size){
          oldLoad = item;
        }
      }
      if(oldLoad){
        context.commit(ADD_COUNTER,{oldLoad,oldcount});
        resolve('商品数量+1');
      }else{
        context.commit(ADD_TOCART,payload);
        resolve('商品+1');
      }
    })
  }
}