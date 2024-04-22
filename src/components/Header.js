import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
   // Single Page Application 
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo">
               <img src={LOGO_URL} alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status - {onlineStatus? "🟢" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>   
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <button className="login" onClick={ () => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                        }}
                    >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default Header;