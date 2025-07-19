import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { IncrementItems, DecrementItems } from "./filterSlice";

export default function CartSection() {
    const {count,items} = useSelector(state => state.filterSlice);
    const dispatch = useDispatch();

    if(count===0) {
        return (
            <div className="flex flex-col gap-1.5 h-[100vh] justify-center items-center">
                <h1 className="font-bold text-[20px]">Your cart is empty</h1>
                <p className="text-[14px] font-[200]">You can go to home page to view more restaurants</p>
                <Link to="/restaurant"><button className="text-white bg-orange-600 px-4 py-2 mt-6 cursor-pointer">SEE RESTAURANTS NEAR YOU</button></Link>
            </div>
        )
    }
    
    const id = items[0].restId;
    const distance = items[0].restDistance;
    let itemsTotalPrice = 0;
    let deliveryFee = distance*16.15;
    let tax = Number((items.length*4.3).toFixed(2));
    return(
        <div className="bg-gray-100  min-h-[100vh] w-[100%] flex flex-col items-center pt-20">
            <nav className=" mb-10 w-[40%]">
                <Link to="/" className="mr-[5px] text-[12px] ">Home /</Link>
                <Link to="/restaurant" className="mr-[5px] text-[12px] ">Restaurants </Link>
            </nav>
            <div className="cart bg-white w-[40%] max-h-fit px-10 py-10 mb-10 ">
                
                <Link to={`/city/delhi/${id}`}><svg className="_2JL3g mr-5" viewBox="0 0 32 32" height="18" width="18"><path d="M3.333 14.984l28.667-0v2.097l-0.16 0.006h-28.506l-0.16-0.16v-1.782l0.16-0.16zM1.114 14.986l10.079-10.079 0.121-0.108 1.465 1.467-0.101 0.127-10.079 10.079h-0.226l-1.26-1.26v-0.226zM12.679 25.676l0.108 0.117-1.468 1.484-0.126-0.115-10.079-10.079v-0.226l1.26-1.26h0.226l10.079 10.079zM3.268 12.87l0.272 0.116-0.022 6.125-0.272 0.114-3.245-3.18 0.111-0.112 3.157-3.062z"></path></svg></Link>
                <Link to={`/city/delhi/${items[0].restId}`}>
                <div className="flex py-5 cursor-pointer">
                    <img className="h-20 w-20 mr-4 " src={"https://media-assets.swiggy.com/swiggy/image/upload/"+items[0].restImageId}></img>
                    <div>
                        <h1 className="font-bold text-[24px] ">{items[0].restName}</h1>
                        <p className="text-[16px] font-[200]">{items[0].restArea}</p>
                    </div>
                </div>
                </Link>
                <div className="pb-5">
                    {items.map((item)=>{
                        const itemPrice = "price" in item ? (item?.price/100)*item.quantity : (item?.variantsV2?.pricingModels?.[0]?.price/100)*item.quantity;
                        itemsTotalPrice += itemPrice;
                        return (
                            <div className="cartItems flex  justify-between items-center  px-5 py-5 my-2 rounded-[20px]" key={item.id}>
                                <div className="my-2 mr-5 text-wrap">{item.name}</div>
                                <div className="flex justify-between items-center min-w-50">
                                    <div className="flex w-29 h-10 items-center justify-between text-[#1BA672] font-semibold bg-white rounded-[10px] border-gray-300 border-[1px]">
                                        <button className="px-4 cursor-pointer" onClick={() => {dispatch(DecrementItems(item))}}>-</button>
                                        <span className="text-[17px]">{item.quantity}</span>
                                        <button className="px-4 cursor-pointer" onClick={() => {dispatch(IncrementItems(item))}}>+</button>
                                    </div>
                                    <div className="ml-3">&#8377;{itemPrice}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <h1 className="font-semibold my-4">Bill Details</h1>
                <div className="flex justify-between font-[200] text-gray-700 text-[14px] my-1">
                    <div>Item Total</div>
                    <div>&#8377;{itemsTotalPrice}</div>
                </div>
                <div className="flex justify-between font-[200] text-gray-700 text-[14px] my-1">
                    <div>Delivery Fee | {distance}km</div>
                    <div>&#8377;{deliveryFee.toFixed(2)}</div>
                </div>
                <div className="flex justify-between font-[200] text-gray-700 text-[14px] my-1">
                    <div>GST & Other Charges</div>
                    <div>&#8377;{tax}</div>
                </div>
                <div className="border-b-2 my-4"></div>
                <div className="flex justify-between font-semibold">TO PAY
                    <span>&#8377;{(itemsTotalPrice+deliveryFee+tax).toFixed(2)}</span>
                </div>
            </div>
        </div>
    )
    
}