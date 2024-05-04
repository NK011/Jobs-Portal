import React from "react";
import Header from "./Header";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import styles from "./companyCard.module.css"

function CompanyCard() {
    return (
        <div className={styles.container}>
            {/* header */}
            <Header />
            {/* about us */}
            <AboutUs />
            {/* cta */}
            <Footer />
        </div>
    );
}

export default CompanyCard;
