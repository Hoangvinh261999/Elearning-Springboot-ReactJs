import React, { useState } from "react";

interface Lesson {
  id: number;
  title: string;
  duration: string;
}

interface Chapter {
  id: number;
  title: string;
  lessons: Lesson[];
}

const blogDetails = {
  title: "Kiến Thức Nhập Môn IT",
  description:
    "Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.",
  benefits: [
    "Các kiến thức cơ bản, nền móng của ngành IT",
    "Các khái niệm, thuật ngữ cốt lõi khi triển khai ứng dụng",
    "Các mô hình, kiến trúc cơ bản khi triển khai ứng dụng",
    "Hiểu hơn về cách internet và máy vi tính hoạt động",
  ],
  duration: "03 giờ 26 phút",
  totalLessons: 12,
  chapters: [
    {
      id: 1,
      title: "Khái niệm kỹ thuật cần biết",
      lessons: [
        { id: 1, title: "Mô hình Client - Server là gì?", duration: "11:35" },
        { id: 2, title: "Domain là gì? Tên miền là gì?", duration: "10:34" },
        { id: 3, title: "Mua áo F8 | Đăng ký học Offline", duration: "01:00" },
      ],
    },
    {
      id: 2,
      title: "Môi trường, con người IT",
      lessons: [{ id: 4, title: "Bài học 1", duration: "12:20" }],
    },
    {
      id: 3,
      title: "Phương pháp, định hướng",
      lessons: [{ id: 5, title: "Bài học 2", duration: "15:45" }],
    },
    {
      id: 4,
      title: "Hoàn thành khóa học",
      lessons: [{ id: 6, title: "Bài học 3", duration: "08:10" }],
    },
  ],
};

const BlogDetail: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className=" p-6 flex gap-6">
      <div className="text-left w-2/3">
        <h1 className="text-3xl font-bold text-gray-800">{blogDetails.title}</h1>
        <p className="mt-2 text-gray-600">{blogDetails.description}</p>

 <div className="mt-4 ">
  <h2 className="text-xl font-semibold text-gray-800">Bạn sẽ học được gì?</h2>
  <ul className="grid grid-cols-2 gap-x-6  text-gray-700">
    {blogDetails.benefits.map((benefit, index) => (
      <li key={index} className="mb-2 flex"> <img src="/image/tick.png" className="h-2/3" alt="Tick" />{benefit}</li>
    ))}
  </ul>
</div>


        <div className="mt-6 border-t pt-4">
          
          <h2 className="text-xl font-semibold text-gray-800">Nội dung khóa học</h2>
          <p className="text-gray-600">
            {blogDetails.chapters.length} chương • {blogDetails.totalLessons} bài học • Thời lượng{" "}
            {blogDetails.duration}
          </p>

          {blogDetails.chapters.map((chapter) => (
            <div key={chapter.id} className="mt-4 border rounded-lg p-4">
              
              <button
                onClick={() => setExpanded(expanded === chapter.id ? null : chapter.id)}
                className="w-full flex justify-between items-center text-lg font-medium text-gray-800"
              >
                {chapter.title}
                <span>{expanded === chapter.id ? "▲" : "▼"}</span>
              </button>

              {expanded === chapter.id && (
                <ul className="mt-2 text-gray-700">
                  {chapter.lessons.map((lesson) => (

                    <li key={lesson.id} className="flex justify-between py-2 px-4 bg-gray-100 rounded-lg mt-2">
                      {lesson.title} <span className="text-gray-500">{lesson.duration}</span>
                    </li>
                    
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Cột phải: Video + Đăng ký */}
      <div className="w-1/3 flex flex-col gap-4">
        {/* Video giới thiệu */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-800">Giới thiệu khóa học</h2>
<div className="relative mt-2 rounded-lg overflow-hidden">
  {/* Ảnh video */}
  <img
    src="https://files.fullstack.edu.vn/f8-prod/courses/7.png"
    alt="Play Video"
    className="w-full h-full object-cover"
  />

  {/* Nút play nằm giữa ảnh */}
  <button className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold opacity-70 hover:opacity-100 transition-opacity duration-300">
    ▶
  </button>
</div>

        </div>

        {/* Đăng ký học */}
        <div className="bg-blue-500 text-white p-4 rounded-lg text-center ">
          <h3 className="text-lg font-semibold">Trình độ cơ bản</h3>
          <p className="text-sm mt-1">Học mọi lúc, mọi nơi</p>
          <button className="mt-2 bg-white text-blue-500 px-4 py-2 rounded-lg font-semibold">
            Đăng ký học
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
