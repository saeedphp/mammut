import Link from "next/link";
const FooterLinks = ({ prefix }) => {
  const links = [
    { title: "محصولات ما", link: "#" },
    { title: "اخبار و مقالات", link: "panel/blogs" },
    { title: "سوالات متداول", link: "/faq" },
    
    { title: "استخدام", link: "https://mammutco.adilar.com/" },
    { title: "شرایط و مقررات", link: "#" },
    { title: "خدمات پس از فروش", link: "#" },
  ];
  return (
    <div className="footerLinks footerBlock">
      <h4>
         لینک‌های مهم <i className="far fa-angle-down" />
      </h4>
      <ul>
        {links.map((link, i) => {
          if (link.title != "استخدام" && link.title !=  "سوالات متداول" && link.title != "اخبار و مقالات")
            return (
              <li key={i}>
                <Link href={"/" + link.link}>
                  <a>{link.title}</a>
                </Link>
              </li>
            );
          else
            return (
              <li key={i}>
                <a href={link.link}>{link.title}</a>
              </li>
            );
        })}
      </ul>
    </div>
  );
};

export default FooterLinks;
