import React, { useState } from 'react';
import Sidebar from '../commonComponents/sidebar/Sidebar';
import { Route, Routes } from "react-router-dom";
import Login from '../modules/auth/login/Login';
import Dashboard from '../modules/dashboard/Dashboard';
import AllAdmins from '../modules/adminPortal/allAdmins/AllAdmins';
import AllStudents from '../modules/adminPortal/allStudents/AllStudents';
import AllTeachers from '../modules/adminPortal/allTeachers/AllTeachers';
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
                        <Route path="/admin" element={<AllAdmins />} />
                        <Route path="/teachers" element={<AllTeachers />} />
                        <Route path="/students" element={<AllStudents />} />
                        <Route path="*" element={<Dashboard />} />
                    </Routes >
                </Sidebar>
            }
        </>
    )
}