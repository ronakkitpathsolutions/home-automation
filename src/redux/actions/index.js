import { CONSTANT } from "../../constants"

export const setLogOutUser = (payload = {}) => {
    return {
        type: CONSTANT.LOG_OUT,
        payload
    }
}

export const setLoggedUser = (payload) => {
    return {
        type: CONSTANT.USER_CREDENTIALS,
        payload
    }
}