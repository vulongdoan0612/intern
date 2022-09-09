import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import "./Menu.css";

const cx = classNames.bind(styles);
const Menu = (props) => {
  const { pathname } = useLocation();
  
  const headerNav = [
    {
      to: "netflix",
      name: "Home",
    },
    {
      to: "trending",
      name: "Trending",
    },
    {
      to: "toprated",
      name: "Top rated",
    },
    {
      to: "action",
      name: "Action",
    },
    { to: "comedy", name: "Comedy Movies" },
    { to: "horror", name: "Horror Movies" },
    { to: "romances", name: "Romance Movies" },
    { to: "documentaries", name: "Document Movies" },
  ];
  const active = headerNav.findIndex((e) => e.to === pathname);
  return (
    <div className={cx("icones")}>
      {/* <MenuItem name="Home"  to="netflix"></MenuItem>
      <MenuItem name="Trending"  to="trending"></MenuItem>
      <MenuItem name="Top rated"  to="toprated"></MenuItem>
      <MenuItem name="Action"  to="action"></MenuItem>
      <MenuItem name="Comedy Movies"  to="comedy"></MenuItem>
      <MenuItem name="Horror Movies"  to="horror"></MenuItem>
      <MenuItem name="Romance Movies"  to="romances"></MenuItem>
      <MenuItem
        name="Document Movies"
        
        to="documentaries"
      ></MenuItem> */}

      {headerNav.map((e, i) => (
        <Link
          className={cx("menu")}
          to={e.to}
          spy={true}
          smooth={true}
          offset={-70}
          key={i}
        >
          <div className={cx("flex")}>
            <p className={`title`}>{e.name}</p>
            <span className={`span ${i === active ? "active" : ""}`}></span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
