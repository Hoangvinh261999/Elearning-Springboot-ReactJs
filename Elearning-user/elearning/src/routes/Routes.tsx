import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from '../pages/Login';
import DefaultLayout from '../components/layout/DefaultLayout';
import Register from '../components/auth/Register/Register';
import LearningPath from '../pages/LoTrinh';
import HomePage from '../components/layout/HomePage';
import CoursesPage from '../pages/CoursesPagr';
import BlogPage from '../pages/BlogC';
import BlogDetail from '../components/layout/Blog/DetailBlog';
import LearningPage from '../components/layout/Learning/LearningPage';
import ChiTietBaiViet from '../components/layout/Blog/ChitietBaiviet';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path='/learning' element={<LearningPage/>} />
                 <Route path="/" element={<DefaultLayout/>} >
                        <Route index element={<HomePage />} /> {/* Trang mặc định */}
                        <Route path="lotrinh" element={<LearningPath />} />
                        <Route path="danhmuckhoahoc" element={<CoursesPage />} />
                        <Route path="blog" element={<BlogPage />} />
                        <Route path='chitietkhoahoc' element={<BlogDetail/>} />
                <Route path='/chitietbaiviet' element={<ChiTietBaiViet/>} />
                 </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;
