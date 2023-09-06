import React from 'react';
import { Pagination } from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import patientAvatar from '../../assets/images/patient-avatar.png';
import { HiStar } from 'react-icons/hi';

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
      <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{clickable:true}} 
      breakpoints={{
        640: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
      }}>
        <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                            Chitra Paul
                        </h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className=' text-textColor w-[18px] h-5' />
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                "The Medico website's mental health section is a lifeline – a compassionate space where resources, support, and understanding converge. It's a virtual sanctuary that complements the empathetic care I've found in person."
                </p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                            Rahul Debnath</h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                "The Medico website is a game-changer – informative, easy to use, and reflective of the exceptional care I receive at the facility. It's a testament to their commitment to patient well-being and convenience."
                </p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                            Hrithhik Adhikari</h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className=' text-textColor w-[18px] h-5' />
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                "Kudos to the Medico website for its seamless interface and wealth of medical information. Navigating through services, booking appointments – everything feels effortless, mirroring the top-notch experience I've had in person at Medico."
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                            Bivas Das</h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                        </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                    "I have taken medical services from them. They treat so well and they are providing the best medical services."
                </p>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimonial
