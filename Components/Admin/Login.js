import Image from "next/image";
import { useContext } from "react";
import { userContext } from "./UserContext";

const Login = () => {
  const { user, setUser } = useContext(userContext);
  const checkLogin = () => {
    console.log("clicked log in");
    if (user.username == "admin" && user.password == "mammutAdmin@1234")
      setUser({ ...user, signedin: true });
    else alert("wrong information");
  };
  return (
    <div className="login">
      <div className="picture">
        <Image src="/assets/images/logo.png" alt="MAMMUT" layout="fill" />
      </div>
      <input
        type="text"
        placeholder="نام کاربری"
        onChange={(e) => {
          setUser({ ...user, username: e.target.value });
        }}
      />
      <input
        type="password"
        placeholder="رمز عبور"
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
      />
      <div className="buttons">
        <button type="submit" onClick={() => checkLogin()}>
          ورود
        </button>
      </div>
    </div>
  );
};

export default Login;
