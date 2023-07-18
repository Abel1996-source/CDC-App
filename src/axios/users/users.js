import axios from 'axios'
import { baseUrl } from '../baseUrl'
import { headers } from '../../headers'

export const signin = async (values) => {
    return await axios.post(baseUrl("login"), values)
}
export const register = async (values) => {
    return await axios.post(baseUrl("users"), values)
}
export const recherhceUtilisateur=async(seek)=>{
    return await axios.get(baseUrl(`users/?name=${seek}`),headers)
}
export const getalluser=async()=>{
    return await axios.get(baseUrl("users"),headers)
}
export const deleteduser=async(id)=>{
    return await axios.delete(baseUrl(`users/${id}`),headers)
}