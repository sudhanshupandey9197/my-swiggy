import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import { fetchRest } from "./restSlice";
import ItemDisplay from "./itemDisplay";

export default function SearchFood() {
    const {id} = useParams();
    const {restData,loading, error} = useSelector((state) => state.restSlice);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(!restData.length) {
            dispatch(fetchRest(id));
        }
    },[])
    const restInfo = restData?.cards?.[2]?.card?.card?.info;
    const rest = {
        restId: restInfo?.id,
        restImageId: restInfo?.cloudinaryImageId,
        restArea: restInfo?.areaName,
        restName: restInfo?.name,
        restDistance: restInfo?.sla?.lastMileTravel
    }
    const cards = restData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((value) => "itemCards" in value?.card?.card);
    let itemsInfo = [];
    cards?.forEach((value) => {
        const arr = value?.card?.card?.itemCards;
        arr.forEach((val) => {
            let isPresent = false;
            for(let item of itemsInfo) {
                if(item.id===val?.card?.info?.id) {
                    isPresent = true;
                    break;
                }
            }
            if(!isPresent)
            itemsInfo.push(val?.card?.info)
        });
    })

    const [searchedItems,setSearchedItems] = useState([]);
    if(!loading)
    return (
        <div className="flex flex-col items-center bg-gray-50 min-h-[100vh] pt-30">
            <div className="w-[55vw] flex items-center pb-3 border-b-1 border-b-gray-300">
                <Link to={`/city/delhi/${id}`}><svg className="_2JL3g mr-5" viewBox="0 0 32 32" height="18" width="18"><path d="M3.333 14.984l28.667-0v2.097l-0.16 0.006h-28.506l-0.16-0.16v-1.782l0.16-0.16zM1.114 14.986l10.079-10.079 0.121-0.108 1.465 1.467-0.101 0.127-10.079 10.079h-0.226l-1.26-1.26v-0.226zM12.679 25.676l0.108 0.117-1.468 1.484-0.126-0.115-10.079-10.079v-0.226l1.26-1.26h0.226l10.079 10.079zM3.268 12.87l0.272 0.116-0.022 6.125-0.272 0.114-3.245-3.18 0.111-0.112 3.157-3.062z"></path></svg></Link>
                <input className="w-[50vw] outline-none" onChange={(e) => {
                    const substr = e.target.value.toLowerCase();
                    if(substr.length > 1) {
                        const arr = itemsInfo.filter((item) => {
                            const itemName = item.name.toLowerCase();
                            console.log(itemName.includes(substr)+" "+itemName+" "+substr);
                            return itemName.includes(substr);
                        });
                        setSearchedItems(arr);
                    }
                    else {
                        setSearchedItems([]);
                    }
                }} placeholder={`Search in ${restInfo?.name}`}></input>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <div className="w-[55vw]">
            {searchedItems.length ? (searchedItems.map((item) => {return <ItemDisplay value={item} rest={rest} key={item.id}></ItemDisplay>})) : (<></>)}
            </div>
        </div>
    )
}