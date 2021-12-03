import styles from './post.module.css'
import PostItem from './PostItem'
import CreatePost from './CreatePost'

const PostList = ({ page }) => {
    return (
        <>
            <div className={styles.Postlist}>
                {page && <CreatePost />}
                <PostItem />
                <PostItem />
            </div>
        </>

    )
}

export default PostList