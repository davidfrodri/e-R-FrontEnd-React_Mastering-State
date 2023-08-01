import axios from 'axios'

const BASE_URL = 'http://localhost:4000/'

const clientAxios = axios.create({
  baseURL: BASE_URL
})

export default clientAxios
