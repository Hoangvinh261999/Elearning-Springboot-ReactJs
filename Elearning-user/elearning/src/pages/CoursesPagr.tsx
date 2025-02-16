import React, { useState } from "react";

interface Course {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
}

const coursesData: Course[] = [
  {
    id: 1,
    title: "Lập trình cơ bản",
    category: "Cơ bản",
    description: "Học cú pháp và cấu trúc cơ bản của lập trình.",
    image: "https://th.bing.com/th/id/OIP.brynld1DvXT46qYqLxkCHgHaFj?w=261&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    price: 500000,
  },
  {
    id: 2,
    title: "ReactJS nâng cao",
    category: "Frontend",
    description: "Tìm hiểu các kỹ thuật nâng cao trong ReactJS.",
    image: "https://th.bing.com/th/id/OIP.brynld1DvXT46qYqLxkCHgHaFj?w=261&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    price: 1000000,
  },
  {
    id: 3,
    title: "Java Spring Boot",
    category: "Backend",
    description: "Xây dựng API mạnh mẽ với Spring Boot.",
    image: "https://th.bing.com/th/id/OIP.brynld1DvXT46qYqLxkCHgHaFj?w=261&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    price: 800000,
  },
  {
    id: 4,
    title: "HTML & CSS cơ bản",
    category: "Frontend",
    description: "Học cách xây dựng giao diện web cơ bản.",
    image: "https://th.bing.com/th/id/OIP.brynld1DvXT46qYqLxkCHgHaFj?w=261&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    price: 400000,
  },
  {
    id: 5,
    title: "DevOps & CI/CD",
    category: "DevOps",
    description: "Tự động hóa quy trình triển khai phần mềm.",
    image: "https://th.bing.com/th/id/OIP.brynld1DvXT46qYqLxkCHgHaFj?w=261&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    price: 1500000,
  },
  {
    id: 6,
    title: "Java FX",
    category: "Free",
    description: "Tự động hóa quy trình triển khai phần mềm.",
    image: "https://th.bing.com/th/id/OIP.brynld1DvXT46qYqLxkCHgHaFj?w=261&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    price: 0,
  },
];

const categories = ["Tất cả", "Cơ bản", "Frontend", "Backend", "DevOps", "Free"];

const CoursesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [maxPrice, setMaxPrice] = useState(2000000);

  // Lọc khóa học theo danh mục và giá
  const filteredCourses = coursesData.filter(
    (course) =>
      (selectedCategory === "Tất cả" || course.category === selectedCategory) &&
      course.price <= maxPrice
  );

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      {/* Bộ lọc */}
      <div className="max-w-5xl mx-auto px-4 mb-8">
        <h1 className="text-4xl font-bold text-teal-600 text-center mb-6">
          Các khóa học
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Bộ lọc danh mục */}
          <div className="flex justify-start items-center space-x-4 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-lg text-sm font-semibold transition ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-teal-400 to-teal-600 text-white shadow-lg"
                    : "bg-gray-100 text-teal-500 border border-teal-500 hover:bg-teal-100"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Bộ lọc giá */}
<div className="mt-6">
  <div className="flex justify-between items-center">
    <label className="text-gray-700 font-semibold">Khoảng giá:</label>
    <span className="text-teal-600 font-bold">
      0đ - {maxPrice.toLocaleString()}đ
    </span>
  </div>

  {/* Thanh trượt đơn */}
  <div className="relative mt-4">
    {/* Thanh màu xám */}
    <div className="h-2 bg-gray-300 rounded-full relative">
      {/* Phần highlight màu xanh */}
      <div
        className="absolute h-2 bg-teal-500 rounded-full top-0 left-0"
        style={{
          width: `${(maxPrice / 2000000) * 100}%`,
        }}
      />
    </div>

    {/* Input thanh trượt */}
    <input
      type="range"
      className="w-full appearance-none absolute top-0 h-2  pointer-events-auto 
                 bg-transparent [&::-webkit-slider-thumb]:appearance-none 
                 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 
                 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-teal-500 
                 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white 
                 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer"
      min={0}
      max={2000000}
      step={50000}
      value={maxPrice}
      onChange={(e) => setMaxPrice(+e.target.value)}
    />
  </div>
</div>

        </div>
      </div>

      {/* Danh sách khóa học */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {course.title}
              </h2>
              <p className="text-sm text-gray-600 mt-2">{course.description}</p>
              <p className="text-teal-600 font-bold mt-4">
                {course.price.toLocaleString()}đ
              </p>
              <button className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-lg text-sm font-semibold hover:bg-teal-600 transition">
                Xem chi tiết
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Hiển thị nếu không có khóa học */}
      {filteredCourses.length === 0 && (
        <div className="text-center text-gray-500 mt-10">
          <p>Không có khóa học nào phù hợp với bộ lọc của bạn.</p>
        </div>
      )}

     <div className="text-left">
       Gợi ý các khoá học cho bạn
     </div>
    </div>
  );
};

export default CoursesPage;
