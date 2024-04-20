import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    return (
        <div className="header">
            <div className="logo">
               <img src={LOGO_URL} alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
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