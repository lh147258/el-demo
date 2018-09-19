const saveShopaddress =(state,data) =>{
    state.Shopaddress.latitude = data.latitude
    state.Shopaddress.longitude = data.longitude
}
export default {
  saveShopaddress
}
