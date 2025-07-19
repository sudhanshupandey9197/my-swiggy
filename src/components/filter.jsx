import { useState } from "react";
import { useSelector } from "react-redux";
import ItemDisplay from "./itemDisplay";

export default function FilterCard({value,rest}) {

    const [isOpen,setIsOpen] = useState(true);

    if("itemCards" in value?.card?.card) {
        if(!isOpen) {
            return (
                <button className="cursor-pointer flex justify-between w-[100%] px-5 pt-6 border-t-15 border-gray-100 mt-8" onClick={()=>{setIsOpen(!isOpen)}}><div className="font-bold text-[18px]">{value?.card?.card?.title}</div>{isOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>}</button>
            )
        }
        else {
            return (
                <>
                    <button className="cursor-pointer flex justify-between w-[100%] px-5 pt-6 border-t-15 border-gray-100 mt-8" onClick={()=>{setIsOpen(!isOpen)}}><div className="font-bold text-[18px]">{value?.card?.card?.title}</div>{isOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>}</button>
                    {value?.card?.card?.itemCards?.map((val) => {
                        return <ItemDisplay value={val?.card?.info} rest={rest} key={val?.card?.info?.id} ></ItemDisplay>
                    })}
                </>
            )
        }
    }
                
}