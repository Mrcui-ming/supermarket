import axios from 'axios'
export function request(config){
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    url: '/home/multidata',
    timeout: 5000
  });

  //拦截器
  instance.interceptors.request.use(config => {
    return config;
  },err => {
  });

  instance.interceptors.response.use(res => {
    return res.data;
  },err => {
    console.log(err);
  })
  //发送请求的地方
  //返回出去:相当于在发送请求的地方执行了instance({url:''...})
  return instance(config);
}
export function requestone(config){
  const instanceone = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/n3',
    timeout: 5000
  });
  return instanceone(config);
}