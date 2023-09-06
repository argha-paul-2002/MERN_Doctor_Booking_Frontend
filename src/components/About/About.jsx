import React from 'react';
import aboutImg from '../../assets/images/about.png';
import aboutCardImg from '../../assets/images/about-card.png';
import { Link } from 'react-router-dom';
import FaqList from '../Faq/FaqList';
import faqImg from '../../assets/images/faq-img.png';


const About = () => {
  return (
    <section>
        <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                {/* =========== About Image ============ */}
                <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                    <img src={aboutImg} alt="" />
                    <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right[-7%] lg:right-[22%]">
                        <img src={aboutCardImg} alt="" />
                    </div>
                </div>

                {/* About Content */}
                <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                    <h2 className='heading'>
                        Proud to be the one of the nations best
                    </h2>
                    <p className="text__para">
                    Medico stands tall as a beacon of healthcare excellence, honored to be recognized among the nation's finest. Our unwavering commitment to top-tier care, driven by dedicated experts and cutting-edge technologies, sets us apart. This distinction fuels our passion to continually innovate and elevate healthcare standards, all while empowering our community toward a healthier future.
                    </p>
                    <p className="text__para mt-[30px]">
                    Our relentless pursuit of excellence has propelled Medico to the forefront of healthcare. With gratitude, we continue to lead, innovate, and transform lives, setting new benchmarks along the way.
                    </p>
                    <Link to='/'>
                        <button className="btn">Learn More</button>
                    </Link>
                </div>
            </div>
        </div>

        <div className="container mt-[80px]">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            
            <div className="w-full md:w-1/2">
              <h2 className='heading'>Most questions by our beloved patients</h2>
              <FaqList />
            </div>
            <div className='w-1/3 hidden md:block'>
              <img src={faqImg} alt="" />
            </div>
          </div>
        </div>

    </section>
  )
}

export default About
