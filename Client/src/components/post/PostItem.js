import { useState } from "react";
import clsx from "clsx";
import styles from "./post.module.css";
import CommentList from "./comments/CommentList";
function PostItem() {
    const [showOperation, setShowOperation] = useState(false);
    const [showComment, setShowComment] = useState(false);
    const handleToggleOperation = () => {
        setShowOperation(!showOperation);
    };
    const handleToggleShowComment = () => {
        setShowComment(!showComment);
    };
    return (
        <div className={styles.postItem}>
            <div className={styles.postHeader}>
                <div className={clsx(styles.avatarUserPost, "avatar-sm")}>
                    <img
                        src="https://www.w3schools.com/w3images/avatar6.png"
                        alt=""
                    />
                </div>
                <div className={styles.dataUserPost}>
                    <a className={styles.userName} href="/">
                        Nguyen Vinh Tieng
                    </a>
                    <div className={styles.datePost}>12:02am</div>
                </div>
                <div
                    className={styles.operationPost}
                    onClick={() => handleToggleOperation()}
                >
                    <ion-icon name="ellipsis-vertical"></ion-icon>
                </div>
                {showOperation && (
                    <ul className={styles.dropdownMenuPost}>
                        <li className={styles.dropdownMenuItem}> Block</li>
                        <li className={styles.dropdownMenuItem}>
                            <a href="/">Details</a>
                        </li>
                        <li className={styles.dropdownMenuItem}>Copy link</li>
                    </ul>
                )}
            </div>
            <div className={styles.postContent}>
                <div className={styles.postText}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
                    doloribus temporibus culpa reiciendis cupiditate
                    necessitatibus?
                </div>
                <div className={styles.postMedia}>
                    <div classname={styles.postMediaItem}>
                        <img
                            src="https://www.w3schools.com/w3images/avatar6.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className={styles.postInteract}>
                <div className={styles.postLove}>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>
                <div
                    onClick={() => handleToggleShowComment()}
                    className={styles.postComment}
                >
                    <ion-icon name="chatbox-outline"></ion-icon>
                </div>
            </div>
            <form className={styles.formAddComment}>
                <ion-icon name="happy-outline"></ion-icon>
                <input
                    type="text"
                    className={styles.commentInput}
                    placeholder="Enter a comment..."
                />
                <button className={styles.commentButton}>post</button>
            </form>
            {showComment && <CommentList />}
        </div>
    );
}

export default PostItem;
