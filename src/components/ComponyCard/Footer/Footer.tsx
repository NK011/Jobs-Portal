import styles from "./footer.module.css";

type Props = {
    jdLink: string;
    minExp: number;
};
function Footer({ jdLink, minExp }: Props) {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__meta}>
                <p>Minimum Experience</p>
                <p>{minExp ? minExp : "Not specified"}</p>
            </div>
            <div className={styles.footer__btn_group}>
                <button
                    className={styles.footer__btn}
                    onClick={() => window.open(jdLink, "_blank")}
                >
                    Easy Apply
                </button>
            </div>
        </div>
    );
}

export default Footer;
