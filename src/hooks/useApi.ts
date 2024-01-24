import { Api } from "../service/api";
// import {country} from '../types'

export function UseApi(){
    const getCountries = async() =>{
        const res = await Api.get('/all')
        return res.data
    }
    return getCountries
}