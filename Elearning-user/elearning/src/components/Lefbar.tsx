import React from "react";
import courseImage from '../assets/images/course.png';
import roadMap from '../assets/icons/roadmap.png';
import blog from '../assets/icons/blog.png';
import homepage from '../assets/icons/homepage.png';
import meo from "../assets/images/meo.png"

const LeftBar: React.FC=()=>{

    return(
        <div className=" text-black ">
 
<nav className="space-y-4 p-4 ">
 
   <a
    href="/"
    className="flex items-center gap-x-3 px-3 py-2 rounded-lg transition hover:bg-orange-300 hover:bg-opacity-80"
  >
    <img src={homepage} alt="Trang chủ" className="w-6 h-6" />
    <span className="text-sm font-semibold text-gray-700">Trang chủ</span>
  </a>

  <a
    href="/danhmuckhoahoc"
    className="flex items-center gap-x-3 px-3 py-2 rounded-lg  transition hover:bg-orange-300 hover:bg-opacity-80"
  >
    <img src={courseImage} alt="Khoá Học" className="w-6 h-6" />
    <span className="text-sm font-semibold text-gray-700">Khoá Học</span>
  </a>

  <a
    href="/lotrinh"
    className="flex items-center gap-x-3 px-3 py-2 rounded-lg transition hover:bg-orange-300 hover:bg-opacity-80"
  >
    <img src={roadMap} alt="Lộ trình" className="w-6 h-6" />
    <span className="text-sm font-semibold text-gray-700">Lộ trình</span>
  </a>

  <a
    href="/blog"
    className="flex items-center gap-x-3 px-3 py-2 rounded-lg transition hover:bg-orange-300 hover:bg-opacity-80"
  >
    <img src={blog} alt="Blog" className="w-6 h-6" />
    <span className="text-sm font-semibold text-gray-700">Blog</span>
  </a>


</nav>

</div>

    );
  
}
  export default LeftBar;