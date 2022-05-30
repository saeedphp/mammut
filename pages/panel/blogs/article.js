import { useState } from "react";
import BlogCard from "../../../Components/BlogCard";
import PageTitle from "../../../Components/PageTitle";
import blogs from "../../../data/blogs";
import { NextSeo } from "next-seo";
import Script from "next/script";

export default function ArticlePage(props) {
    const data = props.data;
    const subItems = blogs;
    const [category, setCategory] = useState("مقاله");
    const categories = Array.from(new Set(blogs.map((b) => b.category)));
    return (
        <div className="innerPage blogsPage">
            <NextSeo title="مقالات" />

            <PageTitle title="مقالات" />
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
                        {subItems.map((c, i) => {
                            if (c.subcategory != ''){
                                return (
                                    <li key={i}>
                                        <button type="button" onClick={() => setCategory(c.subcategory)}>
                                            {c.subcategory}
                                        </button>
                                    </li>
                                );
                            }
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
                                        img={blog.img}
                                        prefix="panel"
                                    />
                                </div>
                            );
                        else if (blog.subcategory === category)
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

ArticlePage.layout="L1";
