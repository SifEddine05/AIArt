import { useState } from "react";
import Load from "../assets/preview.png"
import Loader from "../components/Loader";
import { surpriseMePrompts } from "../constant";
import {useNavigate } from "react-router-dom"
import down from "../assets/download.png"
import FileSaver from "file-saver";
const CreatePost = () => {
    const [name,setName]=useState('')
    const [description,setDescription]=useState('')
    const [Err,setErr]=useState(false)
    const [image,setImage]=useState(Load)//this load photo must uploaded to cloudinary to use his url directly
    const [load ,setLoad]=useState(false)
    const [message , setMsg]=useState('')
    const navigate = useNavigate()


    const Download =()=>{
        setErr(false)
        if(image==='')
        {
            setMsg('Please generate an image first ')
            setErr(true)

        }
        else{
            FileSaver.saveAs(image , "download-AIArt-Image.png" )
        }
    }
    const handleGenerate =()=>{
        setErr(false)
        if(name==='' || description==='')
        {
            setMsg('Please fill all the fildes')
            setErr(true)
        }
        else{
            // avant traitement 
            setMsg('Please wait the operation will take 1 or 2 minutes ')
            setLoad(true)
            setErr(true)
            // generate the image and put it in cloudinary 
            fetch("http://localhost:8000/createphoto", { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                   },
                   body: JSON.stringify({
                    "prompt" : description
                  })
              }).then(res=>{
                 return res.json()
              }).then(data=>{
                setLoad(false)
                setErr(false)
                setImage(data.photo)
              }).catch(err=>{
                setErr(true)
                setMsg("Error in getting file ")
              })
        }
    }

const handleShare=()=>{
    setErr(false)
    if(image==='') //replaced by url
    {
        setErr(true)
        setMsg('Please generate an image firstly')
    }
    else{
        fetch("http://localhost:8000/addPost", { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                   },
                   body: JSON.stringify({
                    
                        "name" :name , 
                        "description" :  description, 
                        "image" : image
            
                  })
              }).then(res=>{
                 return res.json()
              }).then(data=>{

                navigate('/home')
            }).catch(err=>{
                setErr(true)
                setMsg("Error in sharing ")
              })
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
            <div className="flex flex-col justify-center items-start md:w-[65%] w-[100%]">
                <label htmlFor="name" className="opacity-85 lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]" > Your Name</label>
                <input name="name" type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="SifEddine" className="bg-[#C3B5B5] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-full rounded-md text-[#000] p-2" />
            </div> 
            <div className="flex flex-col justify-center items-start  md:w-[65%] w-[100%] ">
                <div className="flex justify-between w-full items-center p-1">
                    <label htmlFor="description" rows="2" className=" self-end opacity-85 lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]" > Description</label>
                    <button onClick={handleSurprise} className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] lg:mt-5 md:mt-4 sm:mt-3 mt-2  rounded-lg bg-[#3330CC] hover:bg-[#0e0d62] p-1 text-white">Suprise me</button>
                </div>
                <textarea name="description" type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="A man walking through the bustling streets of Kowloon at night, lit by many bright neon shop signs, 50mm lens" className="bg-[#C3B5B5] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] w-full rounded-md text-[#000] p-2" />
            </div> 
           {load && <div className="   lg:w-[160px] md:w-[100px] w-[100px]   bg-[#D9D9D9] lg:mt-5 md:mt-4 sm:mt-3 mt-2 rounded-md border-2">
                 <a href={image} className="relative ">
                    <Loader  />
                    <img src={image} alt="load" className="opacity-50"/>
                 </a>
          </div>}
           {!load && <a href={image} className="lg:w-[160px] md:w-[100px] w-[100px]  bg-[#D9D9D9] mt-5  rounded-md border-2">
                <img src={image} alt="load" className=""/>
           </a>}
          {Err && <h3 className=" text-red-600 font-semibold lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]">{message}</h3>}
           <button className="rounded-full px-2 py-1 mt-1 bg-[#199F16] hover:bg-[#0b580a] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] text-white" onClick={handleGenerate}>Generate</button>
           <div className="w-[65%] flex flex-col justify-center items-center ">
            <div className="self-end flex items-center mt-4 ">
                <button onClick={Download}  className=" rounded-lg px-2 py-1 mt-1 lg:w-10 md:w-9 sm:w-8 w-7 bg-[#199F16] hover:bg-[#0b580a] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] text-white" ><img src={down} alt="download" /></button>
                <button className="  rounded-lg px-2 py-1 mt-1 bg-[#3330CC] hover:bg-[#0e0d62] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] text-white" onClick={handleShare}>Share it with the community </button>
            </div>
                
           </div>
        </div>
    </section> );
}
 
export default CreatePost;