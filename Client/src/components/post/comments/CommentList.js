import styles from './comment.module.css'
import CommentItem from './CommentItem'

function CommentList() {
    return (
        <ul classname={styles.commentList}>
            <CommentItem />
            <CommentItem />
            <CommentItem />
        </ul>
    )
}
export default CommentList
