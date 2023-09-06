import React from 'react';
import { services } from '../assets/data/services';
import ServiceCard from '../components/Services/ServiceCard';
import {BsArrowRight} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';



const Services = () => {
  return (
    <section>
      <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            
            {/* Element Start */}
            <div className='py-[30px] px-5 bg-[#83c4ff] rounded-md'>
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Hospitality
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                Clinical excellence must be the priority for any health care service provider.
                </p>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>
            {/* Element End */}


            {/* Element Start */}
            <div className='py-[30px] px-5 bg-[#5db2ff] rounded-md'>
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Emergency Care
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                Clinical excellence must be the priority for any health care service provider.
                </p>
                
                <Link className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center         rounded-[50px]'>+10&nbsp;6723563567</button>
                </Link>
              </div>
            </div>
            {/* Element End */}


            {/* Element Start */}
            <div className='py-[30px] px-5 bg-[#83c4ff] rounded-md'>
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Chamber Service
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                Clinical excellence must be the priority for any health care service provider.
                </p>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>
            {/* Element End */}

          </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]'>
        {services.map((item, index)=> <ServiceCard item={item} index={index} key={index}  />)}
      </div>
      </div>
    </section>
  )
}

export default Services
