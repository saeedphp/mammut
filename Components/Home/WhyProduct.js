import Image from "next/image";

const WhyProduct = ({title, subTitle, desc, p1, p2, p3, p4, more}) => {
  return (
    <div className="whyProductPanel">
      <div className="text">
       
        <div className="title">
          <h6>{subTitle}</h6>
        <h2>{title}</h2>
        </div>
        <p>
          {desc}
        </p>
        <ul className="list-number">
          <li>
            <p>
              <span className="number">
                1
              </span>
              {p1}
            </p>
          </li>
          <li>
            <p>
              <span className="number">
                2
              </span>
              {p2}
            </p>
          </li>
          <li>
            <p>
              <span className="number">
                3
              </span>
              {p3}
            </p>
          </li>
          <li>
            <p>
              <span className="number">
                4
              </span>
              {p4}
            </p>
          </li>
        </ul>
        <p>
          {more}
        </p>
        {/* <div className="buttons">
          <Link href="/panel/whyPanel">
            <a>
              بیشتر 
            </a>
          </Link>
        </div> */}
      </div>
      <div className="picture">
        <div className="backward-color">

        </div>
        <Image src="/assets/images/why-sandwichPanel.jpg" alt=" " layout="fill" />
      </div>
    </div>
  );
};

export default WhyProduct;
