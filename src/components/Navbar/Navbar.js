import classNames from "classnames/bind";
import styles from "./Navbar.module.scss"
import Logo from "../../assets/image/Logo"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScrollY from "../Hooks/useScrollY";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import Theme from "../Theme/Theme";

const cx=classNames.bind(styles)

function Navbar() {
  // Khởi tạo Function hiển ẩn navbar khi scroll
  const [scrollY] = useScrollY()
  //khởi tạo usestate để thêm action cho thẻ input ( chuyển link)
  const [keywords, setKeywords] = useState('')
  // khởi tạo useNavigate từ router để chuyển link
  const navigate = useNavigate()
  const handleChangeInput = (e) => {
    //hàm này dùng để cho console.log hiện ra chữ thay đổi, hiện ra value của input ( e. target.value)
    let keywords = e.target.value
    setKeywords(keywords)
    //Nếu có keywords nhập vô, thì useNavigation sẽ thêm link /search?keywords=(chữ vừa nhập)
    if (keywords.length > 0) {
      navigate(`/search?keywords=${keywords.trim()}`)
    } else {
      navigate('/')
    }
    
  }

  const handleHome = () => {
    navigate('/')
          setKeywords("");

  }
    return (
      <div className={cx("all")}>
        <div
          // Tạo navbar hiển thị khi scroll
          style={
            scrollY < 50
              ? { backgroundColor: "transparent" }
              : { backgroundColor: "black" }
          }
          className={cx("wrapper")}
        >
          <div className={cx("logo")} onClick={handleHome}>
            <Logo></Logo>
          </div>
          <div
            className={cx("search-input")}
            selector="false"
            spellCheck="false"
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={cx("icon")}
            ></FontAwesomeIcon>
            <input
              placeholder="Tìm kiếm"
              type="text"
              className={cx("input")}
              //khởi tạo onchange để lắng nghe sự thay đổi
              onChange={handleChangeInput}
              value={keywords}
            ></input>
          </div>
          <Theme></Theme>
        </div>
      </div>
    );
}

export default Navbar;