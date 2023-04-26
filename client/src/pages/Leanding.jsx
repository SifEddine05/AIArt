import { Link } from "react-router-dom";
import Landing from "../assets/LeandingImg.png"
const Leanding = () => {
    return ( 
    <section className=" bg-[#FAEAE9] ">
       
        <div className="lg:my-[112px] md:my-[92px] sm:my-[72px] my-[42px] sm:flex  sm:flex-row flex flex-col    justify-around items-center">
            <div className="sm:max-w-[50%] sm:block flex flex-col justify-center items-center">
                <h3 className="lg:text-[48px] md:text-[40px] sm:text-[32px] text-[22px] font-bold lg:px-8 md:px-6 sm:px-4 px-2">Unleash Your Imagination with AI<span className="text-[#3330CC] ">Art</span></h3>
                <p className=" lg:px-12 md:px-10 sm:px-8 px-6  md:mt-4 mt-2 lg:text-[20px] md:text-[17px] text-[12px] ">Introducing AIArt, the revolutionary new platform that turns your words into stunning images. Whether you're a creative professional, an artist, or just looking for a fun way to express yourself,AIArt is the perfect solution.</p>
                <p className="lg:px-12 md:px-10 sm:px-8 px-6 md:mt-4 mt-2 lg:text-[20px] md:text-[17px] text-[12px]  ">Simply type in a description of the image you want, and watch as AIArt brings your vision to life.</p>
                
                <div className="lg:mt-6 md:mt-4 mt-2">
                    <Link  to='/home'className=" md:py-3 sm:py-2 py-1   sm:ml-[50%]  p-2 text-white  rounded-lg bg-[#3330CC] lg:text-[16px] md:text-[14px] text-[12px]  hover:bg-[#161470]">Get Started</Link>
                </div>
            </div>
            <div className="sm:w-[500px] w-[75%] sm:mt-0 mt-8 lg:pr-20 md:pr-16 sm:pr-14 pr-14 flex flex-col items-center justify-center">
                <img src={Landing} alt="Landing"  className="w-full"/>
            </div>
            
        </div>
    </section>
    );
}
 
export default Leanding;