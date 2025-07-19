import { Link, Outlet } from "react-router"
import { useSelector } from "react-redux";
const icon = new URL("../assets/icon.png",import.meta.url).href;

export default function SecondaryHeader() {
    const cartCount = useSelector(state => state.filterSlice.count);
    return (
        <>
            <div className="secHeader flex justify-between items-center px-25 h-20 w-[100vw] fixed top-0 z-10 bg-white">
                <div className="flex">
                    <Link to="/"><img src={icon} className="h-20 w-20 mr-8 object-cover cursor-pointer"></img></Link>
                    <button className="headerLoc flex items-center cursor-pointer">
                        <div className="font-semibold mr-3 text-[14px] border-b-2">Other</div>
                        <div className="flex text-[14px] text-[rgba(2,6,12,0.7)] font-[200]">Delhi,India<svg className="text-red-500 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg></div>
                    </button>
                </div>
                <div>
                    <Link to="/checkout">
                        <button className="flex items-center cursor-pointer">
                            <span className="h-5 w-5 mr-1.5">
                                <svg className="ppAwf vZTPh absolute -z-10" viewBox="-1 0 37 32" height="20" width="20" fill="#686b78"><path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path></svg>
                                <span className="relative bottom-[3px] text-[13px] text-white">{cartCount}</span>
                            </span>
                            Cart
                        </button>
                    </Link>
                </div>
            </div>
            <Outlet />
        </>

    )
}