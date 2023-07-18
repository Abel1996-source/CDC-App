import axios from 'axios'
import { baseUrl } from '../baseUrl'
import { headers } from '../../headers'

export const createprojet= async(data,userId)=>{
    return await axios.post(baseUrl(`${userId}/projets`),data,headers)
}