import { useDispatch, useSelector } from "react-redux";
import { AddItems, AddNew , IncrementItems, DecrementItems } from "./filterSlice";
import { useState } from "react";

export default function ItemDisplay({value,rest}) {
    const item = {...value,...rest};
    const element = useSelector(state => state.filterSlice.items.find(it => it.id===item.id));
    const dispatch = useDispatch();
    const [showPopup,setShowPopup] = useState(false);
    const [pendingItem,setPendingItem] = useState(null);
    const {count,items} = useSelector(state => state.filterSlice);
    return (
        <div className=" min-h-[200px] w-[100%] px-5 py-5 border-b-[1px] border-b-gray-300 flex justify-between">
            <div>
                <div className="text-[#02060CBF] text-[18px] font-bold">{value?.name}</div>
                <div className="font-semibold">&#8377;{("price" in value) ? value?.price/100 : value?.variantsV2?.pricingModels?.[0]?.price/100 }</div>
            </div>
            <div className="relative">
                <img className="w-[156px] h-[144px] rounded-[12px] object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+value?.imageId}></img>
                {!element?(<button className="absolute top-[120px] left-[20px] text-[#1BA672] font-semibold bg-white py-[7px] px-10 rounded-[10px] border-gray-300 border-[1px] cursor-pointer" onClick={()=>{
                    if(count===0) {
                        dispatch(AddItems(item));
                    }
                    else if(items[0].restId===item.restId) {
                        dispatch(AddItems(item));
                    }
                    else {
                        setPendingItem(item);
                        setShowPopup(true);
                    }
                }}>ADD</button>):(
                    <div className="flex w-29 h-10 items-center justify-between absolute top-[120px] left-[20px] text-[#1BA672] font-semibold bg-white rounded-[10px] border-gray-300 border-[1px]">
                        <button className="px-4 cursor-pointer" onClick={() => {dispatch(DecrementItems(item))}}>-</button>
                        <span className="text-[17px]">{element.quantity}</span>
                        <button className="px-4 cursor-pointer" onClick={() => {dispatch(IncrementItems(item))}}>+</button>
                    </div>
                )}
                <div className="text-[#02060C73] text-[13px] font-[200] text-center pt-5">Customisable</div>
            </div>
            {
                (showPopup) ? (
                <div className="z-10 fixed inset-0 bg-transparent flex justify-center">
                    <div className="max-w-130 p-10 bg-gray-800 absolute bottom-20 text-white">
                        <h1 className="font-semibold text-[20px]">Items already in cart</h1>
                        <p className="text-[14px] font-[200] pb-6">Your cart contains items from other restaurant. Would you like to reset your cart for adding items from this restaurant?</p>
                        <div className="flex justify-between gap-6">
                            <button onClick={() => {
                                setShowPopup(false);
                            }} className="w-[50%] py-3 border-2 border-green-300 font-semibold text-green-300 cursor-pointer">NO</button>
                            <button onClick={() => {
                                dispatch(AddNew(pendingItem));
                                setShowPopup(false);
                            }} className="w-[50%] py-3 border-2 border-green-300 font-semibold text-green-300 cursor-pointer">YES, START AFRESH</button>
                        </div>
                    </div>
                </div>) : (null)
            }
        </div>
    )
}