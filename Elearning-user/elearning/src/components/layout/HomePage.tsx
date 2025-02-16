import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LeftBar from '../Lefbar';
import meo from "../../assets/images/meo.png"
import HomeSlide from '../slideshow/HomePageSlide';
import gifImage from '../../assets/images/icons8-hot.gif';
import FreeCourses from './FreeCourses';
import BlogList from './BlogList';

const HomePage: React.FC=()=>{
    return(
            <div>

                <div>
                   <div className='flex'>

                    <div className='w-full'>
                        <div className='flex w-full justify-center'>
                        <HomeSlide/>
                    </div>
<div className=''>
<div className='text-left font-bold text-3xl pt-4 flex'> 
<div className='flex justify-center items-center'>
    <text>Khoá học nổi bật</text> 
<img src={gifImage} alt="" className='px-3' />
</div>

</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
  {/* Khóa học 1 */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
    <img
      src={meo}
      alt="Khóa học Java cơ bản"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-bold text-teal-600">Java Cơ Bản</h2>
      <p className="text-gray-600 mt-2">
        Khóa học này cung cấp nền tảng vững chắc về Java, từ cú pháp cơ bản đến các khái niệm lập trình nâng cao.
      </p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-lg font-semibold text-teal-500">500.000 VNĐ</span>
        <a
          href="/OK"
          className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-all duration-300"
        >
          Đăng Ký
        </a>
      </div>
    </div>
  </div>

  {/* Khóa học 2 */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
    <img
      src={meo}
      alt="Khóa học Java nâng cao"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-bold text-teal-600">Java Nâng Cao</h2>
      <p className="text-gray-600 mt-2">
        Khóa học dành cho những ai muốn nâng cao kiến thức về lập trình Java, làm việc với các framework phổ biến.
      </p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-lg font-semibold text-teal-500">800.000 VNĐ</span>
        <a
          href="/"
          className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-all duration-300"
        >
          Đăng Ký
        </a>
      </div>
    </div>
  </div>

  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
    <img
      src={meo}
      alt="Khóa học Java Spring Boot"
      className="w-full h-48 object-cover"/>
    <div className="p-4">
      <h2 className="text-xl font-bold text-teal-600">Java với Spring Boot</h2>
      <p className="text-gray-600 mt-2">
        Học cách phát triển ứng dụng web mạnh mẽ bằng Spring Boot với Java, từ căn bản đến triển khai thực tế.
      </p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-lg font-semibold text-teal-500">1.200.000 VNĐ</span>
        <a
          href="/"
          className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-all duration-300"
        >
          Đăng Ký
        </a>
      </div>
    </div>
  </div>

  {/* Khóa học 4 */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
    <img
      src={meo}
      alt="Khóa học Java Hibernate"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-bold text-teal-600">Java với Hibernate</h2>
      <p className="text-gray-600 mt-2">
        Khóa học chuyên sâu về Hibernate, công cụ ORM mạnh mẽ trong Java, giúp quản lý cơ sở dữ liệu hiệu quả.
      </p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-lg font-semibold text-teal-500">1.000.000 VNĐ</span>
        <a
          href="/"
          className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-all duration-300"
        >
          Đăng Ký
        </a>
      </div>
    </div>
  </div>

  {/* Khóa học 5 */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
    <img
      src={meo}
      alt="Khóa học Java Web"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-bold text-teal-600">Java Web với Servlet & JSP</h2>
      <p className="text-gray-600 mt-2">
        Khóa học này giúp bạn tạo các ứng dụng web sử dụng Java Servlet và JSP, một công nghệ cốt lõi trong phát triển web.
      </p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-lg font-semibold text-teal-500">900.000 VNĐ</span>
        <a
          href="/"
          className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-all duration-300"
        >
          Đăng Ký
        </a>
      </div>
    </div>
  </div>
</div>

<div className=' text-left font-bold text-3xl pt-4 flex'>
  <div className='flex justify-center items-center'>
    <text>Khoá học Mới</text> 
<img src="/image/new-item.gif" alt="" className="px-3 h-14" />
</div>

</div>
<FreeCourses/>



<div className=' text-left font-bold text-3xl pt-4 flex'>
  <div className='flex justify-center items-center'>
    <text>Khoá học Miễn Phí</text> 
<img src="/image/free-gift.gif" alt="" className="px-3 h-10" />
</div>
</div>
<FreeCourses/>


<div className=' text-left font-bold text-3xl pt-4 flex'>
  <div className='flex justify-center items-center'>
    <text>Bài viết</text> 
<img src="/image/blog.gif" alt="" className="px-3 h-10" />
</div>
</div>
<BlogList/>
</div>
</div>
</div>

               </div>
            </div>
    );
}

export default HomePage;  
