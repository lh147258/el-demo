import axios from 'axios'

let api = axios.create({
  baseURL: 'http://cangdu.org:8001',
  withCredentials: true
})
api.doPost = function (url, data) {
  return api.post(url, data).then(res => res.data)
}
api.doGet = function (url) {
  return api.get(url).then(res => res.data)
}
export default api
