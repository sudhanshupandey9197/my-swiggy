import FoodItems from "./foodItems"
import Groceries from "./grocery"
import DineOut from "./dineOut"
import FoodDelivery from "./foodDelivery"
import GroceryDelivery from "./groceryDelivery"

const appBanner = new URL("../assets/appBanner.png", import.meta.url).href;

export default function Main() {
    return (
        <>
            <div className="mx-36 mt-30 mainCards">
                <FoodItems />
                <Groceries />
                <DineOut />
            </div>
            <img src={appBanner} className="w-[100vw] object-cover mt-20"></img>
            <div className="flex justify-center"><FoodDelivery /></div>
            <div className="flex justify-center"><GroceryDelivery /></div>
        </>
    )
}