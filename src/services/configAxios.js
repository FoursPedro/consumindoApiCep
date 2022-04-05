import axios from 'axios'

export const Axios = axios.create({
    baseURL: 'https://viacep.com.br/ws'
})