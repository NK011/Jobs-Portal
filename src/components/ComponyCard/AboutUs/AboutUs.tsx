import styles from "./aboutUs.module.css";

type Props = {
    description: string;
    jdLink: string;
};

function AboutUs({ description, jdLink }: Props) {
    return (
        <>
            <div className={styles.about_us}>
                <div>
                    <p>About Company</p>
                    {description}
                </div>
            </div>
            <a
                href={jdLink}
                target="_blank"
                className={styles.about_us__view_more}
            >
                View more
            </a>
        </>
    );
}

export default AboutUs;
