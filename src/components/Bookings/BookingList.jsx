import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../../context/notes/noteContext";
import { useNavigate } from "react-router-dom";
import BookingCard from "./BookingCard";

const BookingList = () => {
  let navigate = useNavigate();
  const context = useContext(noteContext);
  const { notes, getNotes } = context;

  useEffect(() => {
    if(localStorage.getItem('token')){
        getNotes()
    }
    else{
        navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {/* <BookingCard /> */}

      {notes.map((note) => {
        return <BookingCard key={note._id}  note={note} />;
      })}
    </div>
  );
};

export default BookingList;
