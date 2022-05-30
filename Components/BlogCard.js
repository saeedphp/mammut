import Image from "next/image";
import Link from "next/link";

export default function BlogCard(props) {
  const category = props.category;
  const title = props.title;
  const time = props.time;
  const date = props.date;
  const contentP1 = props.contentP1;
  const expert = props.expert;
  const img = props.img;
  const id = props.id;
  const prefix = props.prefix;

  return (
    <div className="blogCard">
      <div className="contents">
        <div className="picture">
          <div className="overlay">
            <Link href={"/" + prefix + "/blogs/" + id}>
              <a>
                <i className="blog-link"></i>
              </a>
            </Link>
          </div>
          <Link href={"/" + prefix + "/blogs/" + id}>
            <a>
              <Image src={require("../public/assets/images/blogs/" + img)} alt={title} layout="fill" />
            </a>
          </Link>
          <p className="date-blog">{date}</p>
        </div>
        <div className="text">
          <div className="title">
            {/*<h6>{category}</h6>*/}
            <Link href={"/" + prefix + "/blogs/" + id} >
              <a>
                <h4>{title}</h4>
              </a>
            </Link>
          </div>
          {/*<div className="detail">
            <p>{time}</p>
            <p>{date}</p>
          </div>*/}
          <div className="summary">
            <p>{expert.slice(0,130)+'...'}</p>
          </div>
          <div className="buttons">
            <Link href={"/" + prefix + "/blogs/" + id}>
                <a> <i className="fas fa-angle-left" /> ادامه مطلب</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
