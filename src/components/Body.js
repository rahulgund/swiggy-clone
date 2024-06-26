import RestaurantCard from "./RestaurantCard.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { withPromotedLabel } from "./RestaurantCard.js";

const Body = () => {

    // Local  State variable - Super powerfull variables  

       const [listOfRestaurants, setListOfRestaurants] = useState([]);
       const [filteredRestaurants, setFilteredRestaurants] = useState([]);
       const [searchText, setSearchText] = useState("");
       const onlineStatus = useOnlineStatus();
       const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

       useEffect(() => {
        fetchData();
       }, []);

       const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=18.5320327&lng=73.9602735");
        const json = await data.json();
        console.log(json);

        //U se optional chaining

        console.log(json.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurants(json.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants);

      }

      // This is known as a conditional r endering

    if(onlineStatus === false) return <h1>Looks like your are offline...</h1>

    if(listOfRestaurants.length === 0)return <Shimmer/>

    return (
        <div className="body">
            <div className="flex m-4 p-4">

              <div className=" ">

                <input type="text"
                 className="border border-black"
                 value={searchText}
                 onChange={ (e) => {
                  setSearchText(e.target.value)
                  }}/>

                <button className="m-4 px-4 border border-black rounded-md" onClick={ () => {

                  // Filter restaurant cards and update UI

                 const filteredRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                 setFilteredRestaurants(filteredRestaurants);

                }}>Search</button>

              </div>

              <button className="m-4 px-4 border border-black rounded-md" onClick={() => {
                const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                setListOfRestaurants(filteredList);
                console.log(filteredList);
              }}>Top Rated Restaurants</button>

            </div>

            <div className="flex flex-wrap">
                {
                    filteredRestaurants.map((restaurant) =>(<Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
                      {restaurant.info.promoted ? (<RestaurantCardPromoted  resdata={restaurant}/>) :(<RestaurantCard  resdata={restaurant}/>)}
                    </Link>))
                }
            </div>
        </div>
    )
}
 
export default Body;