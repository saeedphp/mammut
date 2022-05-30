import FaqCard from "../FaqCard";
import styles from './PanelFaq.module.css';
import Image from "next/dist/client/image";
import imgPath from '../../public/assets/images/faq/faq-1.jpg';


export default function PanelFAQ(props) {
  const data = props.data;
  const {name} = props;

  return (
    <div className={styles.faq}>
        <div className="picture">
            <Image src={imgPath} alt={name} layout={"fill"} />
        </div>
      <div className={`${styles.titleWrapper}`}>
        <h4 className={styles.icon}>سوالات متداول</h4>
      </div>
      <div className="items">
        {data.map((d, i) => {
          return <FaqCard key={i} question={d.question} answer={d.answer} />;
        })}
      </div>
    </div>
  );
}
