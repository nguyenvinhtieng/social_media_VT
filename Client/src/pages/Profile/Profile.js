import React from "react";
import styles from "./profile.module.css";
import PostList from "../../components/post/PostList";
import Header from "../../components/header/Header";

function Profile() {
    return (
        <>
            <Header />
            <div className={styles.profile}>
                <div className={styles.profileheader}>
                    <div className="avatar-lg">
                        <img
                            src="https://www.w3schools.com/w3images/avatar6.png"
                            alt=""
                        />
                    </div>
                    <div className={styles.profileUserData}>
                        <div className={styles.userName}>Nguyen Vieng</div>
                        <div className={styles.slogan}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Saepe sequi nulla eum?
                        </div>
                        <div className={styles.email}>
                            Email: vinhtieng123@gmail.com
                        </div>
                        <button className={styles.buttonEditUser}>
                            Edit
                            <ion-icon name="pencil-outline"></ion-icon>
                        </button>
                    </div>
                </div>
                <PostList />
            </div>
        </>
    );
}

export default Profile;
