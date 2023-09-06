import React, { useContext, useEffect, useRef, useState } from "react";
import patientAvatar from "../assets/images/patient-avatar.png";
import Typewriter from "typewriter-effect";
import BookingList from "../components/Bookings/BookingList";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/notes/noteContext";
import userContext from "../context/user/userContext";

const User = () => {
  let navigate = useNavigate();
  const context = useContext(noteContext);
  const { notes, getNotes } = context;

  const userDetails = useContext(userContext);
  const {user, getUser } = userDetails
  
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
      getUser();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);
  const fname = user.name;

  return (
    <section>
      <div className="containe">
        {/* ========  Heading  =========*/}
        <div className=" lg:w-[470px] mx-auto">
          <h2 className="heading text-center">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Welcome to")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Your Profile")
                  .start();
              }}
            />
          </h2>
          <p className="text__para text-center">Name: {user.name}</p>
          <p className="text__para text-center">Email: {user.email}</p>
        </div>

        {/* ============= User image Section ======== */}
        <div className="py-[30px] px-5 rounded-3">
          <div className="flex items-center gap-[13px]">
            <img src={patientAvatar} alt="" />
            <div>
              <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                {user.name}
              </h4>
            </div>
          </div>
          <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
            "I have taken medical services from them. They treat so well and
            they are providing the best medical services."
          </p>
        </div>

        {/* ========  Heading  =========*/}
        <div className=" lg:w-[470px] mx-auto">
          <h2 className="heading text-center">
            Your <span className=" text-primaryColor">Bookings</span>
          </h2>
        </div>
        <div className=" lg:w-[470px] mx-auto">
          <p className="text__para text-center">
          {notes.length === 0 && 'No bookings to show '}
          </p>
          <BookingList />
        </div>
      </div>
    </section>
  );
};

export default User;
