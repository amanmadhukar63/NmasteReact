import {CDN_URL} from "../utils/constants";

const Restaurant =(prop)=>{
    const {name,cloudinaryImageId,cuisines,avgRating,deliveryTime,costForTwo}=prop.reslist.data.data;
    return(
    <div className="res-card">
        <img className="res-img" src={CDN_URL+cloudinaryImageId} alt="res-img" />
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <div className="card-detail">
            <p>⭐ {avgRating}</p>
            <p>{deliveryTime} min</p>
            <p>{costForTwo/100} for two</p>
        </div>
    </div>
);}

export default Restaurant;