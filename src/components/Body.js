import Restaurant from "./Restaurant";
import { useState } from "react";
import {cards,SEARCH_LOGO_URL} from "../utils/constants";

// 20230713101913
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4148245&lng=80.23213129999999&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING


const Body=()=>{
    const [List,setList]=useState(cards);
  return (
    <div className="body">
        <div className="search-container">
            <div className="search-res">
                <input className="search-bar" type="text" placeholder="Search Restruants" />
                <img className="search-logo" src={SEARCH_LOGO_URL} alt="search" />
            </div>
            <div className="filter">
                <input type="checkbox" id="checkbox" onClick={()=>{
                    if(document.getElementById("checkbox").checked){
                        const filterData=List.filter((res)=>res.data.data.avgRating>=4);
                        setList(filterData);
                    }
                    else setList(cards);
                }}/>
                <label for="checkbox">Top Rated Only</label>
            </div>
        </div>
        <div className="restaurants">
            {List.map((card)=><Restaurant reslist={card} />)}
        </div>
    </div>
  );
}

export default Body;