import UserContext from "./userContext";
import { useState } from "react";

const UserState = (props) => {
  const host = "http://localhost:5000"
  
  const notesInitial = []
  const [user, setUser] = useState(notesInitial)

  // Get all Notes
  const getUser = async () => {
    // API Call 
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
        
      }
    });
    const json = await response.json()
    setUser(json)
  }

  // // Add a Note
  // const addNote = async (fname, lname, email, age, country, address, city, state, dist, pincode, phone, department, book_date, time_slot, venue, hospital) => {
  //   // API Call 
  //   const response = await fetch(`${host}/api/bookings/booking`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       "auth-token": localStorage.getItem('token')
  //     },
  //     body: JSON.stringify({fname, lname, email, age, country, address, city, state, dist, pincode, phone, department, book_date, time_slot, venue, hospital})
  //   });

  //   const note = await response.json();
  // }

  return (
    <UserContext.Provider value={{ user, getUser }}>
      {props.children}
    </UserContext.Provider>
  )

}
export default UserState;