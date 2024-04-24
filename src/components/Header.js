import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
   // Single Page Application 
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const cart = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between">
            <div className="w-64">
               <img src={LOGO_URL} alt="" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status - {onlineStatus? "🟢" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>   
                    <li className="px-4"><Link to="/contact">Contact</Link></li>
                    <li className="px-4"><Link to="/cart">Cart - {cart.length} Items</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
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