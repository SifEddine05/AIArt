import imggg from "../assets/imggg.png"
import down from "../assets/download.png"

const Card = () => {
    return (
        <div className="lg:w-[275px] md:w-[200px] sm:w-[150px] w-[125px] relative group rounded-xl group  ">
            <img src={imggg} alt="image"  className="rounded-xl"/>
            <div className=" group-hover:block hidden absolute bottom-0 rounded-b-xl bg-opacity-75 z-0 md:p-2 p-1 bg-[#D9D9D9] w-full h-[40%]">
                <h3 className="font-bold lg:text-[16px] md:text-[14px] sm:text-[12px] text-[8px] leading-1	">Sifou  </h3>
                <p className="lg:text-xs md:text-[10px] sm:text-[8px] text-[6px] md:leading-3  sm:leading-[10px] leading-[8px]	">3D render of a cute tropical fish in an aquarium on a dark blue background, digital art</p>
                <button className="absolute right-2 bottom-1 lg:w-5 md:w-4  w-3"><img src={down} alt="download" /></button>
            </div>
        </div>
        );
}
 
export default Card;