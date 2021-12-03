import { useState } from 'react'
import styles from './comment.module.css'

function CommentItem() {
    const [showOperation, setShowOperation] = useState(false)
    const handleToggleOperation = () => {
        setShowOperation(!showOperation)
    }
    return (
        <li className={styles.commentItem}>
            <div className="avatar-sm">
                <img
                    src="https://www.w3schools.com/w3images/avatar6.png"
                    alt=""
                />
            </div>
            <div className={styles.commentContent}>
                <a href="/" className={styles.commentUser}>
                    Vinh Tieng
                </a>
                <div className={styles.commentText}>
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                </div>
                <div className={styles.commentTime}> 09:30am</div>
            </div>
            <div className={styles.commentOperations}>
                <ion-icon onClick={() => handleToggleOperation()} name="ellipsis-horizontal"></ion-icon>
                {showOperation && (
                    <ul className={styles.commentoperationMenu}>
                        <li className={styles.commentoperationMenuItem}>
                            Delete
                        </li>
                        <li className={styles.commentoperationMenuItem}>
                            Edit
                        </li>
                    </ul>
                )}
            </div>
        </li>
    )
}

export default CommentItem
