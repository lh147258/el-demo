import api from './apiBase'
export const getFoodsType =() =>{
   return api.doGet('v2/index_entry')
}
