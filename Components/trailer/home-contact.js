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
          <div className={`alternateHomeFeatured ${direction}`}>
              <div className={`contents ${styles.wrapper}`}>
                  <div className={styles.contactInfo}>
                      <h2>
                          {title}
                      </h2>
                      <p>
                          {desc}
                      </p>
                      <Link href={btnLink}>
                          <a className={styles.btn}>
                              {contactTxt}
                          </a>
                      </Link>
                  </div>
                  <div className={`picture ${styles.imgWrapper}`}>
                      <Image
                          src={"/assets/images/" + imgPath}
                          alt={title}
                          layout="fill"
                      />
                  </div>
              </div>
          </div>
      </Fragment>
    );
};

export default HomeContact;