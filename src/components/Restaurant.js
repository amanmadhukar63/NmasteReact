import {CDN_URL} from "../utils/constants";

const Restaurant =(prop)=>{
    const {name,cloudinaryImageId,cuisines,avgRating,slaString,costForTwo}=prop.resList.data;
    return(
    <div className="res-card">
        <img className="res-img" src={CDN_URL+cloudinaryImageId} alt="res-img" />
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <div className="card-detail">
            <p>⭐ {avgRating}</p>
            <p>{slaString}</p>
            <p>{costForTwo}</p>
        </div>
    </div>
);}

export default Restaurant;