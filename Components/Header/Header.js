import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import { useEffect } from "react";
import Link from "next/link";

export default function Header(props) {
  const prefix = props.prefix;
  if (prefix == "" || prefix == "admin") return null;

  if (
    prefix != "panel" &&
    prefix != "conex" &&
    prefix != "trailer" &&
    prefix != "isolate"
  )
    return (
      <div className="noHeader">
        <Link href="/">
          <a>
            بازگشت به صفحه اصلی
            <i className="far fa-arrow-left" />
          </a>
        </Link>
      </div>
    );
  else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      // Search
      const searchIcon = document.querySelector(".search img");
      const searchInput = document.querySelector(".search input");
      searchIcon.onclick = () => {
        searchInput.classList.toggle("opened");
      };

      // Responsive Menu
      const togglerIcon = document.querySelector(".headerBottom .toggler i");
      const menu = document.querySelector(".headerMenu");
      togglerIcon.onclick = () => {
        menu.classList.add("opened");
      };
      const closeIcon = document.querySelector(".headerBottom .closeMenu i");
      closeIcon.onclick = () => {
        menu.classList.remove("opened");
      };
      const menuLinks = document.querySelectorAll(".headerMenu ul a");
      for (let menuLink of menuLinks) {
        menuLink.onclick = () => {
          menu.classList.remove("opened");
        };
      }

      // Sub Header
      const menuItems = document.querySelectorAll(
        ".headerMenu > ul > li > .hasSub"
      );
      for (let menuItem of menuItems) {
        if (menuItem.href != "#")
          menuItem.onclick = (e) => {
            e.preventDefault();
            menuItem.nextElementSibling.classList.add("open");
          };
      }
      const closeSub = document.querySelectorAll(".subHeader .closeSub i");
      for (let cs of closeSub) {
        cs.onclick = () => {
          cs.parentElement.parentElement.classList.remove("open");
        };
      }
      const subMenuLinks = document.querySelectorAll(
        ".headerMenu ul .subHeader a"
      );
      for (let menuLink of subMenuLinks) {
        menuLink.onclick = () => {
          const subHeaders = document.querySelectorAll(".subHeader");
          for (let subHeader of subHeaders) subHeader.classList.remove("open");
          menu.classList.remove("opened");
        };
      }

      //Header Fixed
      window.onscroll = () => {
        if (window.scrollY > 48)
          document.querySelector("header .headerBottom").classList.add("fixed");

        if (window.scrollY <= 48)
          document
            .querySelector("header .headerBottom")
            .classList.remove("fixed");

        if (window.innerWidth < 768) {
          if (window.scrollY > 75)
            document
              .querySelector("header .headerBottom")
              .classList.add("fixed");

          if (window.scrollY <= 75)
            document
              .querySelector("header .headerBottom")
              .classList.remove("fixed");
        }
      };
    }, []);

    return (
      <header>
        <HeaderTop prefix={prefix} />
        <HeaderBottom prefix={prefix} />
      </header>
    );
  }
}
