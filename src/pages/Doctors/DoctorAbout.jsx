import React from 'react';
import { formateDate } from '../../utils/formateDate';

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2 '>
            About of
            <span className=' text-irisBlueColor font-bold text-[24px] leading-9'>John Walker</span>
        </h3>
        <p className="text__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reiciendis debitis nulla quod commodi, voluptatum facilis dolore quas sed culpa molestiae fugit est sequi id eligendi nobis excepturi autem perferendis odio enim consectetur quo? Totam quas voluptate, autem ea earum itaque provident ipsum vitae adipisci quam magni sit culpa nulla?</p>
      </div>
      <div className="mt-12">
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>
        <ul className='pt-4 md:p-5'>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className=' text-irisBlueColor text-[15px] leading-6 font-semibold'>
                        {formateDate('10-2-2012')} - {formateDate('10-2-2016')}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgeon</p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor'>
                    New Apollo Hospital, New York.
                </p>
            </li>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className=' text-irisBlueColor text-[15px] leading-6 font-semibold'>
                        {formateDate('2-12-2010')} - {formateDate('10-2-2012')}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgeon</p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor'>
                    New Apollo Hospital, New York.
                </p>
            </li>
        </ul>
      </div>

      <div className='mt-12'>
      <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experience</h3>
      <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
        <li className='p-4 rounded bg-[#fff9ea]'>
            <span className=' text-yellowColor text-[15px] leading-6 font-semibold'>
            {formateDate('2-12-2010')} - {formateDate('10-2-2012')}
            </span>
            <p className='text-[16px] leading-6 font-medium text-textColor'>Sr. Surgeon</p>
            <p className='text-[14px] leading-5 font-medium text-textColor'>New Apollo Hospital, New York.</p>
        </li>
        <li className='p-4 rounded bg-[#fff9ea]'>
            <span className=' text-yellowColor text-[15px] leading-6 font-semibold'>
            {formateDate('2-12-2010')} - {formateDate('10-2-2012')}
            </span>
            <p className='text-[16px] leading-6 font-medium text-textColor'>Sr. Surgeon</p>
            <p className='text-[14px] leading-5 font-medium text-textColor'>New Apollo Hospital, New York.</p>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default DoctorAbout
