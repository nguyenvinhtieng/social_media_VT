import axios from 'axios'
import { SERVER_URL, TOKEN_NAME } from '../credentials'
import setAuth from './setAuth'
async function checkAuthentication() {
    const token = localStorage.getItem(TOKEN_NAME)
    setAuth(token)
    axios.get(`${SERVER_URL}`)
        .then(res => res.data)
        .then(data => {
            if (data.success) return true
            return false
        })
        .catch(error => {
            console.error(error)
            return false;
        })

}
export default checkAuthentication