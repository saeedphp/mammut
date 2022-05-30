import Link from "next/link";

export default function HomeNature(props) {
  const title = props.title;
  const text = props.text;
  return (
    <div className="homeNature">
      <div className="contents">
        <div className="text">
          <h4>{title}</h4>
          <h6>
            {text}
          </h6>
          {/* <div className="buttons">
            <Link href="/">مشاهده بیشتر</Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
