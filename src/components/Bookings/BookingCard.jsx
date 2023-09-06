import React from 'react';
import patientAvatar from '../../assets/images/doctor-img03.png';



const BookingCard = (props) => {
  const { note } = props;
  
  return (
    <ul role="list" className="divide-y divide-gray-100">
        <li key={note.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={patientAvatar} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900 capitalize">{note.fname} {note.lname}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500 capitalize">Venue: {note.venue}, {note.hospital}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">
              {note.book_date} 

            </p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                {note.time_slot}
              </p>
          </div>
        </li>
    </ul>
  )
}

export default BookingCard
