import Footer from "./Alternate/Footer/Footer";
import Whatsapp from "./Whatsapp";
import Header from "./Header/Header";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const path = router.route;
  const prefix = path.split("/")[1];
  return (
    <>
      <Header prefix={prefix} />
      <main>{children}</main>
      <Whatsapp />
      <Footer prefix={prefix} />
    </>
  );
}
