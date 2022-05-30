import PageTitle from "../../../Components/PageTitle";
import { NextSeo } from "next-seo";
import { vendorContext } from "../../../Components/VendorContext";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import VendorsListPage from "./list";
export default function VendorsLogin() {
  const { vendor, setVendor } = useContext(vendorContext);
  const [username, setName] = useState("");
  const [password, setPass] = useState("");
  const router = useRouter();
  const checkForm = (e) => {
    e.preventDefault();
    if (password == "admin" && username == "admin") {
      setVendor({ name: "admin", password: "admin", signedin: true });
      router.replace("panel");
    } else alert("نام کاربری یا رمز عبور نادرست است!");
  };
  return (
    <div className="vendorsLogin">
      <NextSeo title="درگاه ارتباط با نمایندگان" />

      <PageTitle title="درگاه ارتباط با نمایندگان" />

      <div className="contents">
        <form>
          <div className="inputs">
            <input
              type="text"
              placeholder="نام کاربری"
              value={username}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="inputs">
            <input
              type="password"
              placeholder="رمز عبور "
              value={password}
              onChange={(e) => setPass(e.target.value)}
            ></input>
          </div>
          <div className="buttons">
            <button type="submit" onClick={(e) => checkForm(e)}>
              ورود{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

VendorsLogin.layout="L1";
