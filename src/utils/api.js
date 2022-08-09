import axios from 'axios'

export const baseUrl = "http://localhost:81";



export default axios.create({
    baseURL: `${baseUrl}/api`
})