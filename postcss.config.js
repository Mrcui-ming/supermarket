//打包的时候对 px做一次转换 （可以是rem，vw| 这里是：vw）
module.exports = {
  plugins:{
    //ipone 5
    'postcss-px-to-viewport': {
      viewportWidth: 375, //视窗的宽度，对应我们设计稿的宽度
      viewportWidth: 667, //视窗的高度，对应我们设计稿的高度
      unitPrecision: 5, //指定px转为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw',//指定需要转换为的视窗单位。建议vw
      selectorBlackList: ['tab-bar','tab-bar-item','recommend-item','imgbox'],//指定不需要转换的类:注意是类
      minPixelValue: 1,//小于或者等于1px不转换为视窗宽度
      mediaQuery: false,//不允许在媒体查询中转换px
       exclude:[/[NavBar TabContorl]/] //不需要转换的组件，必须以正则来写
    }
  }
}