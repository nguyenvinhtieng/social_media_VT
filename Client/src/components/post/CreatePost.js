import { useState } from "react";
import styles from "./post.module.css";
import clsx from "clsx";
import Layer from "../layer/Layer";
const CreatePost = () => {
    const [toggleYoutubeLink, setToggleYoutubeLink] = useState(false);
    const [toggleModal, setToggleModal] = useState(false);
    const handleToggleModal = () => {
        setToggleModal(!toggleModal);
    };
    return (
        <div className={styles.createPost}>
            <div className="avatar-sm">
                <img
                    src="https://www.w3schools.com/w3images/avatar6.png"
                    alt=""
                />
            </div>
            <div
                className={styles.createPostInput}
                onClick={() => handleToggleModal()}
            >
                Hey Tieng! What do you think!...
            </div>
            {toggleModal && (
                <>
                    <Layer handleToggleModal={handleToggleModal} />
                    <form className={styles.modalCreatePost}>
                        <h2 className={styles.modalHeader}>
                            Create a new post
                        </h2>
                        <div
                            className={styles.closeModal}
                            onClick={() => handleToggleModal()}
                        >
                            <ion-icon name="close"></ion-icon>
                        </div>
                        <div className={styles.modalContent}>
                            <textarea
                                name=""
                                placeholder="Hey Tieng! What do you think"
                            ></textarea>
                            {toggleYoutubeLink && (
                                <input
                                    type="text"
                                    placeholder="Youtube link"
                                    className={styles.attachYoutubeLink}
                                />
                            )}
                            <div className={styles.attach}>
                                <div
                                    className={clsx(
                                        styles.attachImages,
                                        styles.attachMedia
                                    )}
                                >
                                    <label htmlFor="postImgs">
                                        <ion-icon name="images"></ion-icon>
                                    </label>
                                    <input
                                        type="file"
                                        name="myImage"
                                        id="postImgs"
                                        accept="image/png, image/gif, image/jpeg"
                                        multiple
                                    />
                                    <div className={styles.popup}>
                                        Attach images
                                    </div>
                                </div>
                                <div
                                    className={clsx(
                                        styles.attachYoutube,
                                        styles.attachMedia
                                    )}
                                    onClick={() =>
                                        setToggleYoutubeLink(!toggleYoutubeLink)
                                    }
                                >
                                    <ion-icon name="logo-youtube"></ion-icon>
                                    <div className={styles.popup}>
                                        Attach youtube link
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.modalFooter}>
                            <button>Post</button>
                        </div>
                    </form>
                </>
            )}
        </div>
    );
};
export default CreatePost;
