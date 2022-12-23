import { CONSTANT } from "../../constants"


const initialState = {}

export const authReducer = (state = initialState, action) => {
    const { payload, type } = action
    switch (type) {
        case CONSTANT.USER_CREDENTIALS:
            return {
                ...state, ...payload
            }
        case CONSTANT.LOG_OUT:
            return {}
        default: return state
    }
}