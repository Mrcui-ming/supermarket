import {
  ADD_COUNTER,
  ADD_TOCART
} from './mutations_types';
export default {
  //判断商品和购物车已存的商品是不是同一类。如果是：count+ 不是：购物车新增商品。
  //mutations里面一个方法最好只记录一个功能 。 mutations对象最终就是为了修改state的值的。
  [ADD_COUNTER](state,payload){
    payload.oldLoad.count += payload.oldcount;
  },
  [ADD_TOCART](state,payload){
    payload.checked = true;
    state.carList.push(payload);
  }
}