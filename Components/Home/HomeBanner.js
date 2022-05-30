import Link from "next/link";

export default function HomeBanner(props) {
  const persianSlogan = props.persianSlogan;
  const englishSlogan = props.englishSlogan;
  const btnTxt = props.btnTxt;
  const bannerImage = "/../assets/images/" + props.bannerImage.toString();

  return (
    <div
      className="homeBanner"
      style={{ backgroundImage: "url(" + bannerImage + ")" }}
    >
      <div className="contents">
        <div className="text">
          <div className="persian">
            <h1>{persianSlogan.h1}</h1>
          </div>
          <div className="english">
            <h1 style={{ fontFamily: "Roboto" }}>{englishSlogan.h1}</h1>
          </div>
          <div className="buttons">
            <a
              href="https://mammutworldpanel.iranecar.com/"
              target="_blank"
              rel="noreferrer"
            >
              {btnTxt}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
