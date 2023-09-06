import BookContext from "./bookContext";
import { useState } from "react";

const BookState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  // Get all Notes
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/bookings/fetchallbookings`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // "auth-token": localStorage.getItem('token')
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlNDdiNGQ0ZTQxNzQxN2ZlMTRiN2QyIn0sImlhdCI6MTY5MjY5NTM3M30.0XzkY3dFVNstGudnWywYqN0jK3j-zFngOLYBM1FqlRk"
      }
    });
    const json = await response.json()
    setNotes(json)
  }

  // Add a Note
  const addNote = async (fname,lname,email,age,country,address,city,state,dist,pin,phone,department,book_date,time_slot,venue,hospital) => {
    // API Call 
    const response = await fetch(`${host}api/bookings/booking`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // "auth-token": localStorage.getItem('token')
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlNDdiNGQ0ZTQxNzQxN2ZlMTRiN2QyIn0sImlhdCI6MTY5MjY5NTM3M30.0XzkY3dFVNstGudnWywYqN0jK3j-zFngOLYBM1FqlRk"
      },
      body: JSON.stringify({fname,lname,email,age,country,address,city,state,dist,pin,phone,department,book_date,time_slot,venue,hospital})
    });

    const note = await response.json();
    setNotes(notes.concat(note))

  }


  return (
    <BookContext.Provider value={{ notes, addNote, getNotes }}>
      {props.children}
    </BookContext.Provider>
  )

}
export default BookState;