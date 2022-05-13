import React, { useState,useContext } from 'react';
import Sidebar from '../commonComponents/sidebar/Sidebar';
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from '../modules/auth/login/Login';
import Dashboard from '../modules/dashboard/Dashboard';
import AllStudents from '../modules/adminPortal/allStudents/AllStudents';
import AllStaff from '../modules/adminPortal/allStaff/AllStaff';
import SuccessStory from '../modules/successStory/SuccessStory';
import Courses from '../modules/courses/Course'
import EnrollmentApproval from '../modules/enrollmentApproval/EnrollmentApproval';
import Events from '../modules/events/Events';
import FAQS from '../modules/faqs/FAQS';
import ContactUs from '../modules/contactUs/ContactUs';
import Profile from '../modules/profile/Profile';
import ChangePassword from '../modules/profile/changePassword/ChangePassword';
import ProfileData from '../modules/profile/profileData/ProfileData';
import EditProfile from '../modules/profile/editProfile/EditProfile';
import { AppContext } from "../State";
export default function Navigation() {
  const { state, dispatch } = useContext(AppContext);
    const items = JSON.parse(localStorage.getItem('user'));
console.log("statestate",state);
    return (
        <>
            {!state.authState ?
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Login  />} />
                </Routes >
                :
                <Sidebar>
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard authState={state.authState} />} />
                        <Route path="/staff" element={<AllStaff />} />
                        <Route path="/students" element={<AllStudents />} />
                        <Route path="*" element={<Dashboard />} />
                        <Route path="/successStory" element={<SuccessStory />} />
                        <Route path='/courses' element={<Courses />} />
                        <Route path="/approve-enrollment" element={<EnrollmentApproval />} />
                        <Route path="/events" element={<Events />} />
                        <Route path='/faq' element={<FAQS />} />
                        <Route path='/contactus' element={<ContactUs />} />
                        <Route path='profile' element={<Profile />}>
                            <Route path={`id:${items.id}`} element={<ProfileData />} />
                            <Route path={`editProfile/id:${items.id}`} element={<EditProfile />} />
                            <Route path={`ChangePassword/id:${items.id}`} element={<ChangePassword />} />

                        </Route>
                    </Routes >
                </Sidebar>
            }
        </>
    )
}