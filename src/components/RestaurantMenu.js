import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState([]);
    const {resId} = useParams();

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
            
           
    
        </div>
    )
}

export default RestaurantMenu;