import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">FirstPage</Link>
          </li>
          <li>
            <Link to="/secondpage">SecondPage</Link>
          </li>
          <li>
            <Link to="/thirdpage">ThirdPage</Link>
          </li>
          <li>
            <Link to="/fourthpage">FourthPage</Link>
          </li>
        </ul>
      </nav>
 
      <Outlet />
    </>
  )
};
export default Layout;
 