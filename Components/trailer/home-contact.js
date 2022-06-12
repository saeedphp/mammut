import {Fragment} from "react";
import Image from "next/image";
import styles from './home-contact.module.css';
import Link from "next/link";

const HomeContact = (props) => {

    const title = props.title;
    const desc = props.desc;
    const direction = props.direction;
    const imgPath = props.imgPath;
    const btnLink = props.btnLink;
    const contactTxt = props.contactTxt;

    return (
        <Fragment>
            <div className={`alternateHomeFeatured ${direction} ${styles.box}`}>
                <div className={styles.bg}>

                </div>

                <div className={styles.contactInfo}>
                    <h2>
                        {title}
                    </h2>
                    <p>
                        {desc}
                    </p>

                    <div className={styles.tel_wrapper}>
                        <a href="tel: 0214500" className={styles.btn}>
                            021-4500
                        </a>
                        <a href="tel: 0264500" className={styles.btn}>
                            026-4500
                        </a>
                    </div>

                </div>

            </div>
        </Fragment>
    );
};

export default HomeContact;