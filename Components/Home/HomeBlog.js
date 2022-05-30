import BlogCard from "../BlogCard";
import blogs from "../../data/blogs";
import Link from "next/link";
import { useEffect } from "react";

export default function HomeBlog(props) {
  const prefix = props.prefix;
  return (
    <div className="homeBlog">
      <h2>اخبار و مقالات</h2>
      <div className="contents">
        {blogs.map((blog, i) => {
          if (i < 2)
            return (
              <div key={i}>
                <BlogCard
                  title={blog.title}
                  category={blog.category}
                  id={blog.id}
                  time={blog.time}
                  date={blog.date}
                  expert={blog.expert}
                  img={blog.img}
                  prefix={prefix}
                />
              </div>
            );
        })}
      </div>
      <div className="buttons">
        <Link href={`${prefix}/blogs`}>
          مشاهده همه
        </Link>
      </div>
    </div>
  );
}
