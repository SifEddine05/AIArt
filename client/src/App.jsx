import React from "react"
import { BrowserRouter,Link ,Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import CreatePost from "./pages/CreatePost"
import Leanding from "./pages/Leanding" 
import Logo from "./assets/logo.svg"
function App() {

  return (
   <BrowserRouter >
     <header className=" text-[#000] flex justify-between items-center p-3 lg:h-[75px] md:h-[60px] sm:h-[45px] h-[30px] bg-[#FAEAE9] ">
            <Link to='/' className="font-bold lg:text-[34px] md:text-[28px] sm:text-[20px] text-[12px] ">AI<span className="text-[#3330CC] ">Art</span></Link>
            <div className="flex justify-end items-center ">
                <Link to='/create' className="md:px-4 px-2  md:py-2 py-1  rounded-full lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] bg-[#3330CC] text-white hover:bg-[#161470]">Create Image</Link>
            </div>
        </header> 
    <main className=" text-[#000] bg-[#FAEAE9] w-full py-2 px-4 sm:p-8  lg:h-[calc(100vh-75px)] md:h-[calc(100vh-60px)] sm:h-[calc(100vh-45px)] h-[calc(100vh-30px)]  ">
      <Routes>
        <Route path="/" element={<Leanding />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<CreatePost />}/>

      </Routes>
    </main>
   </BrowserRouter>
  )
}

export default App
