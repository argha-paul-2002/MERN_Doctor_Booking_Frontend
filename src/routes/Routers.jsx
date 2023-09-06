import React from 'react'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Doctors from "../pages/Doctors/Doctors"
import DoctorDetails from "../pages/Doctors/DoctorDetails"
import About from '../components/About/About'

import {Routes , Route} from 'react-router-dom'
import User from '../pages/User'
import BookDoctorForm from '../pages/BookDoctorForm'
import Enablebutton from '../pages/Enablebutton'

const Routers = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/doctors/:id' element={<DoctorDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
      <Route path='/about' element={<About/>} />
      <Route path='/user' element={<User />} />
      <Route path='/book-appointment' element={<BookDoctorForm />} />   
      <Route path='/test' element={<Enablebutton />} />

         
    </Routes>
  )
}

export default Routers
