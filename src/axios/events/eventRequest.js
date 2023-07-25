import axios from 'axios'
import { baseUrl } from '../baseUrl'
import { headers } from '../../headers'

export const createevent= async(userid,data)=>{
    return await axios.post(baseUrl(`${userid}/events`),data,headers)
}
export const getevent= async(userid)=>{
    return await axios.get(baseUrl(`${userid}/events`), headers)
}
export const deleteevent= async(userid,id)=>{
    return await axios.delete(baseUrl(`${userid}/events/${id}`),headers)
}