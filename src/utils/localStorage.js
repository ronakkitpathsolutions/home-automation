export const getDataFromLocalStorage = key => localStorage.getItem(key)
export const storeDataFromLocalStorage = (key, data) => localStorage.setItem(key, data)
export const removeDataFromLocalStorage = key => localStorage.removeItem(key)
export const clearLocalStorage = () => localStorage.clear()