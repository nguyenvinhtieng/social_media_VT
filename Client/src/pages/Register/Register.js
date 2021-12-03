import React from "react";
import styles from "./register.module.css";
import { Link } from "react-router-dom";
function Register() {
    return (
        <div className={styles.Login}>
            <div className={styles.loginHeader}>VinhTieng</div>
            <form action="" className={styles.form}>
                <div className={styles.formGroup}>
                    <input type="text" placeholder="Username" />
                </div>
                <div className={styles.formGroup}>
                    <input type="password" placeholder="Password" />
                </div>
                <div className={styles.formGroup}>
                    <input type="password" placeholder="Confirm password" />
                </div>
                <div className={styles.formGroup}>
                    <input type="text" placeholder="Full name" />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.labelInputFile} htmlFor="avatar">
                        Choose avatar image
                    </label>
                    <input
                        className={styles.hiddenInput}
                        type="file"
                        id="avatar"
                    />
                </div>
                <div className={styles.formGroup}>
                    <button>Register</button>
                </div>
            </form>
            OR
            <div className={styles.redirect}>
                You have an account?
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
}

export default Register;
