import Image from "next/image";
import whyPanel2 from "../public/assets/images/whyPanel2.jpg";
import items from "../data/whyMammutPanel";
import Link from "next/link";

export default function WhyPanelSecond() {
  return (
    <div className="whyPanelSecond whyProductSecond">
      <div className="contents">
        <div className="text">
          <div className="title">
            <h2>چرا ساندویچ پانل ماموت</h2>
            <h6>فواید ساندویچ پانل</h6>
          </div>
          <ul>
            {items.map((item, i) => {
              if (i < 5) {
                return (
                  <li key={i}>
                    <i className="far fa-check" />
                    {item.text}
                  </li>
                );
              }
            })}
          </ul>
          <div className="buttons">
            <Link href="/panel/whyPanel">
              <a>
                بیشتر <i className="far fa-angle-left" />
              </a>
            </Link>
          </div>
        </div>
        <div className="picture">
          <Image src={whyPanel2} alt="Why Panel" layout="fill" />
        </div>
      </div>
    </div>
  );
}
