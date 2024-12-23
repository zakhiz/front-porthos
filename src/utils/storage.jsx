export const getFromLocalStorage = (key, defaultValue = null) => {
    const storageValue = localStorage.getItem(key);
    return storageValue ? JSON.parse(storageValue) : defaultValue
}
export const getTokenLocalStorage = (key, defaultValue = null) => {
    const storageValue = localStorage.getItem(key);
    return storageValue ? storageValue : defaultValue
}
export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};
 
export const saveTokenToLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
};
    

export const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
  };