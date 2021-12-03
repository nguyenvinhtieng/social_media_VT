// import Loading from '../../components/alert/Loading/Loading'
import PostList from '../../components/post/PostList'
import Notification from '../../components/notification/Notification'
import styles from './homepage.module.css'
import Header from '../../components/header/Header'
function HomePage() {
    return (
        <>
            <Header />
            <div className={styles.mainContainer}>
                <PostList page={"Home"} />
                <Notification />
            </div>
        </>
    )
}
export default HomePage
