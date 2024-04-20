import RestaurantCard from "./RestaurantCard.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";


const Body = () => {

    // Local  State variable - Super powerfull variables  

       const [listOfRestaurants, setListOfRestaurants] = useState([]);
       const [filteredRestaurants, setFilteredRestaurants] = useState([]);
       const [searchText, setSearchText] = useState("");

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

    if(listOfRestaurants.length === 0)return <Shimmer/>

    return (
        <div className="body">
            <div className="filter">

              <div className="search">

                <input type="text"
                 className="search-box"
                 value={searchText}
                 onChange={ (e) => {
                  setSearchText(e.target.value)
                  }}/>

                <button className="search-btn" onClick={ () => {

                  // Filter restaurant cards and update UI

                 const filteredRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                 setFilteredRestaurants(filteredRestaurants);

                }}>Search</button>

              </div>

              <button className="filter-btn" onClick={() => {
                const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                setListOfRestaurants(filteredList);
              }}>Top Rated Restaurants</button>

            </div>

            <div className="res-container">
                {
                    filteredRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} resdata={restaurant}/>)    
                }
            </div>
        </div>
    )
}
 
export default Body;