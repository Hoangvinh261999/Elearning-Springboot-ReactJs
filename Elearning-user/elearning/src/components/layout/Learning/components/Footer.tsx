import React from "react";

const FooterLearning: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-0.5 bg-gray-100 border-t border-gray-300 text-sm h-10">
      <div className="flex gap-1">
        <button className="flex items-center px-2 py-1 border rounded-full text-blue-600 border-blue-400 hover:bg-blue-50 text-xs">
          &lt; Bài trước
        </button>
        <button className="flex items-center px-2 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 text-xs">
          Bài tiếp theo &gt;
        </button>
      </div>
      <div className="flex items-center gap-1 text-gray-700">
        <span className="text-xs">10. Xây dựng phần Header</span>
        <button className="p-1 bg-gray-200 rounded-full hover:bg-gray-300 text-xs">
          →
        </button>
      </div>
    </div>
  );
};

export default FooterLearning;
