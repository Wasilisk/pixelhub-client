import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import ResetPasswordRequest from "./pages/ResetPasswordRequest";
import ResetPassword from "./pages/ResetPassword";
import Login from "./pages/Login";
import SuccessAuth from "./pages/SuccessAuth";
import CompleteSignup from "./pages/CompleteSignup";
import {ToastContainer} from "react-toastify";


function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="signup/complete/:token" element={<CompleteSignup />} />
          <Route path="login/reset-password" element={<ResetPasswordRequest/>}/>
          <Route path="login/reset-password/:token" element={<ResetPassword/>}/>
          <Route path="login/success/:token" element={<SuccessAuth/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="colored"/>
    </React.StrictMode>
  );
}

export default App;
