import axios from 'axios'
import { getDataFromLocalStorage } from '../utils/localStorage';
import { handleLogout } from '../utils/functions';

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_SERVER_URL}`
})

instance.interceptors.request.use(
    async (config) => {
        const token = getDataFromLocalStorage("token")
        config.headers.Accept = "application/json";
        config.headers['token'] = token;
        config.headers["Content-Type"] = "application/json";
        return config
    },
    error => Promise.reject(error)
)

instance.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (
            [401, 402, 403].includes(error.response.status)
        ) {
            handleLogout()
        }
        return Promise.reject(error)
    }
)

export default instance
