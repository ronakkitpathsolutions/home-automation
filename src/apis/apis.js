import api from './index'

export const getAdminCredentials = async(payload) => {
    const response = await api.post('/login', payload)
    return response
}