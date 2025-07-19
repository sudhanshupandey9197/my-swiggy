import { useState, useEffect } from "react"
import { Link } from "react-router";
import {useSelector, useDispatch} from "react-redux";
import { fetchRestData } from "./slice1";

export default function RestCard() {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRestData());
    },[]);
    const {restData,loading, error} = useSelector((state) => state.slice1);

    if(loading || !restData?.data) {
        return (
            <>
                <header className="h-25"></header>
                <main>
                    <div className="px-[10vw] py-4 ">
                        <div className="h-[25px] w-[212px] bg-[#CECFD2]"></div>
                        <div className="flex overflow-scroll my-8">
                            
                            <div className="min-w-[144px] h-[180px] mr-8 bg-[#CECFD2]" ></div>
                            <div className="min-w-[144px] h-[180px] mr-8 bg-[#CECFD2]" ></div>
                            <div className="min-w-[144px] h-[180px] mr-4 bg-[#CECFD2]" ></div>
                            <div className="min-w-[144px] h-[180px] mr-4 bg-[#CECFD2]" ></div>
                            <div className="min-w-[144px] h-[180px] mr-4 bg-[#CECFD2]" ></div>
                            <div className="min-w-[144px] h-[180px] mr-4 bg-[#CECFD2]" ></div>
                            <div className="min-w-[144px] h-[180px] mr-4 bg-[#CECFD2]" ></div>
                            
                        </div>
                    </div>
                    <div className=" mb-8 mx-[10vw] border-t-1 border-[#CECFD2]"></div>
                    <div className="px-[10vw] py-4 ">
                        <div className="h-[25px] w-[290px] bg-[#CECFD2]"></div>
                        <div className="flex overflow-hidden">
                            <div className=" mr-8 mt-4 min-w-[274px] h-[286px] ">
                                <div className="w-[100%] h-[180px] mb-2 rounded-[20px] bg-[#CECFD2]"></div>
                                <div className="w-[100%] h-[20px] my-1.5 bg-[#CECFD2]"></div>
                                <div className="w-[100%] h-[20px] my-1.5 bg-[#CECFD2]"></div>
                                <div className="w-[100%] h-[20px] my-1.5 bg-[#CECFD2]"></div>
                                <div className="w-[100%] h-[20px] my-1.5 bg-[#CECFD2]"></div>
                            </div>
                            <div className=" mr-8 mt-4 min-w-[274px] h-[286px] ">
                                <div className="w-[100%] h-[180px] mb-2 rounded-[20px] bg-[#CECFD2]"></div>
                                <div className="w-[100%] h-[20px] my-1.5 bg-[#CECFD2]"></div>
                                <div className="w-[100%] h-[20px] my-1.5 bg-[#CECFD2]"></div>
                                <div className="w-[100%] h-[20px] my-1.5 bg-[#CECFD2]"></div>
                                <div className="w-[100%] h-[20px] my-1.5 bg-[#CECFD2]"></div>
                            </div>
                            <div className=" mr-8 mt-4 min-w-[274px] h-[286px] ">
                                <div className="w-[100%] h-[180px] mb-2 rounded-[20px] bg-[#CECFD2]"></div>
                                <div className="w-[100%] h-[20px] my-1.5 bg-[#CECFD2]"></div>
                                <div className="w-[100%] h-[20px] my-1.5 bg-[#CECFD2]"></div>
                                <div className="w-[100%] h-[20px] my-1.5 bg-[#CECFD2]"></div>
                                <div className="w-[100%] h-[20px] my-1.5 bg-[#CECFD2]"></div>
                            </div>
                            <div className=" mr-8 mt-4 min-w-[274px] h-[286px] ">
                                <div className="w-[100%] h-[180px] mb-2 rounded-[20px] bg-[#CECFD2]"></div>
                                <div className="w-[100%] h-[20px] my-1.5 bg-[#CECFD2]"></div>
                                <div className="w-[100%] h-[20px] my-1.5 bg-[#CECFD2]"></div>
                                <div className="w-[100%] h-[20px] my-1.5 bg-[#CECFD2]"></div>
                                <div className="w-[100%] h-[20px] my-1.5 bg-[#CECFD2]"></div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
    else if(error) {
        return <h1>Error occured</h1>;
    }
    const data = restData?.data;
    console.log(data);
    return (
        <>
            <header className="h-25 bg-white"></header>
            <main>
                <div className="font-sans px-[10vw] py-4 ">
                    <h1 className="font-bold text-[21px]">{data?.cards[0]?.card?.card?.header?.title}</h1>
                    <div className="flex overflow-scroll">
                        {
                            data?.cards[0]?.card?.card?.imageGridCards?.info?.map((value) => {
                                return (
                                    <div className="pr-4 " key={value.id}>
                                        <img className="min-w-[144px] h-[180px]" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+value.imageId}></img>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="my-8 mx-[10vw] border-t-1 border-[#02060c0d]"></div>
                <div className="font-sans px-[10vw] py-4 ">
                    <h1 className="font-bold text-[21px]">{data?.cards[1]?.card?.card?.header?.title}</h1>
                    <div className="flex overflow-x-scroll overflow-y-hidden">
                        {
                            data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((value) => {
                                
                                return (
                                    <Link to={`/city/delhi/${value?.info?.id}`} key={value?.info?.id}>
                                    <div className=" mr-8 mt-4 w-[274px] h-[286px] " key={value.info.id}>
                                        <div className="relative w-[100%] h-[180px] mb-2"><img className="object-cover h-[100%] w-[100%] rounded-[20px] -z-10 absolute" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+value.info.cloudinaryImageId}></img></div>
                                        <div className="font-bold">{value.info.name}</div>
                                        <div className="flex items-center"><svg className="mr-1" width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#28a745"/><polygon points="12,4 14.09,9.26 20,9.27 15.5,13.14 17.6,19 12,15.77 6.4,19 8.5,13.14 4,9.27 9.91,9.26" fill="#ffffff"/></svg>{value.info.avgRatingString}<span className="font-[500] ml-1">·{value.info.sla.slaString}</span></div>
                                        <div className="w-[90%] overflow-hidden text-nowrap text-[#02060C99]">{value.info.cuisines.join(", ")}</div>
                                        <div className="text-[#02060C99]">{value.info.areaName}</div>
                                    </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="font-sans mt-8 px-[9vw] py-4 ">
                    <h1 className="font-bold text-[21px]">{data?.cards[2]?.card?.card?.title}</h1>
                    <div className="flex flex-wrap">
                        {
                            data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((value) => {
                                
                                return (
                                    <Link to={`/city/delhi/${value?.info?.id}`} key={value.info.id}>
                                    <div className=" mr-7 my-4 min-w-[265px] max-w-[265px] h-[286px] transform hover:scale-[0.92] transition-transform duration-300 ease-linear ">
                                        <div className="relative w-[100%] h-[180px] mb-2"><img className="object-cover h-[100%] w-[100%] rounded-[20px] -z-10 absolute" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+value.info.cloudinaryImageId}></img></div>
                                        <div className="font-bold">{value.info.name}</div>
                                        <div className="flex items-center"><svg className="mr-1" width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#28a745"/><polygon points="12,4 14.09,9.26 20,9.27 15.5,13.14 17.6,19 12,15.77 6.4,19 8.5,13.14 4,9.27 9.91,9.26" fill="#ffffff"/></svg>{value.info.avgRatingString}<span className="font-[500] ml-1">·{value.info.sla.slaString}</span></div>
                                        <div className="w-[90%] overflow-hidden text-nowrap text-[#02060C99]">{value.info.cuisines.join(", ")}</div>
                                        <div className="text-[#02060C99]">{value.info.areaName}</div>
                                    </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </main>
        </>
    )
}