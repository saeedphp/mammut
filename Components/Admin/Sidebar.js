import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useContext } from "react";
import { userContext } from "./UserContext";

const Sidebar = ({ state, setState }) => {
  const items = [
    { title: "خانه", href: "#admin" },
    { title: "محصولات", href: "#admin" },
    { title: "نمایندگی ها", href: "#admin" },
    { title: "اخبار و مقالات", href: "#admin" },
    { title: " تصاویر ", href: "#admin" },
    { title: " اطلاعات تماس ", href: "#admin" },
    { title: " پروفایل ", href: "#admin" },
  ];

  const [opened, setOpened] = useState(false);
  const { user, setUser } = useContext(userContext);
  return (
    <div className={opened ? "sidebar opened" : "sidebar"}>
      <div className="top">
        <button type="button" onClick={() => setOpened(!opened)}>
          <i className="far fa-bars" />
        </button>
        <div className="picture">
          <Image src="/assets/images/logo.png" alt="MAMMUT" layout="fill" />
        </div>
        <ul>
          {items.map((item, i) => {
            return (
              <li key={i} className={state == i ? "active" : ""}>
                <Link href={item.href}>
                  <a onClick={() => setState(i)}>{item.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bottom">
        <div className="buttons">
          <button
            type="button"
            onClick={() => setUser({ ...user, signedin: false })}
          >
            خروج
            <i className="far fa-sign-out" />
          </button>
        </div>
        <div className="copyrights">
          <p>
            طراحی و اجرا توسط <a href="https://faramouj.ir/"> تیم فراموج</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
