import React, { useContext } from 'react';
import Sidebar from '../commonComponents/sidebar/Sidebar';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../modules/auth/login/Login';
import Dashboard from '../modules/dashboard/Dashboard';
import AllStudents from '../modules/adminPortal/allStudents/AllStudents';
import SuccessStory from '../modules/successStory/SuccessStory';
import Courses from '../modules/courses/Course';
import EnrollmentApproval from '../modules/enrollmentApproval/EnrollmentApproval';
import Events from '../modules/events/Events';
import FAQS from '../modules/faqs/FAQS';
import ContactUs from '../modules/contactUs/ContactUs';
import Profile from '../modules/profile/Profile';
import ChangePassword from '../modules/profile/changePassword/ChangePassword';
import ProfileData from '../modules/profile/profileData/ProfileData';
import EditProfile from '../modules/profile/editProfile/EditProfile';
import { AppContext } from '../State';
import AllStaff from '../modules/adminPortal/allStaff/AllStaff';
import { PublicRouting } from './PublicRouting';
import { PrivateRouting } from './PrivateRouting';
import PageNotFound from '../commonComponents/PageNotFound';
import MyCourses from '../modules/studentPortal/myCourses/MyCourses';
import Assignment from '../modules/studentPortal/assignment/Assignment';
import Quiz from '../modules/studentPortal/quiz/Quiz';
import MyAttandance from '../modules/studentPortal/attandance/Attandance';
export default function Navigation() {
    const { state } = useContext(AppContext);

    return (
        <>

            <Routes>

                <Route
                    path='/login'
                    element={
                        <PublicRouting isAllowed={state.authState}>
                            <Login />
                        </PublicRouting>
                    }
                />
                <Route
                    path='/:pageName'
                    element={<PageNotFound />
                        // <PublicRouting isAllowed={state.authState}>
                        //     <Login />
                        // </PublicRouting>
                    }
                />
                <Route path='/' element={<Sidebar />} >
                    <Route
                        path='/dashboard'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <Dashboard />
                            </PrivateRouting>
                        }
                    />
                    <Route
                        path='/contactus'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <ContactUs />
                            </PrivateRouting>
                        }
                    />
                    <Route
                        path='/staff'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <AllStaff />
                            </PrivateRouting>
                        }
                    />
                    <Route
                        path='/students'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <AllStudents />
                            </PrivateRouting>
                        }
                    />
                    <Route
                        path='/'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <Dashboard />
                            </PrivateRouting>
                        }
                    />
                    <Route
                        path='/successStory'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <SuccessStory />
                            </PrivateRouting>
                        }
                    />
                    <Route
                        path='/courses'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <Courses />
                            </PrivateRouting>
                        }
                    />
                    <Route
                        path='/approve-enrollment'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <EnrollmentApproval />
                            </PrivateRouting>
                        }
                    />
                    <Route
                        path='/events'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <Events />
                            </PrivateRouting>
                        }
                    />
                    <Route
                        path='/faq'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <FAQS />
                            </PrivateRouting>
                        }
                    />
                    <Route
                        path='/profile'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <Profile />
                            </PrivateRouting>
                        }
                    >
                        <Route path={`id`} element={<ProfileData />} />
                        <Route path={`editProfile/id/`} element={<EditProfile />} />
                        <Route path={`ChangePassword/id`} element={<ChangePassword />} />
                    </Route>
                    {/* students routes */}
                    <Route path='/myCourses'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <MyCourses />
                            </PrivateRouting>}
                    />
                    <Route path='/assignments'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <Assignment />
                            </PrivateRouting>}
                    />
                    <Route path='/quiz'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <Quiz />
                            </PrivateRouting>}
                    />
                    <Route path='/attandance'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <MyAttandance />
                            </PrivateRouting>}
                    />
                </Route>
            </Routes>
        </>
    );
}
