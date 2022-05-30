import { useState } from "react";
import BlogCard from "../../../Components/BlogCard";
import PageTitle from "../../../Components/PageTitle";
import blogs from "../../../data/blogs";
import { NextSeo } from "next-seo";
import Script from "next/script";
import BlogPage from "./[blogId]";

export default function BlogsPage(props) {
    const data = props.data;
    const [category, setCategory] = useState("all");
    const categories = Array.from(new Set(blogs.map((b) => b.category)));
    return (
        <div className="innerPage blogsPage">
            <NextSeo title="اخبار و مقالات" />

            <PageTitle title="اخبار و مقالات" />
            <div className="contents">
                <div className="categories">
                    <h4>دسته بندی ها</h4>
                    <ul>
                        <li>
                            <button
                                type="button"
                                onClick={() => setCategory("all")}
                                className="active"
                            >
                                همه
                            </button>
                        </li>
                        {categories.map((c, i) => {
                            return (
                                <li key={i}>
                                    <button type="button" onClick={() => setCategory(c)}>
                                        {c}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
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
                                        contentP1={blog.contentP1}
                                        img={blog.img}
                                        prefix="conex"
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
                                        contentP1={blog.contentP1}
                                        expert={blog.expert}
                                        img={blog.img}
                                        prefix="conex"
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

BlogsPage.layout="L1";