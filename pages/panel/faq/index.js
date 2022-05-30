import PageTitle from "../../../Components/PageTitle";
import faq from "../../../data/faqPanel";
import { NextSeo } from "next-seo";
import ProductDetailPage from "../products/[productId]";
import NewsPage from "../blogs/news";
 
export default function FaqPage() {
  return (
    <div className="faqPage innerPage">
      <NextSeo title="پرسش‌های متداول" />

      <PageTitle title="پرسش‌های متداول" />
      <div className="contents">
        {faq.map((f, i) => {
          return (
            <div className="faqRow" key={i}>
              <div className="question">
                <h5>{f.question}</h5>
              </div>

              <div className="answer">
                <h6>{f.answer}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

FaqPage.layout="L1";
