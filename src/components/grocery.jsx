import groceries from "../utils/groceryData";


export default function Groceries() {
    return (
        <div className="mt-30 font-bold">
            <div className="mb-8 text-[24px]">Shop groceries on Instamart</div>
            <div className="flex overflow-x-scroll">
                {
                    groceries.map((value) => {
                        return (
                            <div key={value.id} className="mr-15 w-full">
                                <button className="w-36 h-45"><img src={`https://media-assets.swiggy.com/swiggy/image/upload/${value.imageId}`}></img></button>
                                <div className="text-[#02060CBF] text-center text-[20px]">{value.action.text}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}