import restaurants from "../utils/dineOut";

export default function DineOut() {
    return (
        <div className="mt-30">
            <div className="mb-8 text-[24px] font-bold">Discover best restaurants on Dineout</div>
            <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
                {
                    restaurants.map((value) => {
                        return (
                            <a href={value.cta.link} key={value.info.id}>
                            <div className="min-w-82 h-102 border-gray-100 border-1 rounded-[16px] overflow-hidden">
                                <div className="relative h-[189px]">
                                    <img className="absolute -z-10 h-full w-full object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/${value.info.mediaFiles[0].url}`}></img>
                                    <div className="text-white font-bold text-[20px] inline-block absolute bottom-3 left-3 max-w-60">{value.info.name}</div>
                                    <div className=" text-white font-[400] text-[16px] inline-block absolute bottom-3 right-3">{value.info.rating.value}</div>
                                    <div className="absolute bottom-0 left-0 w-full h-[45%] bg-gradient-to-t from-black to-transparent -z-10"></div>
                                </div>
                                <div className="flex justify-between pt-2 px-3 font-[200] text-[13px]">
                                    <div>{value.info.cuisines[0]}.{value.info.cuisines[1]}</div>
                                    <div>{value.info.costForTwo}</div>
                                </div>
                                <div className="flex justify-between px-3 font-[200] text-[13px]">
                                    <div>{value.info.locationInfo.formattedAddress}</div>
                                    <div>{value.info.locationInfo.distanceString}</div>
                                </div>
                                <div className="mx-3 bg-[#F0F0F5] py-[2px] px-[6px] mt-[8px] rounded-[12px] font-[200] text-[13px] flex justify-center max-w-[110px]">Table booking</div>
                                <div className="bg-[#1BA672] p-2 mt-3 mx-3 rounded-[8px] text-white font-bold text-[14px]">Flat 20% off on pre-booking</div>
                                <div className="bg-[#C8F9E5] p-2 mt-3 mx-3 rounded-[8px] text-[#1BA672] font-[200] text-[16px]">Up to 10% off with bank offers</div>
                            </div>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}