import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState([]);
    const {resId} = useParams();
    const dispatch = useDispatch();

    const handleAddItem = (cuisines) => {
        dispatch(addItem(cuisines));
    }

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5320327&lng=73.9602735&restaurantId="+resId+"&isMenuUx4=true&submitAction=ENTER");
        const json = await data.json();
        setResInfo(json.data.cards);
    }

    if(resInfo === null) return (<Shimmer />) 

    const name = resInfo?.[2]?.card?.card.info?.name;
    const avgRating = resInfo?.[2]?.card?.card.info?.avgRating;
    const costForTwoMessage = resInfo?.[2]?.card?.card.info?.costForTwoMessage;
    const cuisines = resInfo?.[2]?.card?.card.info?.cuisines;
    const menu = resInfo?.[5];
    console.log("1", menu);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{avgRating } Stars - {costForTwoMessage}</h2>
            <h2>{cuisines}</h2>
            <button className="m-2 p-1 border border-black rounded-sm" onClick={()=> handleAddItem(cuisines)}>Add Item</button>
            
           
    
        </div>
    )
}

export default RestaurantMenu;