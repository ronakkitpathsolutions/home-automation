import api from './index'

export const getAdminCredentials = async(payload) => {
    const response = await api.post('/login', payload)
    return response
}

export const createUser = async(payload) => {
    const response = await api.post('/register/user', payload)
    return response     
}

