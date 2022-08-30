import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { faDragon, faHouse, faPersonRifle, faSkull } from "@fortawesome/free-solid-svg-icons";
import MenuItem from "./MenuItem";
import { faFaceGrin, faFileVideo, faHeart, faStar } from "@fortawesome/free-regular-svg-icons";

const cx=classNames.bind(styles)
function Menu(props) {
  return (
    <div className={cx("icones")}>
      <MenuItem name="Home" icon={faHouse} to="netflix"></MenuItem>
      <MenuItem name="Trending" icon={faDragon} to="trending"></MenuItem>
      <MenuItem name="Top rated" icon={faStar} to="toprated"></MenuItem>
      <MenuItem name="Action" icon={faPersonRifle} to="action"></MenuItem>
      <MenuItem name="Comedy Movies" icon={faFaceGrin} to="comedy"></MenuItem>
      <MenuItem name="Horror Movies" icon={faSkull} to="horror"></MenuItem>
      <MenuItem name="Romance Movies" icon={faHeart} to="romances"></MenuItem>
      <MenuItem
        name="Document Movies"
        icon={faFileVideo}
        to="documentaries"
      ></MenuItem>
    </div>
  );
}

export default Menu;

