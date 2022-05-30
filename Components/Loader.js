import logo from "../public/assets/images/logo.png";
import Image from "next/image";

export default function Loader(props) {
  return (
    <div className={props.loading ? "loader" : "loader finished"}>
      <div className="icon">
        <Image src={logo} alt="MAMMUT" layout="fill" />
      </div>
    </div>
  );
}
