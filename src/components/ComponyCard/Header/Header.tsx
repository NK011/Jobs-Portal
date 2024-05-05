import HourglassFullOutlinedIcon from "@mui/icons-material/HourglassFullOutlined";
import { JobDetails } from "../../../commonUtils/types";
import styles from "./header.module.css";

type Props = {
    jobDetails: JobDetails;
};
function Header({ jobDetails }: Props) {
    return (
        <div className={styles.header}>
            <div className={styles.header__time}>
                <HourglassFullOutlinedIcon fontSize="small" />
                Posted 10 days ago
            </div>
            <div className={styles.header__details}>
                <div className={styles.header__logo}>
                    <img src={jobDetails.logoUrl} />
                </div>
                <div className={styles.header__meta}>
                    <p>{jobDetails.companyName}</p>
                    <p>{jobDetails.jobRole}</p>
                    <p>{jobDetails.location}</p>
                </div>
            </div>
            <div className={styles.header__salary_info}>
                <p>
                    Estimated Salary:{" "}
                    {jobDetails.minJdSalary || jobDetails.maxJdSalary ? (
                        <>
                            {jobDetails.minJdSalary ? (
                                <>
                                    {jobDetails.minJdSalary}{" "}
                                    {jobDetails.salaryCurrencyCode} -
                                </>
                            ) : (
                                "Upto"
                            )}{" "}
                            {jobDetails.maxJdSalary ? (
                                <>
                                    {jobDetails.maxJdSalary}{" "}
                                    {jobDetails.salaryCurrencyCode}
                                </>
                            ) : (
                                ""
                            )}
                        </>
                    ) : (
                        "Not Disclosed"
                    )}
                </p>
            </div>
        </div>
    );
}

export default Header;
