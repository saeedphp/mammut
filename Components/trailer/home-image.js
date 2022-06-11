import {Fragment} from "react";
import ProductText from "./product-text";
import Image from "next/image";
import styles from './home-image.module.css';

const HomeImage = (props) => {

    const {title, imgPath,description, direction} = props;

    return (
        <Fragment>
            <div className={`alternateHomeFeatured`}>
                <div className={`contents ${styles['img-row']}`}>
                    <div className={`${styles.container} ${direction}`}>
                        <div className={`picture ${styles.imgWrapper}`}>
                            <Image
                                src={"/assets/images/" + imgPath}
                                alt={title}
                                layout="fill"
                            />
                        </div>
                        <p className={styles.desc}>
                            <h2 className="trailer-desc">
                                {title}
                            </h2>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default HomeImage;