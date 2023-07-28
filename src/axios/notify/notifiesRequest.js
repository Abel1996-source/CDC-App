import axios from 'axios'
import { baseUrl } from '../baseUrl'
import { headers } from '../../headers'

export const createnotifies= async(data,userid)=>{
    return await axios.post(baseUrl(`${userid}/notifies`),data,headers)
}
export const getnotifies= async(userid)=>{
    return await axios.get(baseUrl(`${userid}/notifies`),headers)
}