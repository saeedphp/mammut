import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";
import Content from "../Components/Admin/Content";
import Login from "../Components/Admin/Login";
import Sidebar from "../Components/Admin/Sidebar";
import { userContext } from "../Components/Admin/UserContext";
import underConstruction from "./underConstruction";

const AdminPage = () => {
  const [item, setItem] = useState(0);
  const [user, setUser] = useState({
    username: "",
    password: "",
    signedin: false,
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <div className="adminPage">
      <NextSeo title="پنل کاربری" />

      <userContext.Provider value={{ user, setUser }}>
        {!user.signedin && <Login />}
        {user.signedin && <Sidebar state={item} setState={setItem} />}
        {user.signedin && <Content state={item} setState={setItem} />}
      </userContext.Provider>
    </div>
  );
};

AdminPage.layout="L1";
export default AdminPage;
