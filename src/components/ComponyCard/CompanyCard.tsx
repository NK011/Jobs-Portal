import { JobDetails } from "../../commonUtils/types";
import AboutUs from "./AboutUs/AboutUs";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from "./companyCard.module.css";

type Props = {
    jobDetails: JobDetails;
};

function CompanyCard({ jobDetails }: Props) {
    return (
        <div className={styles.container}>
            <Header jobDetails={jobDetails} />
            <AboutUs description={jobDetails.jobDetailsFromCompany} jdLink={jobDetails.jdLink} />
            <Footer jdLink={jobDetails.jdLink} minExp={jobDetails.minExp} />
        </div>
    );
}

export default CompanyCard;
