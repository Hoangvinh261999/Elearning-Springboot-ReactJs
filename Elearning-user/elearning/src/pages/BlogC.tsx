import React, { useState } from "react";


const posts = [
  {
    author: "Huỳnh Kim Huy",
    title: "Lập trình hướng đối tượng",
    content: "Em đã mua khóa HTML CSS Pro và JS Pro, em thấy trong chương không có phần lập trình hướng đối tượng...",
    time: "2 ngày trước",
    readTime: "1 phút đọc"
  },
  {
    author: "Nguyễn Văn A",
    title: "React Hooks là gì?",
    content: "React Hooks giúp bạn sử dụng state và các tính năng khác của React mà không cần viết class...",
    time: "3 ngày trước",
    readTime: "2 phút đọc"
  },
  {
    author: "Trần Thị B",
    title: "Tìm hiểu về Tailwind CSS",
    content: "Tailwind CSS là một framework CSS tiện dụng, giúp bạn tạo giao diện đẹp mà không cần viết nhiều CSS...",
    time: "1 tuần trước",
    readTime: "3 phút đọc"
  }
];

const BlogPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const toggleMenu = (index: number) => {
    setIsOpen(isOpen === index ? null : index);
  };


  return (
    <div className="mt-1">
       <div className="text-left font-bold lg:mt-2 mt-1">
        Trang blog, chia sẻ kiến thức lập trình
       </div>
       <div className="p-2 flex lg:gap-2 my-2 text-sm w-full items-start">
     
      <div className="w-3/4 items-start gap-2">
        {posts.map((post, index) => (
          <div key={index} className="flex items-start mt-2 gap-2 shadow-md rounded-lg border border-gray-200 lg:p-4 p-2">
            <div className="w-5/6">
              <div className="flex gap-2 ">
<div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
  <img src="/image/vinh.png" alt="" className="w-full h-full object-cover" />
</div>

                <a href="#" className="content-center">
                  <p className="font-medium text-gray-700 ">{post.author}</p>
                </a>
              </div>
              <div>
                 <a href="/chitietbaiviet" className="text-gray-700">
                <h2 className="text-left font-bold text-lg text-gray-900 mt-1 hover:text-yellow-700 transition">{post.title}</h2>
           
                  <p className="text-left text-gray-600 mt-1 line-clamp-2  hover:text-yellow-700 transition">{post.content}</p>
                </a>
                <div className="text-sm text-gray-500 mt-2 flex items-center gap-2">
                  <span>{post.time}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
            <div className="w-1/6 relative flex justify-end lg:gap-3 gap-1">
              <button>
                <img src="/image/bookmark.png" alt="Bookmark" />
              </button>
              <button onClick={() => toggleMenu(index)}>
                <img src="/image/3cham.png" alt="Menu" />
              </button>

              {isOpen === index && (
                <div className="absolute top-6 right-0 bg-white rounded-md shadow-lg z-10">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Share via Email</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Share on Facebook</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Share on Twitter</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Copy Link</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/4 ">
 <div className=" p-2 bg-white   block">
  <aside className="space-y-3">
    <h3 className="text-lg font-semibold text-gray-800">Xem các bài viết theo chủ đề</h3>
    <ul className="space-y-2">
      <li>
        <a
          href="/blog/topic/front-end-mobile-apps"
          className="block px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-blue-500 hover:text-white transition"
        >
          Front-end / Mobile apps
        </a>
      </li>
      <li>
        <a
          href="/blog/topic/back-end-devops"
          className="block px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-blue-500 hover:text-white transition"
        >
          Back-end / DevOps
        </a>
      </li>
      <li>
        <a
          href="/blog/topic/ui-ux-design"
          className="block px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-blue-500 hover:text-white transition"
        >
          UI / UX / Design
        </a>
      </li>
      <li>
        <a
          href="/blog/topic/others"
          className="block px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-blue-500 hover:text-white transition"
        >
          Others
        </a>
      </li>
    </ul>
  </aside>
        <img src="/image/programming8.jpg " alt="" />

</div>


      </div>
    </div>
    </div>
    
  );
};

export default BlogPage;
