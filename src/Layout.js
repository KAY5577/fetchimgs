import { Outlet, Link } from "react-router-dom";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <nav className="shadow-sm">
        <ul className="d-flex justify-content-end align-items-center list-unstyled px-3 mb-0">
          <li className="text-decoration-none">
            <Link to="/" className="text-decoration-none p-3">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-decoration-none p-3">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
