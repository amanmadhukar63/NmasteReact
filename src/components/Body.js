import Restaurant from "./Restaurant";
import { useEffect, useState } from "react";
import {SEARCH_LOGO_URL} from "../utils/constants";

// 20230713101913
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4148245&lng=80.23213129999999&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING


var cards=[];
const Body=()=>{
    const [List,setList]=useState([]);
    const [data,setData]=useState("");
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/homepage/getCards?lat=26.498961825459475&lng=80.30955903232098");
        const json=await data.json();
        cards=json?.data?.success?.cards[0]?.favourite?.cards;
        setList(cards);
    }

    if(cards.length===0){
        return <>
            <div className="body restaurants">
                <div className="res-card shimerCard"></div>
                <div className="res-card shimerCard"></div>
                <div className="res-card shimerCard"></div>
                <div className="res-card shimerCard"></div>
                <div className="res-card shimerCard"></div>
                <div className="res-card shimerCard"></div>
                <div className="res-card shimerCard"></div>
                <div className="res-card shimerCard"></div>
            </div>
        </>
    }

  return (
    <div className="body">
        <div className="search-container">
            <div className="search-res">
                <input className="search-bar" type="text" placeholder="Search Restruants" onChange={(e)=>setData(e.target.value)} />
                <img className="search-logo" src={SEARCH_LOGO_URL} alt="search" onClick={()=> {
                    const filterData=List.filter((res)=>res.data.name.toLowerCase().includes(data.toLowerCase()));
                    setList(filterData);
                }} />
            </div>
            <div className="filter">
                <input type="checkbox" id="checkbox" onClick={()=>{
                    if(document.getElementById("checkbox").checked){
                        const filterData=List.filter((res)=>res.data.avgRating>=4);
                        setList(filterData);
                    }
                    else setList(cards);
                }}/>
                <label htmlFor="checkbox">Top Rated Only</label>
            </div>
        </div>
        <div className="restaurants">
            {List.map((card)=><Restaurant resList={card} />)}
        </div>
    </div>
  );
}
export default Body;