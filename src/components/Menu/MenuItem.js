import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { randomRgbaColor } from "../../Utils/Index";
import styles from "./Menu.module.scss";
import {Link} from 'react-scroll'
const cx = classNames.bind(styles);

function MenuItem(props) {
    const { name, icon,to} = props;
    return (
      <Link
        className={cx("menu")}
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        activeClass="active"
        style={{ color: randomRgbaColor(1) }}
      >
        <FontAwesomeIcon icon={icon} className={cx("icon")}></FontAwesomeIcon>
        <p className={cx("icon-title")}>{name}</p>
      </Link>
    );
}

export default MenuItem;