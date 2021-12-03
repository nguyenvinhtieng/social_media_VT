import { useState } from "react";
import styles from "./header.module.css";

const Header = () => {
    const [search, setSearch] = useState("");
    const [dropdown, setDropdown] = useState(false);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };
    return (
        <header className={styles.Header}>
            <div className={styles.headerLogo}>VinhTieng</div>
            <div className={styles.headerSearch}>
                <button>
                    <ion-icon name="search-outline"></ion-icon>
                </button>
                <input
                    type="text"
                    id="search"
                    value={search}
                    placeholder="Search..."
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <ul className={styles.headerMenu}>
                <li className={styles.headerMenuItem}>
                    <a href="/">
                        <ion-icon name="logo-wechat"></ion-icon>
                    </a>
                </li>
                <li className={styles.headerMenuItem}>
                    <a href="/" className="avatar-sm">
                        <img
                            src="https://www.w3schools.com/w3images/avatar6.png"
                            alt=""
                        />
                    </a>
                </li>
                <li
                    className={styles.headerMenuItem}
                    onClick={() => setDropdown(!dropdown)}
                >
                    <ion-icon name="chevron-down-outline"></ion-icon>
                </li>
                {dropdown && (
                    <ul className={styles.dropDownMenu}>
                        <li>
                            <a href="/">
                                <ion-icon name="person-circle-sharp"></ion-icon>
                                My profile
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <ion-icon name="settings-sharp"></ion-icon>{" "}
                                Setting
                            </a>
                        </li>
                        <hr />
                        <li>
                            <a href="/">Logout</a>
                        </li>
                    </ul>
                )}
            </ul>
        </header>
    );
};

export default Header;
