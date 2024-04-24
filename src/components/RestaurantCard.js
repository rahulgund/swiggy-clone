import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resdata} = props;
    const {cloudinaryImageId,name,cuisines, avgRating, sla  } = resdata?.info;

    return (
        <div className="m-4 p-4 w-[300px] rounded-sm hover:bg-pink-100 hover:cursor-pointer">
            <img className="h-[300px] rounded-md" src={CDN_URL + cloudinaryImageId} alt="chayos"  />
            <h2 className="text-xl font-bold py-2">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating} stars</h3>
            <h3>{sla.deliveryTime} mins</h3>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
   return (props) => {
        return (
            <div>
                <h1 className="absolute bg-black text-white rounded-sm m-2 p-1">Promoted</h1>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
export default RestaurantCard;