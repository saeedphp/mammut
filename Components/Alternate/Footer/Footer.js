import FooteBar from "./FooterBar";
import FooterBottom from "./FooterBottom";
import FooterCopyright from "./FooterCopyright";
import FooterTop from "./FooterTop";
import FooterLinks from "../EnFooter/FooterLinks";
import FooterAccess from "./FooterAccess";

const Footer = (props) => {
  const prefix = props.prefix;
  if (
    prefix != "panel" &&
    prefix != "conex" &&
    prefix != "trailer" &&
    prefix != "isolate" &&
      prefix != "about"
  )
    return null;
  return (
    <div className="alternateFooter">
      <FooterTop prefix={prefix} />
      <FooterBottom prefix={prefix} />
      {/* <FooteBar /> */}
        <FooterAccess prefix={prefix} />
      <FooterCopyright prefix={prefix} />
    </div>
  );
};

export default Footer;
