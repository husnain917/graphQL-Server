import React, { useContext } from 'react';
import Sidebar from '../commonComponents/sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Login from '../modules/auth/login/Login';
import Dashboard from '../modules/dashboard/Dashboard';
import AllStudents from '../modules/adminPortal/allStudents/AllStudents';
import SuccessStory from '../modules/successStory/SuccessStory';
import Courses from '../modules/courses/Course';
import EnrollmentApproval from '../modules/adminPortal/enrollmentApproval/EnrollmentApproval';
import Events from '../modules/adminPortal/events/Events';
import FAQS from '../modules/adminPortal/faqs/FAQS';
import ContactUs from '../modules/adminPortal/contactUs/ContactUs';
import Profile from '../modules/profile/Profile';
import ChangePassword from '../modules/profile/changePassword/ChangePassword';
import ProfileData from '../modules/profile/profileData/ProfileData';
import EditProfile from '../modules/profile/editProfile/EditProfile';
import { AppContext } from '../State';
import AllStaff from '../modules/adminPortal/allStaff/AllStaff';
import { PublicRouting } from './PublicRouting';
import { PrivateRouting } from './PrivateRouting';
import PageNotFound from '../commonComponents/PageNotFound';
import MyCourse from '../modules/studentPortal/myCourses/MyCourses';
import Assignment from '../modules/studentPortal/assignment/Assignment';
import Quiz from '../modules/studentPortal/quiz/Quiz';
import MyAttandance from '../modules/studentPortal/attandance/Attandance';
import StudentList from '../modules/teacherPortal/studentList/StudentList'
import CourseAssigned from '../modules/teacherPortal/courseAssigned/CourseAssigned'
import Lecture from '../modules/teacherPortal/lecture/Lecture'
import FilesOrAssignment from '../modules/teacherPortal/filesOrAssignment/FilesOrAssignment'
import CourseBatch from '../modules/adminPortal/courseBatch/CourseBatch';

export default function Navigation() {
    const { state, dispatch } = useContext(AppContext);
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
                <Route path='/' element={
                    <PrivateRouting isAllowed={state.authState}>
                        <Sidebar />
                    </PrivateRouting>
                }>
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
                    {
                        state.user?.role === "OWNER" ?
                            <Route
                                path='/'
                                element={
                                    <PrivateRouting isAllowed={state.authState}>
                                        <Dashboard />
                                    </PrivateRouting>
                                }
                            />
                            :
                            state.user?.role === "ADMIN" ?
                                <Route
                                    path='/'
                                    element={
                                        <PrivateRouting isAllowed={state.authState}>
                                            <Dashboard />
                                        </PrivateRouting>
                                    }
                                />
                                :
                                state.user?.role === "STUDENT" ?
                                    <Route
                                        path='/'
                                        element={
                                            <PrivateRouting isAllowed={state.authState}>
                                                <MyCourse />
                                            </PrivateRouting>
                                        }
                                    />
                                    :
                                    state.user?.role === "TEACHER" ?
                                        <Route
                                            path='/'
                                            element={
                                                <PrivateRouting isAllowed={state.authState}>
                                                    <StudentList />
                                                </PrivateRouting>
                                            }
                                        /> : ''
                    }
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
                    <Route path='/myCourse'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <MyCourse />
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



                    {/*Teacher routes*/}
                    <Route path='/studentList'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <StudentList />
                            </PrivateRouting>}
                    />
                    <Route path='/courseAssigned'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <CourseAssigned />
                            </PrivateRouting>}
                    />
                    <Route path='/lecture'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <Lecture />
                            </PrivateRouting>}
                    />
                    <Route path='/fileOrAssignment'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <FilesOrAssignment />
                            </PrivateRouting>}
                    />
                    <Route path='/courseBatch'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <CourseBatch />
                            </PrivateRouting>}
                    />
                </Route>


            </Routes>
        </>
    );
}
