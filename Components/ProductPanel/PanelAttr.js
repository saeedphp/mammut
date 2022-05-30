import {Fragment} from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "next/image";
import styles from './PanelAttr.module.css';

const PanelAttr = (props) => {

    const items = props.items;
    const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

    const options = {
        margin: 0,
        responsiveClass: true,
        nav: true,
        dots: true,
        rtl: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
                rtl: true,
            },
            580: {
                items: 2,
                rtl: true,
            },
            768: {
                items: 3,
                rtl: true,
            },
            1280: {
                items: 4,
                rtl: true,
            },
        },
    };

    return (
        <div className="attributes">
            <OwlCarousel {...options}>
                {items.map((item, i) => {
                    return (
                        <div className={styles.attrCard} key={i}>
                            <div className="picture">
                                <Image
                                    src={item.icon}
                                    layout="fill"
                                    alt={item.text}
                                />
                            </div>
                            <h6>{item.text}</h6>
                        </div>
                    );
                })}
            </OwlCarousel>
        </div>
    );
};

export default PanelAttr;