import styles from '../../Components/ProductPanel/PanelFaq.module.css';
import Image from "next/dist/client/image";
import imgPath from "../../public/assets/images/faq/faq-1.jpg";
import FaqCard from "../FaqCard";
import faqs from "../../data/faq";
import {NextSeo} from "next-seo";

const Faq = () => {
    return (
        <>
            <div className="aboutPage innerPage">
                <NextSeo title="سوالات متداول" />
                <div className="aboutHeader">
                    <h1>سوالات متداول</h1>
                </div>
                <div className={styles.faq}>
                    <div className={`${styles.titleWrapper}`}>
                        <h4 className={styles.icon}>سوالات متداول</h4>
                    </div>
                    <div className="items">
                        {faqs.map((d, i) => {
                            return <FaqCard key={i} question={d.question} answer={d.answer}/>;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Faq;