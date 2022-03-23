import axios from 'axios'

export const Axios = axios.create({
    baseURL: 'viacep.com.br/ws'
})