import Link from "next/link";
const FooterLinks = ({ prefix }) => {
  const links = [
    { title: "Our Products", link: "#" },
    { title: "Blogs", link: "panel/blogs" },
    { title: "Faq", link: "/faq" },
    
    { title: "Recruitment", link: "https://mammutco.adilar.com/" },
    { title: "Terms and Conditions", link: "#" },
    { title: "After Sales Services", link: "#" },
  ];
  return (
    <div className="footerLinks footerBlock">
      <h4>
          Important links <i className="far fa-angle-down" />
      </h4>
      <ul>
        {links.map((link, i) => {
          if (link.title != "Recruitment" && link.title !=  "Faq" && link.title != "Blogs")
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
