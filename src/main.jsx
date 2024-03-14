import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import RegistrationForm from './components/registration/RegistrationForm.jsx'
import LogInForm from './components/LogIn/LogIn.jsx'
import Course from './components/course/course.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <>
  <ToastContainer/>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RegistrationForm/>}/>
      <Route path="/logIn" element={<LogInForm/>}/>
      <Route path='/Course' element={<Course/>}/>

    </Routes>
  </BrowserRouter>
  </>
  </React.StrictMode>,
)
