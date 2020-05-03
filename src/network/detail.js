import {requestone, request} from './requset';
export function getDetail(iid) {
  return requestone({
   url: '/detail',
   params:{
     iid
   }
  })
}

export function getRecommend(){
  return requestone({
    url: '/recommend'
  })
}
//公司给的数据很负责，先把请求的数据做一次整合。然后页面面象这个对象取值/编程
export class Goods{
  constructor(itemInfo,columns,services){
    this.desc = itemInfo.desc;
    this.title = itemInfo.title;
    this.nowprice = itemInfo.price;
    this.oldprice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.nowprice = itemInfo.highNowPrice;
  }
}

//商品数据
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

//商品尺码/样式详情数据
export class GoodsParam{
  constructor(info,rule){
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

//获取库存/尺码数据
export class Stock{
  constructor(skuInfo,itemInfo){
    this.styleinfo = skuInfo.props[0].list;
    this.sizeinfo = skuInfo.props[1].list;
    this.stock = skuInfo.skus[0].stock;
    this.price = itemInfo.lowNowPrice;
  }
}