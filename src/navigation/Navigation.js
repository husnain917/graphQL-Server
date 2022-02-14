import React, { useState } from 'react';
import Sidebar from '../commonComponents/sidebar/Sidebar';
import { Route, Routes } from "react-router-dom";
import Login from '../modules/auth/login/Login';
import Dashboard from '../modules/dashboard/Dashboard';
import AllStudents from '../modules/adminPortal/allStudents/AllStudents';
import AllStaff from '../modules/adminPortal/allStaff/AllStaff';
import SuccessStory from '../modules/successStory/SuccessStory';
import Courses from '../modules/courses/Course'
import EnrollmentApproval from '../modules/enrollmentApproval/EnrollmentApproval';
import Events from '../modules/events/Events';
import FAQS from '../modules/faqs/FAQS';
export default function Navigation() {
    const [authState, setAuthState] = useState(false);
    return (
        <>
            {!authState ?
                <Routes>
                    <Route path="/login" element={<Login setAuthState={setAuthState} />} />
                    <Route path="*" element={<Login setAuthState={setAuthState} />} />
                </Routes >
                :
                <Sidebar>
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/staff" element={<AllStaff />} />
                        <Route path="/students" element={<AllStudents />} />
                        <Route path="*" element={<Dashboard />} />
                        <Route path="/successStory" element={<SuccessStory />} />
                        <Route path='/courses' element={<Courses />} />
                        <Route path="/approve-enrollment" element={<EnrollmentApproval />} />
                        <Route path="/events" element={<Events />} />
                        <Route path='/faq' element={<FAQS/>}/>

                    </Routes >
                </Sidebar>
            }
        </>
    )
}