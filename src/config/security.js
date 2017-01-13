import {getFromStorage} from '../app/services/storage';
import jwtDecode from 'jwt-decode';

export const USE_MOCK = false;
export const TOKEN_KEY = 'JWT_TOKEN';

export function isUserStoredLocaly() {
    const token = getFromStorage(TOKEN_KEY);
    if (token && '' !== token) {
        try {
            const decoded = jwtDecode(token);
            const time = new Date().getTime();
            if (decoded.exp * 1000 < time) {
                return false;
            }
            return token;
        } catch (e) {
            return false;
        }
    }
    return false;
}