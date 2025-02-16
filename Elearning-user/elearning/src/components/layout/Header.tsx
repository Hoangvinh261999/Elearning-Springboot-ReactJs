import React, { useEffect, useState } from 'react';
import SearchBar from '../searchbar/SearchBar';
import logo from '../../assets/images/logo2.png';
import Button from '../button/Button1';
import ButtonOrange from '../button/ButtonOrange';
import { useAuth } from '../../context/AuthContext';
import meo from "../../assets/images/meo.png";

const Header: React.FC = () => {
  const { isLoggedIn, logout } = useAuth();
  const [username, setUsername] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        if (parsedUser && parsedUser.username) {
          setUsername(parsedUser.username); 
        } else {
          setUsername(null);
        }
      } catch (error) {
        console.error("Error parsing user from localStorage", error);
        setUsername(null); 
      }
    } else {
      setUsername(null); 
    }
    setLoading(false); 
  }, []);

  if (loading) {
    return (
      <header className="bg-slate-100 sticky top-0 text-black py-2 w-full border-b border-gray-400">
        <div className="flex mx-2">
          <div className='w-2/6 flex content-center font-bold'>
            <img className='h-12' alt="Logo" src={logo} />
            <div className="flex items-center justify-center">
              <h1 className="">Học để trở thành người tốt</h1>
            </div>
          </div>
          <div className='w-2/6 flex justify-center items-center'>
            <SearchBar />
          </div>
          <div className="w-2/6 flex justify-end mx-2 content-center">
            <span>Loading...</span>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-slate-100 sticky top-0 text-black py-2 w-full border-b border-gray-400">
      <div className="flex mx-2">
        <div className='w-2/6 flex content-center font-bold'>
          <img className='h-12' alt="Logo" src={logo} />
          <div className="flex items-center justify-center">
            <h1 className="">Học để trở thành người tốt</h1>
          </div>
        </div>
        <div className='w-2/6 flex justify-center items-center'>
          <SearchBar />
        </div>

        <div className="w-2/6 flex justify-end mx-2 content-center">
          {!isLoggedIn ? (
            <>
              <div className="flex justify-center items-center h-full mx-2">
                <a href="/login" className="flex justify-center items-center">
                  <Button text="Đăng Ký" />
                </a>
              </div>
              <div className="flex justify-center items-center h-full mx-2">
                <a href="/login" className="flex justify-center items-center">
                  <ButtonOrange text='Đăng Nhập' />
                </a>
              </div>
            </>
          ) : (
            <div className="relative group flex justify-center items-center">
<div className="flex justify-center items-center cursor-pointer">
  <img
    src={meo}
    alt="User Icon"
    className="w-10 h-10 rounded-full"
  />
  <div className="flex justify-center items-center cursor-pointer">
    {username ? (
      <div className="px-1">{username}</div>
    ) : (
      <div className="font-semibold"></div>
    )}
  </div>
</div>


              <div className="absolute right-0 top-10 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">

               <div
                  className="py-2 px-4  cursor-pointer"
                  onClick={logout}
                >
                  Thông tin cá nhân
                </div>

                <div
                  className="py-2 px-4  cursor-pointer"
                  onClick={logout}
                >
                  Đăng xuất
                </div>
                
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
