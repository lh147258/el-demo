import api from './apiBase'
// https://elm.cangdu.org/v1/pois?city_id=1&keyword=迪士尼&type=search
export const getSearchData =(id,name) =>{
  return api.doGet('/v1/pois?city_id='+id+'&keyword='+ name +'&type=search')
}
