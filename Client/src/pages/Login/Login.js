import { useState } from 'react'
import styles from "./login.module.css";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { userLogin } from '../../store/actions/authAction'
function Login(props) {
    const [user, setUser] = useState({ username: '', password: '' })
    const { username, password } = user
    const handleChangeUser = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === '') return
        if (password === '') return
        props.userLogin(user)
    }
    return (
        <div className={styles.Login}>
            <div className={styles.loginHeader}>VinhTieng</div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        name="username"
                        onChange={(e) => { handleChangeUser(e) }}
                    />
                </div>
                <div className={styles.formGroup}>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => { handleChangeUser(e) }}
                    />
                </div>
                <div className={styles.formGroup}>
                    <button type="submit">Login</button>
                </div>
            </form >
            OR
            < div className={styles.redirect} >
                You don't have an account?
                <Link to="/register" > Register</Link >
            </div >
        </div >
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (user) => { dispatch(userLogin(user)) },
    }
}
export default connect(null, mapDispatchToProps)(Login);
