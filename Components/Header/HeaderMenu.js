import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/images/logo.png";
import SubHeader from "./SubHeader";

export default function HeaderMenu(props) {
  const prefix = props.prefix;
  const menuItems = [
    { title: "صفحه اصلی", link: "/", sub: false, type: "" },
    { title: "درباره ما", link: "/" + prefix + "/about", sub: true, type: "about" },
    { title: " محصولات", link: "#", sub: true, type: "category" },
    /*{ title: "MAMMUT", link: "/", sub: false, type: "" },*/
    {
      title: "شبکه نمایندگان",
      link: prefix + "/#",
      sub: true,
      type: "vendors",
    },
    { title: "ارتباط با ما", link: prefix + "/#", sub: true, type: "contact" },
  ];
  if (prefix == "panel") {
    menuItems[2].type = "panel";
  }
  if (prefix == "conex") {
    menuItems[2].type = "conex";
  }
  if (prefix == "trailer") {
    menuItems[2].type = "trailer";
  }
  if (prefix == "isolate") {
    menuItems[2].link = "/" + prefix + "/products";
    menuItems[2].sub = false;
  }
  return (
    <div className="headerMenu">
      <div className="closeMenu">
        <i className="far fa-angle-right" />
      </div>
      <ul>
        {menuItems.map((menuItem, i) => {
          if (i == 0)
            return (
              <li key={i}>
                <a href={menuItem.link}>{menuItem.title}</a>
              </li>
            );
          /*if (i == 3)
            return (
              <li key={i} className="logo">
                <a href={menuItem.link}>
                  <Image src={logo} alt={menuItem.title} layout="fill" />
                </a>
              </li>
            );*/
          else
            return (
              <li key={i}>
                <Link href={menuItem.link}>
                  <a className={menuItem.sub && "hasSub"}>
                    {menuItem.title}
                    {menuItem.sub && <i className="far fa-angle-down" />}
                  </a>
                </Link>

                {menuItem.sub && (
                  <SubHeader type={menuItem.type} prefix={prefix} />
                )}
              </li>
            );
        })}
      </ul>
    </div>
  );
}
