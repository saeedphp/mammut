import { useState } from "react";
import BlogCard from "../../../Components/BlogCard";
import PageTitle from "../../../Components/PageTitle";
import blogs from "../../../data/blogs";
import { NextSeo } from "next-seo";
import Script from "next/script";
import FaqPage from "../faq";

export default function NewsPage(props) {
    const data = props.data;
    const [category, setCategory] = useState("اخبار");
    const categories = Array.from(new Set(blogs.map((b) => b.category)));
    return (
        <div className="innerPage blogsPage">
            <NextSeo title="اخبار و مقالات" />

            <PageTitle title="اخبار و مقالات" />
            <div className="contents">
                <div className="results">
                    {blogs.map((blog, i) => {
                        if (category == "all")
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
                                        prefix="panel"
                                    />
                                </div>
                            );
                        else if (blog.category == category)
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
                                        prefix="panel"
                                    />
                                </div>
                            );
                    })}
                </div>
            </div>
            <Script src="../../assets/scripts/blogCategory.js" />
        </div>
    );
}

NewsPage.layout="L1";
