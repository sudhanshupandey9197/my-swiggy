import foodData from "../utils/foodData"

export default function FoodItems() {
    return (
        <div className="flex flex-wrap flex-col overflow-x-scroll h-90">
            {
                foodData.map((value) => {
                    return (
                        <button key={value.id}><img className="w-36 h-45" src={`https://media-assets.swiggy.com/swiggy/image/upload/${value.imageId}`} ></img></button>
                    )
                })
            }
        </div>
    )
}