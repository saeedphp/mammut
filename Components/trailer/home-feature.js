import ProductText from "./product-text";
import Image from "next/image";
import styles from './home-feature.module.css';

const HomeFeature = (props) => {
    const title = props.title;
    const name = props.name;
    const features = props.features;
    const direction = props.direction;
    const imgPath = props.imgPath;
    return (
        <div className={`alternateHomeFeatured ${direction}`}>
            <div className="contents">
                <ProductText name={name} features={features} />
                <div className={`picture ${styles.imgWrapper}`}>
                    <Image
                        src={"/assets/images/" + imgPath}
                        alt={name}
                        layout="fill"
                    />
                </div>
                <p className="trailer-desc">
                    {title}
                </p>
            </div>
        </div>
    );
};

export default HomeFeature;
