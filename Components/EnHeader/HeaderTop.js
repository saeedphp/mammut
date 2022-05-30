import Image from "next/image";
import whatsapp from "../../public/assets/images/icons/whatsapp.png";
import linkedin from "../../public/assets/images/icons/linkedin.png";
import instagram from "../../public/assets/images/icons/instagram.png";
import aparat from "../../public/assets/images/icons/aparat.png";
import Tel from "../icon/tel";
import Mail from "../icon/mail";

export default function HeaderTop({prefix}) {
  let instagramLink;
  let linkedinLink;
  if (prefix == "panel" || prefix == "conex") {
    instagramLink = "https://instagram.com/mammutworld_panel_conex?utm_medium=copy_link";
    linkedinLink = "https://www.linkedin.com/company/mammutworld-panel-conex";
  }
  if (prefix == "trailer" || prefix == "isolate") {
    instagramLink = "https://www.instagram.com/mammutworld_trailer/";
    linkedinLink = "https://www.linkedin.com/company/mammutworld-trailer/?trk=similar-pages&originalSubdomain=ir";
  }
  return (
      <div className="headerTop">
        <div className="contents">
          <div className="mail">
            <a href="tel:0214500">
              <Tel />
              021-4500-1
            </a>
            <a href="tel:0264500">026-4500-1</a>
            <a href="mailto:info@mammutworld.com">
              <Mail />
              info@mammutworld.com
            </a>
          </div>
          <div className="social">
            <ul>
              <li>
                <a
                    href={linkedinLink}
                >
                  <Image src={linkedin} alt="LinkedIn" layout="fill"/>
                </a>
              </li>
              <li>
                <a href="https://web.whatsapp.com/send?phone=+989019011423&text=">
                  <Image src={whatsapp} alt="Whatsapp" layout="fill"/>
                </a>
              </li>
              <li>
                <a href={instagramLink}>
                  <Image src={instagram} alt="Instagram" layout="fill"/>
                </a>
              </li>
              <li>
                <a href="https://www.aparat.com/mammutworld">
                  <Image src={aparat} alt="Aparat" layout="fill"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
}
