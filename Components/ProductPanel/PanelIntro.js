import Image from "next/dist/client/image";
import styles from './PanelIntro.module.css';
import {Fragment} from "react";

export default function PanelIntro(props) {

    const {title, image, desc} = props;
    const imgPath = `${image}`

    return (
        <>
            {title ? (<div className={styles.description}>
                <div className={`picture ${styles.imgWrapper}`}>
                    <div className={styles['backward-color']}>

                    </div>
                    <Image src={imgPath} alt={title} layout={"fill"}/>
                </div>
                <div className={styles.info}>
                    <h2 className={styles.title}>
                        {title}
                    </h2>
                    <p>
                        {desc}
                    </p>
                </div>
            </div>) : null}
        </>
    );
}
