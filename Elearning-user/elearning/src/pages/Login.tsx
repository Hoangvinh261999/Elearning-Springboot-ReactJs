import React, { useState } from 'react';
import axios from 'axios';
import { LoginRequest, LoginResponse } from '../interfaces/LoginDatas' ;
import { useAuth } from '../context/AuthContext';
import background from '../assets/images/programming8.jpg';
import { useNotice } from '../context/NotificationContext';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState<LoginRequest>({ username: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const { showNotice } = useNotice();
    const navigate=useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError(null);

  try {
    console.log("Submitting form...");
    const response = await axios.post<LoginResponse>('http://localhost:8888/api/v1/auth-service/login', formData, {
      withCredentials: true
    });
   if (response.data.code === 200) {
      // Lấy token từ cookie
      const token = getCookie('tkn');
             console.log(token);

      if (token) {
        login(token);  
        showNotice('Login ok nè', 'success');
        setTimeout(() => {
          navigate("/");  
        }, 3000);
      } else {
        setError('Token không có trong cookie.');
      }
    } else {
      setError(response.data.message);
    }
  } catch (error) {
    console.error("Error during login:", error);  // Thêm log để kiểm tra lỗi
    setError('Đăng nhập thất bại. Vui lòng thử lại!');
  }
};

const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
};

  return (
<div className=" flex justify-center items-center h-screen">
  <div className="w-1/2 h-screen hidden lg:block">
    <img src={background} alt="Placeholder" className="object-cover w-full h-full" />
  </div>
  <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2">
    <h1 className="text-2xl mb-4 font-bold"><text className='text-yellow-600'>VIN</text><text className='text-blue-700'>EDU </text> chào mừng bạn trở lại !</h1> 
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label  htmlFor="username" className=" text-gray-600">Tài khoản</label>
        <input type="text" 
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" autoComplete="off" />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-800">Mật khẩu</label>
        <input type="password" 
                name="password"
        value={formData.password}
        onChange={handleChange}
         className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" autoComplete="off" />
      </div>
      <div className="mb-4 flex items-center">
        <input type="checkbox" id="remember" name="remember" className="text-red-500" />
        <label htmlFor="remember" className="text-gray-800 ml-2">Nhớ đăng nhập?</label>
      </div>
      <div className="mb-6 text-blue-500">
        <a href="/" className="hover:underline">Quên mật khẩu?</a>
      </div>
      <button type="submit" className="bg-green-400 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Đăng nhập</button>
    </form>
    <button 
  type="button" 
  className="bg-slate-400 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full flex items-center justify-center space-x-3 mt-2"
>
  <img 
    src="https://th.bing.com/th/id/R.96c1a6566397efcf7de758fd2a6f116a?rik=LwK4OM1JQPW06A&pid=ImgRaw&r=0" 
    alt="Google Logo" 
    className="w-5 h-5" 
  />
  <span>Đăng nhập với Google</span>
</button>

    <div className="mt-6  text-center space-x-2">
      <a href="/" className="hover:underline text-green-500" >Đăng ký tài khoản</a>
            <a href="/" className="hover:underline text-blue-500">Trở lại trang chủ</a>
    </div>
  </div>
</div>

  );
};

export default Login;
