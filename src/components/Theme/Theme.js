import classNames from "classnames/bind";
import { useContext, useState } from "react";
import './Theme.css'
function Theme(props) {
    const [on, setOn] = useState(false)    
    const handleToggle = () => {
      setOn(on => !on)

    }
    return (
      <div>
        <div className={'theme'}>
            <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
              <div className={`spinner ${on ? "active" : ""}`}></div>
            </div>
        </div>
      </div>
    );
}

export default Theme;