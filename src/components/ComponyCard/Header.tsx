import React from "react";
import styles from "./companyCard.module.css"
import HourglassFullOutlinedIcon from '@mui/icons-material/HourglassFullOutlined';

function Header() {
    return (
        <div className={styles.container__header}>
            <div className={styles.container__header__time}>
                <HourglassFullOutlinedIcon fontSize="small" />
                Posted 10 days ago</div>
            <div className={styles.container__header__details}>
                <div className={styles.header__logo}>
                    <img src="https://cdn.pixabay.com/photo/2022/01/07/01/21/girl-6920625_640.jpg" />
                </div>
                <div className={styles.header__meta}>
                    <p>Company Name</p>
                    <p>Frontend Engineer</p>
                    <p>Location</p>
                </div>
            </div>
            <div className={styles.header__salary_info}>
                <p>Estimated Salary: 20LPA</p>
            </div>
        </div>
    );
}

export default Header;
