import Image from "next/image";

const HomeIntro = ({title, subTitle, p1, p2, p3, p4}) => {
  return (
    <div className="homeIntro">
      <div className="text">
        <div className="title">
            <h6>{subTitle}</h6>
          <h2>{title}</h2>

        </div>

        <p>
          {p1}
        </p>
        <p>
          {p2}
        </p>
        <p>
          {p3}
        </p>
          <p>
              {p4}
          </p>
      </div>
      <div className="picture backward_image">
          <div className="backward-color">

          </div>
        <Image
          src="/assets/images/sandwich-panelIntro.jpg"
          alt="آشنایی با ساندویچ پانل دنیای ماموت "
          layout="fill"
        />
      </div>
    </div>
  );
};

export default HomeIntro;
