import FaqCard from "../FaqCard";
import faqConex from "../../data/faqConex";
import faqPanel from "../../data/faqPanel";
import Image from "next/image";

export default function HomeFAQ(props) {
  const title = props.title;
  const prefix = props.prefix;
  let faq = [];
  if (prefix == "conex") {
    faq = faqConex;
  }
  if (prefix == "panel") {
    faq = faqPanel;
  }

  return (
    <div className="homeFAQ">
      <div className="content">
        <div className="text">
          <div className="title">
            <h4>
              FAQ
            </h4>
            <h2>{title}</h2>
          </div>
          <div className="contents">
            {faq.map((item, i) => {
              return (
                <FaqCard
                  question={item.question}
                  answer={item.answer}
                  key={i}
                />
              );
            })}
          </div>
        </div>
        <div className="picture">
          <Image
            src="/assets/images/faq.jpg"
            alt="پرسش‌های متداول"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}
