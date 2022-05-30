import Image from "next/dist/client/image";
import styles from './WhyMammut.module.css';

export default function WhyMammut(props) {

    const {title, image, desc} = props;
    const imgPath = `${image}`

    return (
        <div className={styles.description}>
            {desc ? (
                <div className={styles.info}>
                    <h2 className={styles.title}>
                        {title}
                    </h2>
                    <p>
                        {desc}
                    </p>
                </div>
            ) : null}
            {title ? (
                <div className={`picture ${styles.imgWrapper}`}>
                    <div className={styles['backward-color']}>

                    </div>
                    <Image src={imgPath} alt={title} layout={"fill"}/>
                </div>
            ) : null}
        </div>
    );
}
