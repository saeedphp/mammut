import Link from "next/dist/client/link";

const BlogCard = (props) => {
  const imgPath = props.imgPath;
  const date = props.date;
  const id = props.id;
  const title = props.title;
  const summary = props.summary;
  return (
    <div className="alternateBlogCard" style={{backgroundImage: `url(../assets/images/blogs/${imgPath})`}}>
      <div className="text">
        <h6>{title}</h6>
        <p>{summary}</p>
      </div>
      <div className="details">
        <p>{date}</p>
        <Link href={`/blogs/${id}`}>
          <a>
            ادامه مطلب
            <i className="far fa-angle-left"></i>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
