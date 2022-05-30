import {Fragment, useState} from "react";
import styles from './sidebar.module.css';
import blogs from "../data/blogs";
import Image from "next/dist/client/image";
import Link from "next/link";

const Sidebar = (props) => {

    const data = props.data;
    const [category, setCategory] = useState("all");
    const categories = Array.from(new Set(blogs.map((b) => b.category)));

    return(
        <Fragment>
            <div className={styles.sidebar}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>
                        جديدترين ها
                    </h2>
                    <ul>
                        {blogs.map((item, index) => (
                            <li key={index} className={styles.items}>
                                <div className={styles.box}>
                                    <Link href={`${item.id}`}>
                                        <div className={`picture ${styles.img}`}>
                                            <Image src={require("../public/assets/images/blogs/" + item.img)} alt={item.title} layout={"fill"} />
                                        </div>
                                    </Link>
                                    <div className={styles.info}>
                                        <Link href={`${item.id}`}>
                                            <a className={styles.blogTitle}>
                                                {item.title}
                                            </a>
                                        </Link>
                                        <time>
                                            {item.date}
                                        </time>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Fragment>
    )
};

export default Sidebar;