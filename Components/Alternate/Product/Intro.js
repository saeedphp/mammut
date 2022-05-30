import {Fragment} from "react";
import Image from "next/dist/client/image";
import styles from './intro.module.css';

const Intro = (props) => {

    const {title, description, image, links} = props;
    const imgPath = `${image}`;

    return (
        <Fragment>
            <div className={styles.intro}>
                <div>
                    <h2>
                        {title}
                    </h2>
                    <p>
                        {description}
                    </p>
                    {links.map((item, index) => {
                        const path = `/assets/documents/trailer/${item.value}`;
                        return (
                            <a key={index} href={path} download="" className={styles.link}>
                                {item.key}
                            </a>
                        )
                    })}
                </div>
                <div className="picture">
                    <Image src={imgPath} alt={title} layout={"fill"}/>
                </div>
            </div>
        </Fragment>
    )
};

export default Intro;