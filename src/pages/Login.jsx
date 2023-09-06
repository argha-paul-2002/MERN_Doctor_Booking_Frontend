import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


const Login = () => {
  let navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({email: credentials.email, password: credentials.password})
      });
      const json = await response.json()
      //   If success = true then redirect 
      if(json.success){
          //  Save the auth token and redirect
          localStorage.setItem('token', json.authtoken);
          swal({
            title: "Success!",
            text: "Welcome to Medico",
            icon: "success",
            button: "Ok",
          });
          navigate("/"); 
        }
        else{
            // Else Show Alert
            swal({
                title: "Error!",
                text: "Invalid Credentials!",
                icon: "error",
                button: "Ok",
              });
        }
        
        
        //   Clear all form fields
        
      console.log(json)
      setCredentials({
        email: "",
        password: ""
    })
}

const onChange = (e)=>{
  setCredentials({...credentials, [e.target.name]: e.target.value})
}
  
  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor ">Welcome</span> Back 🎉
        </h3>
        <form className="py-4 md:py-0" onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={credentials.email}
              onChange={onChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
               focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={onChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
               focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
            >
              Login
            </button>
          </div>
          <p className="mt-5 text-textColor text-center">
            Don&apos;t have an account? 
            <Link to="/register" className="text-primaryColor font-medium ml-1">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
