export function addToStorage(key, data) {
    console.log('adding to storage '+key+' - '+data);
    localStorage.setItem(key, JSON.stringify(data));
}

export function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function removeFromStorage(key) {
    localStorage.removeItem(key);
}