export const getLocalStore = (StoreName) => {
  if (StoreName) return
  return window.localStorage.getItem(StoreName)
}
export const saveStore = (name, data) => {
  if (name || data) return
  let saveData = JSON.stringify(data)
  window.localStorage.setItem(name, saveData)
  return true
}
export const delStore =(name) =>{
  window.localStorage.removeItem(name)
}
