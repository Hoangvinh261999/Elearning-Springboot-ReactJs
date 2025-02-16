import React from "react";

type Blog = {
  title: string;
  author: string;
  readTime: string;
  image: string;
};

const blogs: Blog[] = [
  {
    title: "Tổng hợp các nội dung mới VINEDU",
    author: "Vinh Dev",
    readTime: "6 phút đọc",
    image: "https://th.bing.com/th/id/OIP.BEDsotthjDnPSlvKBfxbpQHaCk?w=284&h=121&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    title: "[Phần 1] Tạo dự án Springboot",
    author: "Vinh Dev",
    readTime: "12 phút đọc",
    image: "https://th.bing.com/th/id/OIF.CATO0qRv9eR0McIDO4xtfg?w=238&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    title: "Cách đưa code lên GitHub",
    author: "Vo Minh Kha",
    readTime: "4 phút đọc",
    image: "https://th.bing.com/th/id/OIP.FZGVRUnLT0WHCUnE3lPNrwHaF7?w=221&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    title: "Làm quen với NetBeans",
    author: "Vinh Nguyễn",
    readTime: "1 phút đọc",
    image: "https://th.bing.com/th/id/OIP.Wcv-IWlAx--8ed46LAw6UwHaD_?w=325&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    title: "Làm quen với Eclipses",
    author: "Dev Lord",
    readTime: "2 phút đọc",
    image: "https://th.bing.com/th/id/OIP.AkvUWGkguaFzMc6O5eMuFQHaFY?w=218&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
    {
    title: "Java Swing cơ bản",
    author: "Dev Lord",
    readTime: "2 phút đọc",
    image: "https://th.bing.com/th/id/OIP.xpwkhvvnXg4-lcOlllXU8gHaFS?w=232&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
    {
    title: "làm quen với lập trình hướng đối tượng.",
    author: "Dev Lord",
    readTime: "2 phút đọc",
    image: "https://th.bing.com/th/id/OIP.hrAphQq-opx7Z3WFwURF1wHaGn?w=224&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  }
];

const BlogList: React.FC = () => {
  return (
<div className="grid grid-cols-6 gap-4 p-4">
  {blogs.map((blog, index) => (
<a href="/chitietbaiviet">
      <div
      key={index}
      className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg"
    >
      <div className="overflow-hidden rounded-md">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-40 object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <h3 className="mt-2 text-lg font-bold">{blog.title}</h3>
      <p className="text-sm text-gray-600"><text className="font-bold">{blog.author}</text> • {blog.readTime}</p>
    </div>
</a>
  ))}
</div>

  );
};

export default BlogList;
