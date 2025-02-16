import React, { useState } from "react";

interface Lesson {
  id: number;
  title: string;
  completed: boolean;
  duration: string;
  subLessons?: Lesson[];
  totalPartCourse: number;
}

interface SubLesson {
  id: number;
  title: string;
  completed: boolean;
  duration: string;
  totalPartCourse: number;
}

const lessons: Lesson[] = [
  { id: 1, title: "Giới thiệu", completed: true, duration: "33:15", totalPartCourse: 0 },
  { id: 2, title: "Ôn lại ES6+", completed: true, duration: "1:08:41", totalPartCourse: 0 },
  { id: 3, title: "React, ReactDOM", completed: true, duration: "1:02:00", totalPartCourse: 0 },
  {
    id: 4,
    title: "JSX, Components, Props",
    completed: true,
    duration: "2:13:22",
    subLessons: [
      { id: 4.1, title: "JSX cơ bản", completed: true, duration: "45:00", totalPartCourse: 0 },
      { id: 4.2, title: "Props trong React", completed: false, duration: "1:28:00", totalPartCourse: 0 },
    ],
    totalPartCourse: 2
  },
  { id: 5, title: "Create React App", completed: true, duration: "0:48:17", totalPartCourse: 2, subLessons: [
    { id: 4.1, title: "JSX cơ bản", completed: true, duration: "45:00", totalPartCourse: 0 },
    { id: 4.2, title: "Props trong React", completed: false, duration: "1:28:00", totalPartCourse: 0 },
  ]},
  { id: 6, title: "Hooks", completed: true, duration: "5:59:40", totalPartCourse: 12 },
  { id: 7, title: "CSS, SCSS và CSS modules", completed: true, duration: "46:09", totalPartCourse: 12 },
  { id: 8, title: "React Router V6", completed: true, duration: "15:07", totalPartCourse: 12 },
    { id: 9, title: "Hooks", completed: true, duration: "5:59:40", totalPartCourse: 12 },
  { id: 10, title: "CSS, SCSS và CSS modules", completed: true, duration: "46:09", totalPartCourse: 12 },
  { id: 11, title: "React Router V6", completed: true, duration: "15:07", totalPartCourse: 12 },
    { id: 12, title: "Hooks", completed: true, duration: "5:59:40", totalPartCourse: 12 },
  { id: 13, title: "CSS, SCSS và CSS modules", completed: true, duration: "46:09", totalPartCourse: 12 },
  { id: 14, title: "React Router V6", completed: true, duration: "15:07", totalPartCourse: 12 },

];

const ListCourse: React.FC = () => {
  const [openLesson, setOpenLesson] = useState<number | null>(null);

  const handleToggleLesson = (id: number) => {
    setOpenLesson((prev) => (prev === id ? null : id));
  };

  return (
    <div className="p-4 bg-white border border-gray-300 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Nội dung khóa học</h2>
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            <div
              className={`flex flex-col text-sm p-2 border-b last:border-b-0 ${
                lesson.completed ? "text-gray-500" : "text-black"
              } cursor-pointer`}
              onClick={() => handleToggleLesson(lesson.id)}
            >
              <div className="flex justify-between items-center">
                <span>{lesson.id}. {lesson.title}</span>
                {lesson.subLessons && (
                  <span className="ml-2">
                    {openLesson === lesson.id ? (
                      <span className="text-gray-500">&#9650;</span> // Mũi tên lên (Unicode)
                    ) : (
                      <span className="text-gray-500">&#9660;</span> // Mũi tên xuống (Unicode)
                    )}
                  </span>
                )}
              </div>

              {/* Phần thời gian sẽ nằm ở hàng dưới và căn trái */}
              <div className="text-xs text-left text-gray-500 mt-1">
                <span>Số bài học: {lesson.totalPartCourse} | Thời lượng: {lesson.duration} | Hoàn thành: 2</span>
              </div>
            </div>

            {lesson.subLessons && openLesson === lesson.id && (
              <ul className="pl-4 mt-2">
                {lesson.subLessons.map((subLesson) => (
                  <li
                    key={subLesson.id}
                    className={`flex text-sm justify-between p-2 border-b last:border-b-0 ${
                      subLesson.completed ? "text-gray-500" : "text-black"
                    }`}
                  >
                    <span>{subLesson.id}. {subLesson.title}</span>
                    <span>{subLesson.duration}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListCourse;
