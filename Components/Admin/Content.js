import Pictures from "./Pictures";
import Blogs from "./Blogs";
import Home from "./Home";
import Products from "./Products";
import Profile from "./Profile";
import Socials from "./Socials";
import Vendors from "./Vendors";

const Content = ({ state }) => {
  return (
    <div className="content">
      {state == 0 && <Home />}
      {state == 1 && <Products />}
      {state == 2 && <Vendors />}
      {state == 3 && <Blogs />}
      {state == 4 && <Pictures />}
      {state == 5 && <Socials />}
      {state == 6 && <Profile />}
    </div>
  );
};

export default Content;
