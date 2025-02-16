import React, { useState } from "react";
import meoImage from "../../assets/images/meo.png";
import CourseModel from "./CourseModel";

const FreeCourses: React.FC= ()=>{

 const courses = [
    {
      title: "Java Cơ Bản",
      description:
        "Khóa học này cung cấp nền tảng vững chắc về Java, từ cú pháp cơ bản đến các khái niệm lập trình nâng cao.",
      price: "500.000 VNĐ",
      imageUrl: meoImage,
      link: "/java-co-ban",
    },
    {
      title: "Lập Trình Python",
      description:
        "Học Python từ đầu với các ứng dụng thực tế và bài tập chuyên sâu.",
      price: "700.000 VNĐ",
      imageUrl: meoImage,
      link: "/lap-trinh-python",
    },
        {
      title: "Lập Trình Python",
      description:
        "Học Python từ đầu với các ứng dụng thực tế và bài tập chuyên sâu.",
      price: "700.000 VNĐ",
      imageUrl: meoImage,
      link: "/lap-trinh-python",
    },
        {
      title: "Lập Trình Python",
      description:
        "Học Python từ đầu với các ứng dụng thực tế và bài tập chuyên sâu.",
      price: "700.000 VNĐ",
      imageUrl: meoImage,
      link: "/lap-trinh-python",
    }
  ];
    

// const [listFreeCourse,setListFreeCourse]= useState([]);

 return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
      {courses.map((course, index) => (
        <CourseModel
          key={index}
          title={course.title}
          description={course.description}
          price={course.price}
          imageUrl={course.imageUrl}
          link={course.link}
        />
      ))}
    </div>
  );
}

export default FreeCourses;