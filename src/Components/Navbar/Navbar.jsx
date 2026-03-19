import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import "../Navbar/Navbar.scss";

const { Header } = Layout;

const Navbar = () => {
  const location = useLocation();

  const items = [
    { label: <Link to="/">Home</Link>, key: "/" },
    { label: <Link to="/index">Index</Link>, key: "/index" },
    { label: <Link to="/interest">Interest</Link>, key: "/interest" },
    { label: <Link to="/readinglist">Reading List</Link>, key: "/readinglist" },
    {
      label: <Link to="/readingtracer">Reading Tracer</Link>,
      key: "/readingtracer",
    },
    { label: <Link to="/bookrev">Book Review</Link>, key: "/bookrev" },
    { label: <Link to="/myfavorite">My Favorite</Link>, key: "/myfavorite" },
    { label: <Link to="/reading">Reading</Link>, key: "/reading" },
  ];

  return (
    <div className="navbar">
      <Header style={{ background: "#fff", padding: 0 }}>
        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={items}
        />
      </Header>
    </div>
  );
};

export default Navbar;
