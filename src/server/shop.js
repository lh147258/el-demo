import api from './apiBase'

/**得到商铺列表
 * latitude 经度
 *longitude 维度https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762
 */
export const getShopList = (latitude, longitude) => {
  return api.doGet('/shopping/restaurants?latitude=' + latitude + '&longitude=' + longitude)
}
