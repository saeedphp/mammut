import { useRouter } from "next/router";
import blogs from "../../../data/blogs";
import Image from "next/dist/client/image";
import { NextSeo } from "next-seo";
import Sidebar from "../../../Components/sidebar";

export default function BlogPage() {
  const router = useRouter();
  const { blogId } = router.query;
  let currBlog;
  for (let blog of blogs) {
    if (blog.id == blogId) currBlog = blog;
  }
  if (currBlog != undefined)
    return (
        <div className="blogPage innerPage">
          <NextSeo title={currBlog.title} />

          <div className="contents">
            <div className="text">
              <div className="top">
                <div className="title">
                  <h6>{currBlog.category}</h6>
                  <h4>{currBlog.title}</h4>
                </div>
                <div className="detail">
                  <p>{currBlog.time}</p>
                  <p>{currBlog.date}</p>
                </div>
              </div>
              <div className="bottom">
                <div className="content">
                  <div className="picture">
                    <Image
                        src={"/assets/images/blogs/" +
                            currBlog.img}
                        alt={currBlog.title}
                        layout="fill"
                    />
                  </div>
                  {currBlog.contentP1}
                </div>
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
    );
  else
    return (
        <>
          <div className="blogPage innerPage">
            <h2>مقاله مورد نظر یافت نشد !</h2>
          </div>
        </>
    );
}

BlogPage.layout="L1";
