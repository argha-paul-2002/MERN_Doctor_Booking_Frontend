import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
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
        "auth-token": localStorage.getItem('token')
        
      }
    });
    const json = await response.json()
    setNotes(json)
  }

  // Add a Note
  const addNote = async (fname, lname, email, age, country, address, city, state, dist, pincode, phone, department, book_date, time_slot, venue, hospital) => {
    // API Call 
    const response = await fetch(`${host}/api/bookings/booking`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({fname, lname, email, age, country, address, city, state, dist, pincode, phone, department, book_date, time_slot, venue, hospital})
    });

    const note = await response.json();
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;