export function addToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function removeFromStorage(key) {
    localStorage.removeItem(key);
}