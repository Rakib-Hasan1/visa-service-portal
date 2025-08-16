import { Menu } from "antd";
import { Link, NavLink, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();

  const items = [
    {
      label: <NavLink to="/">Home</NavLink>,
      key: "/",
    },
    {
      label: <NavLink to="/services">Services</NavLink>,
      key: "/services",
    },
    {
      label: <NavLink to="/my-application">Application</NavLink>,
      key: "/my-application",
    },
  ];

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 sticky top-0 z-50 px-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-14 fira-sans">
        {/* Logo */}
        <Link to={"/"} ><h1 className="text-2xl font-bold text-blue-600">Visa Portal</h1></Link>

        {/* Navigation Menu */}
        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={items}
          className="bg-transparent text-xl font-semibold border-none dark:bg-gray-900"
        />
      </div>
    </div>
  );
};

export default Navbar;
