import React from "react";

const HeaderBar = () => {
  return (
<div className="bg-gradient-to-r from-[#8a634a] via-[#26af5a] to-[#1f77c9] flex items-center justify-between px-4 py-2 text-white shadow-md">
      <div className="flex items-center space-x-2">
        <div className="bg-blue-300-500 text-white font-bold px-2 py-1 rounded-md"><span className="">VINEDU</span></div>
        <span className="text-sm">Xây Dựng Website với ReactJS</span>
      </div>

      <div className="flex items-center space-x-4">
        <div className="text-sm font-bold">
          <span className="text-orange-400">79%</span> <span className="text-gray-300">94/118 bài học</span>
        </div>
        <button className="text-gray-300 hover:text-white text-sm font-bold">📄 Ghi chú</button>
        <button className="text-gray-300 hover:text-white text-sm font-bold">❓ Hướng dẫn</button>
      </div>
    </div>
  );
};

export default HeaderBar;
