import { useEffect } from "react";
import FooterLinks from "./FooterLinks";
import FooterMap from "./FooterMap";
import FooterAbout from "./FooterAbout";
import FooterContact from "./FooterContact";

const FooterBottom = ({ prefix }) => {
  useEffect(() => {
    const footerBlocks = document.querySelectorAll(".footerBlock");
    for (let footerBlock of footerBlocks) {
      if (footerBlock.querySelector("h4") != null)
        footerBlock.querySelector("h4").onclick = () => {
          footerBlock.querySelector("ul").classList.toggle("opened");
        };
    }
  }, []);
  return (
    <div className="footerBottom">
      <FooterAbout prefix={prefix} />
      <FooterLinks prefix={prefix} />

      <FooterContact />
      <FooterMap />
    </div>
  );
};

export default FooterBottom;
