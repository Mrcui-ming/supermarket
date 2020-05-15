import {requestone} from './requset';
export function getCategory(){
  return requestone({
    url:'/category'
  })
}
export function getSubcategory(maitKey) {
  return requestone({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return requestone({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}