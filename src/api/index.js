import axios from "axios";

const url= 'http://localhost:3000'

//获取轮播图
export function getBanner(type = 1) {
  return axios.get(`${url}/banner?type=${type}`);
}
//获取推荐歌单
export function getPlayList(limit = 10) {
  return axios.get(`${url}/personalized?limit=${limit}`);
}
//获取推荐歌单
export function getPlayListDetail(id) {
  return axios.get(`${url}/playlist/detail?id=${id}`);
}
