import React from "react";
import { Routes, Route } from 'react-router-dom'
import Login from './components/authentication/login/Login'
// import Register from './components/authentication/register/Register';
import Home from "./components/home/Home";
// import ForgetPassword from './components/authentication/forgetPassword/ForgetPassword'
// import AllAccount from './components/allAcounts/AllAccount'
// import MobileMoney from './components/mobileMoney/MobileMoney'
// import Equity from './components/equity/Equity'
// import Cash from './components/cash/Cash'
// import Preference from './components/preferences/Preference'
// import Profile from "./components/profile/Profile";
// import Sidebar from "./components/sidebar/Sidebar";

export const Routespage = () => (
    <Routes>
        <>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/allacccount" element={<AllAccount />} />
            <Route path="/mobilemoney" element={<MobileMoney />} />
            <Route path="/equity" element={<Equity />} />
            <Route path="/cash" element={<Cash />} />
            <Route path="/preferenences" element={<Preference />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgetpassword/detail" element={<ForgetPassword />} />
            <Route path="/sidebar" element={<Sidebar />} /> */}
        </>

    </Routes>
)
