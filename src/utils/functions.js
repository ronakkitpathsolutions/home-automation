import jwt_decode from 'jwt-decode'
import { clearLocalStorage } from './localStorage';
import { store } from '../redux';
import { setLogOutUser } from '../redux/actions';

export const retry = (fetchComponent, retriesLeft = 5, interval = 1000) => {
    return new Promise((resolve, reject) => {
        fetchComponent()
            .then(resolve)
            .catch((error) => {
                setTimeout(() => {
                    if (retriesLeft === 1) {
                        reject(error);
                        return;
                    }
                    retry(fetchComponent, retriesLeft - 1, interval).then(resolve, reject);
                }, interval);
            });
    });
};

export const isFunction = (fn) => {
    if (typeof fn === 'function') {
        return true;
    }
    return false;
};

export const decodeToken = (token) => {
    if (!token) return null
    return jwt_decode(token);
}

export const isTokenActivated = (token) => {
    if (!token) return false
    const decoded = jwt_decode(token)
    return (decoded?.exp > Date.now() / 1000)
}

export const handleLogout = () => {
    clearLocalStorage()
    store.dispatch(setLogOutUser({}))
}