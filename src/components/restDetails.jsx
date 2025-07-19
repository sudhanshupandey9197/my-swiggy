import { useParams, Link, useLoaction, useLocation } from "react-router";
import { useEffect } from "react";
import FilterCard from "./filter";
import { useDispatch, useSelector } from "react-redux";
import { fetchRest } from "./restSlice";
const designL = new URL("../assets/design.png",import.meta.url).href;
const designR = new URL("../assets/design2.png",import.meta.url).href;


export default function Restaurant() {
    const {id} = useParams();
    const {restData,loading, error} = useSelector((state) => state.restSlice);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRest(id));
    },[])
    
    if(loading) {
        return <div className="h-[100vh] flex justify-center items-center text-3xl">Loading...</div>
    }
    else if(error) {
        return <h1>Error occured</h1>;
    }
    else {
        const restInfo = restData?.cards?.[2]?.card?.card?.info;        
        const rest = {
            restId: restInfo?.id,
            restImageId: restInfo?.cloudinaryImageId,
            restArea: restInfo?.areaName,
            restName: restInfo?.name,
            restDistance: restInfo?.sla?.lastMileTravel
        }
        return (
            <div className="mx-[20vw] mb-6 restPage">
                <nav className="mt-25">
                    <Link to="/" className="mr-[5px] text-gray-500 text-[12px] ">Home /</Link>
                    <Link to="/restaurant" className="mr-[5px] text-gray-500 text-[12px] ">Restaurants /</Link>
                    <Link to={`/city/delhi/${id}`} className="text-[12px] ">{restData?.cards?.[2]?.card?.card?.info?.name}</Link>
                </nav>
                <div className="font-bold my-[18px] text-[28px] px-4">{restData?.cards?.[2]?.card?.card?.info?.name}</div>

                
                <div className="-z-10 m-4 mt-0 px-4 pb-4 bg-gray border-1 border-gray-300 rounded-[16px] shadow-[0px_0px_0px_16px_rgba(0,0,0,0.1)] relative">
                    <div className=" absolute top-[-21px] left-[-17px] h-[20px] w-[60vw] bg-white z-10 extraBar"></div>
                    <div className="flex items-center font-bold pt-5 pb-1"><svg className="mr-1" width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#28a745"/><polygon points="12,4 14.09,9.26 20,9.27 15.5,13.14 17.6,19 12,15.77 6.4,19 8.5,13.14 4,9.27 9.91,9.26" fill="#ffffff"/></svg>{restData?.cards?.[2]?.card?.card?.info?.avgRatingString} ({restData?.cards?.[2]?.card?.card?.info?.totalRatingsString}) · {restData?.cards?.[2]?.card?.card?.info?.costForTwoMessage}</div>
                    <a className="text-[#FF5200] text-[14px] font-semibold cursor-pointer underline ">{restData?.cards?.[2]?.card?.card?.info?.cuisines.join(", ")}</a>
                    <div className="text-[#02060C99] text-[14px] pt-2"><span className="font-bold text-black">Outlet:</span> {restData?.cards?.[2]?.card?.card?.info?.areaName} <span className="text-[#FF5200] font-bold text-[20px] ">▾</span></div>
                    <div className="font-bold text-[14px] pt-2 pb-4">{restData?.cards?.[2]?.card?.card?.info?.sla?.slaString}</div>
                </div>

                <div className="font-[600] text-[20px] ml-4 mt-12 mb-5">Deals for you</div>
                <div className="flex overflow-x-scroll">
                    {
                        restData?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.offers?.map((value,ind) => {
                            return (
                                <div key={value?.info?.header+ind} className=" min-w-[302px] border-[1px] border-gray-300 rounded-[20px] ml-5 p-3 mb-3 flex">
                                    <img height="50px" width="50px" src={`https://media-assets.swiggy.com/swiggy/image/upload/${value?.info?.offerLogo}`}></img>
                                    <div className="ml-3">
                                        <div className="font-bold text-[18px]">{value?.info?.header}</div>
                                        <div className="text-gray-500 font-semibold text-[14px]">{"primaryDescription" in value?.info ? value?.info?.primaryDescription : value?.info?.description}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="pt-8 pb-4 tracking-[4px] text-gray-600 text-[13px] text-center"><img className="h-6.5 w-8.5 inline-block relative bottom-[4px] pr-[5px]" src={designL}></img>MENU<img className="h-6 w-8 inline-block relative bottom-[2px]" src={designR}></img></div>
                <Link to={"search"}>
                    <div className="py-4 rounded-[12px] text-[16px] text-gray-500  text-center  bg-gray-100 relative">Search for dishes<svg className="absolute top-[15px] right-[15px] " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.65 6.15z" /></svg></div>
                </Link>

                {restData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((value) => "title" in value?.card?.card)?.map((value) => <FilterCard key={value?.card?.card?.title} value={value} rest={rest}></FilterCard>)}

            </div>
        )
    }


}