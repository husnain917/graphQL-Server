import React, { useState } from 'react';
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
export default function Navigation() {
    const [authState, setAuthState] = useState(false);
   
    return (
        <>
            {!authState ?
                <Routes>
                    <Route path="/login" element={<Login setAuthState={setAuthState} authState={authState} />} />
                    <Route path="*" element={<Login setAuthState={setAuthState} />} />
                </Routes >
                :
                <Sidebar>
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard authState={authState} />} />
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
                            <Route path='id:' element={<ProfileData />} />
                            <Route path='editProfile/id:' element={<EditProfile />} />
                            <Route path='ChangePassword' element={<ChangePassword />} />

                        </Route>
                    </Routes >
                </Sidebar>
            }
        </>
    )
}