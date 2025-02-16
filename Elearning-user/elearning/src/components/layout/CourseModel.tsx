import React from "react";

interface CourseModelProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  link: string;
}

const CourseModel: React.FC<CourseModelProps> = ({
  title,
  description,
  price,
  imageUrl,
  link,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-teal-600">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold text-teal-500">{price}</span>
          <a
            href={link}
            className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-all duration-300"
          >
            Đăng Ký
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseModel;
