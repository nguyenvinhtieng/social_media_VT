import { SERVER_URL, TOKEN_NAME } from '../../credentials'
import axios from 'axios'
export const userLogin = (user) => {
    return (dispatch, getState) => {
        axios.post(`${SERVER_URL}/login`, user)
            .then(res => res.data)
            .then(data => {
                if (data.success) {
                    localStorage.setItem(TOKEN_NAME, data.token);
                    dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data.user })
                } else {
                    dispatch({ type: 'USER_LOGIN_FAIL', payload: user })
                }
            })
            .catch(err => dispatch({ type: 'USER_LOGIN_ERROR', payload: err }))
    }
}