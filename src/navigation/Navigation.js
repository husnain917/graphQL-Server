import React, { useState } from 'react';
import Sidebar from '../commonComponents/sidebar/Sidebar';
import { Route, Routes } from "react-router-dom";
import Login from '../modules/auth/login/Login';
import Dashboard from '../modules/dashboard/Dashboard';
import AllStudents from '../modules/adminPortal/allStudents/AllStudents';
import AllStaff from '../modules/adminPortal/allStaff/AllStaff';
export default function Navigation() {
    const [authState, setAuthState] = useState(false);
    return (
        <>
            {/* {!authState ?
                <Routes>
                    <Route path="/login" element={<Login setAuthState={setAuthState} />} />
                    <Route path="*" element={<Login setAuthState={setAuthState} />} />
                </Routes >
                : */}
                <Sidebar>
                    <Routes>
                        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
                        <Route path="/staff" element={<AllStaff />} />
                        {/* <Route path="/teachers" element={<AllTeachers />} />
                        <Route path="/students" element={<AllStudents />} />
                        <Route path="*" element={<Dashboard />} /> */}
                    </Routes >
                </Sidebar>
            {/* } */}
        </>
    )
}