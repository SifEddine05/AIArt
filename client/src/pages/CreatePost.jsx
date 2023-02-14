import { useState } from "react";
import Load from "../assets/preview.png"

const CreatePost = () => {
    const [name,setName]=useState('')
    const [description,setDescription]=useState('')
    return ( 
    <section className="w-full mx-auto flex flex-col justify-center items-center">
        <div className="self-center ">
            <h1 className="font-extrabold text-center text-[#222328] lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] ">Create Image</h1>
            <p className="mt-2 text-center text-[#666e75] md:text-[18px] text-[12px] max-w-[500px]">Create imaginative and visually stunning images through AIArt and share them with the community </p>
         </div>
         <div className="flex flex-col justify-around w-[75%] mx-auto items-center mt-10">
            <div className="flex flex-col justify-center items-start w-[65%]">
                <label htmlFor="name" className="opacity-85 lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]" > Your Name</label>
                <input name="name" type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="SifEddine" className="bg-[#C3B5B5] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-full rounded-md text-[#000] p-2" />
            </div> 
            <div className="flex flex-col justify-center items-start w-[65%] ">
                <div className="flex justify-between w-full items-center p-1">
                    <label htmlFor="description" rows="2" className=" self-end opacity-85 lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]" > Description</label>
                    <button className="lg:mt-5 md:mt-4 sm:mt-3 mt-2  rounded-lg bg-[#3330CC] hover:bg-[#0e0d62] p-1 text-white">Suprise me</button>
                </div>
                <textarea name="description" type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="A man walking through the bustling streets of Kowloon at night, lit by many bright neon shop signs, 50mm lens" className="bg-[#C3B5B5] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-full rounded-md text-[#000] p-2" />
            </div> 
           <div className="w-[200px]  bg-[#D9D9D9] mt-5 rounded-md border-2">
                <img src={Load} alt="load" />
           </div>
           <button className="rounded-full px-2 py-1 mt-1 bg-[#199F16] hover:bg-[#0b580a] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] text-white">Generate</button>
           <div className="w-[65%] flex flex-col justify-center items-center ">
                <button className=" self-end rounded-lg px-2 py-1 mt-1 bg-[#3330CC] hover:bg-[#0e0d62] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] text-white">Share it with the community </button>
           </div>
        </div>
    </section> );
}
 
export default CreatePost;