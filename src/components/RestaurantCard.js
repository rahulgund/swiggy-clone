import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resdata} = props;
    const {cloudinaryImageId,name,cuisines, avgRating, sla  } = resdata?.info;

    return (
        <div className="res-card">
            <img src={CDN_URL + cloudinaryImageId} alt="chayos" className="res-logo" />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating} stars</h3>
            <h3>{sla.deliveryTime} mins</h3>
        </div>
    )
}

export default RestaurantCard;