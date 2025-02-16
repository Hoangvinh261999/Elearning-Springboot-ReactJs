import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LeftBar from '../Lefbar';
import meo from "../../assets/images/meo.png"
import HomeSlide from '../slideshow/HomePageSlide';
import gifImage from '../../assets/images/icons8-hot.gif';
import FreeCourses from './FreeCourses';
import { Outlet } from 'react-router-dom';


const DefaultLayout: React.FC=()=>{
    return(
            <div>
                <div className='sticky top-0 z-50'>
                    <Header/>
                </div>
                <div>
                   <div className='flex'>
                        <div className='sticky left-0 w-1/12 '>
                            <LeftBar />
                                </div>
                    <div className='w-11/12'>

      <main >
        <Outlet /> {/* Nơi render nội dung của các route con */}
      </main>

</div>
</div>
<div>
                 <Footer/>
               </div>
               </div>
            </div>
    );
}

export default DefaultLayout;  
