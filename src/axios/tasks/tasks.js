import axios from 'axios'
import { baseUrl } from '../baseUrl'
import { headers } from '../../headers'

export const createtask= async(data,id)=>{
    return await axios.post(baseUrl(`${id}/tasks`),data,headers)
}

export const chargementdestasks= async()=>{
    return await axios.get(baseUrl(`tasks`),headers)
}
export const updatetasks= async(data,projetid,id)=>{
    return await axios.put(baseUrl(`${projetid}/tasks/${id}`),data,headers)
}
export const deletetask= async(projetid,id)=>{
    return await axios.delete(baseUrl(`${projetid}/tasks/${id}`),headers)
}

export const getprojets= async(userId)=>{
    return await axios.get(baseUrl(`${userId}/projets`),headers)
}