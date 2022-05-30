import Image from "next/image";
import styles from './PanelGallery.module.css';

const PanelGallery = (props) => {

    const gallery = props.gallery;

    return (
        <div className="homeGallery">
            <div className={`title ${styles.titleWrapper}`}>
                <h2> گالری پروژه ها</h2>
                <h4>
                    <span>
                        تجربه بهترین ها با دنیای ماموت
                    </span>
                </h4>
            </div>
            <div className={`row ${styles.bgWrapper}`}>
                {gallery.map((item, i) => {
                    const imgPath = item.img;
                    return (
                        <div className={`col-md-4 col-sm-6 col-12 ${styles.items}`} key={i}>
                            <div className={`picture ${styles.imgWrapper}`}>
                                <Image src={imgPath} alt={""} layout="fill" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PanelGallery;

