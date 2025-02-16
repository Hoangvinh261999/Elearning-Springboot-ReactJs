import React, { useEffect, useState } from "react";
// import banner1 from "../../assets/images/banner/banner2.png"
// import banner2 from "../../assets/images/banner/banner3.png"
// import banner3 from "../../assets/images/banner/banner4.png"
// import banner4 from "../../assets/images/banner/banner5.png"
import ListBan from "./ListBanner";

const HomeSlide: React.FC = () => {
    const imgs=ListBan();
    const [curentIndex, setCurentIndex]=useState(0);
    useEffect(()=>{
        const intervalId=setInterval(()=>{
                setCurentIndex((preIndex)=>(preIndex+1)%imgs.length)

        },4000)

        return ()=>clearInterval(intervalId);
    },[imgs.length])

    return(
            <div className="w-full my-2 overflow-hidden   flex">
                <div className="w-full">
                            {imgs[curentIndex]}
                </div>
            </div>


    )
}
export default HomeSlide;