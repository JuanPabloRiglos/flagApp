import axios from "axios";

export const Api = axios.create({
    baseURL:'https://restcountries.com/v3.1'
})

