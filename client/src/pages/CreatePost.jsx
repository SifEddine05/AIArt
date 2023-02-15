import { useState } from "react";
import Load from "../assets/preview.png"
import Loader from "../components/Loader";
import { surpriseMePrompts } from "../constant";
const CreatePost = () => {
    const [name,setName]=useState('')
    const [description,setDescription]=useState('')
    const [Err,setErr]=useState(false)
    const [image,setImage]=useState(Load)//this load photo must uploaded to cloudinary to use his url directly
    const [load ,setLoad]=useState(false)
    const [message , setMsg]=useState('')
    const handleGenerate =()=>{
        setErr(false)
        console.log(name ,description);
        if(name==='' || description==='')
        {
            setMsg('Please fill all the fildes')
            setErr(true)
        }
        else{
            // avant traitement 
            setLoad(true)
            // generate the image and put it in cloudinary 

            //After traitement 
           setLoad(false)
            setImage('https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
        }
    }

const handleShare=()=>{
    setErr(false)
    if(image==Load) //replaced by url
    {
        setErr(true)
        setMsg('Please generate an image firstly')
    }
    else{
              // fetch to post it with the shared files
    }
}
const handleSurprise =()=>{
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    let i = getRandomInt(surpriseMePrompts.length)
    setDescription(surpriseMePrompts[i])
}

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
                    <button onClick={handleSurprise} className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] lg:mt-5 md:mt-4 sm:mt-3 mt-2  rounded-lg bg-[#3330CC] hover:bg-[#0e0d62] p-1 text-white">Suprise me</button>
                </div>
                <textarea name="description" type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="A man walking through the bustling streets of Kowloon at night, lit by many bright neon shop signs, 50mm lens" className="bg-[#C3B5B5] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-full rounded-md text-[#000] p-2" />
            </div> 
           {load && <div className="   lg:w-[160px] md:w-[100px] sm:w-[80px] w-[70px]  bg-[#D9D9D9] lg:mt-5 md:mt-4 sm:mt-3 mt-2 rounded-md border-2">
                 <div className="relative ">
                    <Loader  />
                    <img src={image} alt="load" className="opacity-50"/>
                 </div>
          </div>}
           {!load && <div className="lg:w-[160px] md:w-[100px] sm:w-[80px] w-[70px]  bg-[#D9D9D9] lg:mt-5 md:mt-4 sm:mt-3 mt-2 rounded-md border-2">
                <img src={image} alt="load" className=""/>
           </div>}
          {Err && <h3 className=" text-red-600 font-semibold lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]">{message}</h3>}
           <button className="rounded-full px-2 py-1 mt-1 bg-[#199F16] hover:bg-[#0b580a] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] text-white" onClick={handleGenerate}>Generate</button>
           <div className="w-[65%] flex flex-col justify-center items-center ">
                <button className=" self-end rounded-lg px-2 py-1 mt-1 bg-[#3330CC] hover:bg-[#0e0d62] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] text-white" onClick={handleShare}>Share it with the community </button>
           </div>
        </div>
    </section> );
}
 
export default CreatePost;