import axios from 'axios'
import { baseUrl } from '../baseUrl'
import { headers } from '../../headers'

export const createprojet= async(data,userId)=>{
    return await axios.post(baseUrl(`${userId}/projets`),data,headers)
}
export const getprojets= async(userId)=>{
    return await axios.get(baseUrl(`${userId}/projets`),headers)
}
export const actiondeleteprojet= async(userId,id)=>{
    return await axios.delete(baseUrl(`${userId}/projets/${id}`),headers)
}
export const miseajourdeprojet= async(userId,id,data)=>{
    return await axios.put(baseUrl(`${userId}/projets/${id}`),data,headers)
}
