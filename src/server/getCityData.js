import api from './apiBase'

/**
 * guess：定位城市， hot：热门城市， group：所有城市
 * @param type
 * @returns {*}
 */
let cityGroupUrl = '/v1/cities'
export const getCityData = (type='guess') => {
  // return api.doGet('/v1/cities?type='+ type)
   return api.doGet(cityGroupUrl+'?type='+type)
}
/**
 *
 * @param id 城市ID
 * @returns {*} 得到城市详细信息
 */
export const getCityInfo = (id) => {
  return api.doGet('/v1/cities/' + id)
}

