import { Link } from "react-router";

const swiggyLogo = new URL('../assets/swiggyLogo.png', import.meta.url).href;


export default function Header() {

    return (
        <header className="bg-[#ff5200] font-sans">
            <div className="nav_bar flex mx-27 justify-between p-8">
                <img className="swiggyLogo min-w-40 h-12" src={swiggyLogo} alt="swiggyLogo" />
                <div className="flex text-white items-center gap-8 font-bold">
                    <a target="_blank" href="https://www.swiggy.com/corporate/" >Swiggy Corporate</a>
                    <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
                    <a className="border-white border-1 rounded-[12px] px-4 py-3" target="_blank">Get the App</a>
                    <a className="bg-black rounded-[16px] px-11 py-3.5" target="_blank">Sign In</a>
                </div>
            </div>
            <div className="flex flex-col items-center pt-16 relative">
                <img className="headerImage w-[250px] h-[450px] absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                <img className="headerImage w-[250px] h-[450px] absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
                <div className="text-white text-center font-bold text-[48px] text-wrap max-w-[60%] leading-14 ">Order food & groceries. Discover best restaurants. Swiggy it!</div>
                <div className="inputContainer p-8">
                    <input className="bg-white border-gray-300 border-2 max-w-3xs p-4 rounded-xl mr-5 mb-4 outline-none" placeholder="Delhi, India"></input>
                    <input className="largeInput bg-white border-gray-300 border-2 min-w-md p-4 rounded-xl outline-none" placeholder="Search for restaurant, item or more"></input>
                </div>
            </div> 
            <div className="flex flex-wrap justify-center pb-5">
                <Link to="/restaurant"><img className="h-75 w-81" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img></Link>
                <Link to="/restaurant"><img className="h-75 w-81" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img></Link>
                <Link to="/restaurant"><img className="h-75 w-81" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img></Link>
            </div>
        </header>
    )
}