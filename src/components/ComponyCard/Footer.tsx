import React from "react";
import styles from "./companyCard.module.css";

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__meta}>
                <p>Minimum Experience</p>
                <p>2 years</p>
            </div>
            <div className={styles.footer__btn_group}>
                <button className={styles.footer__btn}>Easy Apply</button>
                <button className={styles.footer__btn}>
                    Unlock Referral Asks
                </button>
            </div>
        </div>
    );
}

export default Footer;
