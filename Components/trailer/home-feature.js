import ProductText from "./product-text";
import Image from "next/image";
import styles from './home-feature.module.css';
import ReactPlayer from "react-player";
import {Fragment} from "react";

const HomeFeature = (props) => {
    const title = props.title;
    const name = props.name;
    const features = props.features;
    const direction = props.direction;
    const imgPath = props.imgPath;
    return (
        <div className={`alternateHomeFeatured ${direction}`}>
            <div className="contents">
                <div className={styles.info}>
                    <ProductText name={name} features={features} />
                    <p className="trailer-desc">
                        {title}
                    </p>
                </div>
                <div className={`picture ${styles.imgWrapper}`}>
                    {/*<Image
                        src={"/assets/images/" + imgPath}
                        alt={name}
                        layout="fill"
                    />*/}
                    <div className={styles.video_wrapper}>
                        <ReactPlayer className={styles.video} controls={true} playing={false} url="https://mammutworld.faramoujwp.ir/wp-content/uploads/2022/06/تاريخچه-تريلر-LQ.mp4" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeFeature;
