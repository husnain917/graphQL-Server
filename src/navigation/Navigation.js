import React, { useContext } from 'react';
import Sidebar from '../commonComponents/sidebar/Sidebar';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Login from '../modules/auth/login/Login';
import ForgotPassword from '../modules/auth/forgotPassword/ForgotPassword';
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
import PageNotFound from '../commonComponents/pageNotFound/PageNotFound';
import MyCourse from '../modules/studentPortal/myCourses/MyCourses';
import Assignment from '../modules/studentPortal/assignment/Assignment';
import Quiz from '../modules/studentPortal/quiz/Quiz';
import MyAttandance from '../modules/studentPortal/attandance/Attandance';
import StudentList from '../modules/teacherPortal/studentList/StudentList'
import CourseAssigned from '../modules/teacherPortal/courseAssigned/CourseAssigned'
import Lecture from '../modules/teacherPortal/lecture/Lecture'
import FilesOrAssignment from '../modules/teacherPortal/filesOrAssignment/FilesOrAssignment'
import CourseBatch from '../modules/adminPortal/courseBatch/CourseBatch';
import Speakers from '../modules/speakers/Speakers';
import UserGroupTable from '../modules/settings/tabsPermission/UserGroupTable';
import ApiPermissions from '../modules/settings/apiPermissions/ApiPermissions';
import UserGroup from '../modules/settings/userGroup/UserGroup';
import CreateOrganization from '../modules/settings/createOrganization/CreateOrganization';
import CourseCategory from '../modules/adminPortal/courseCategory/CourseCategory';
import ViewAllUserGroup from '../modules/settings/userGroup/ViewAllUserGroup';
import Footer from '../commonComponents/footer/Footer';
import CourseDetail from '../modules/courseDetail/CourseDetail';

export default function Navigation() {
    let location = useLocation();
    let navigate = useNavigate()
    const { state, dispatch } = useContext(AppContext);

    React.useEffect(() => {
        if (!state.authState) {
            navigate(location.pathname)
        }
    }, [])
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
                    path='/forgotPassword'
                    element={
                        <PublicRouting isAllowed={state.authState}>
                            <ForgotPassword />
                        </PublicRouting>
                    }
                />
                <Route
                    path='/:pageName'
                    element={<PageNotFound />
                    }
                />
                <Route
                    path='/'
                    element={
                        <PrivateRouting isAllowed={state.authState}>
                            <Sidebar />
                        </PrivateRouting>
                    }>
                    <Route
                        path='/'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <Dashboard />
                            </PrivateRouting>
                        }
                    />
                    <Route
                        path='/contact'
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
                        path='/successStories'
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
                    <Route path='/courseCategory'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <CourseCategory />
                            </PrivateRouting>}
                    />
                    <Route path='/lectures'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <Lecture />
                            </PrivateRouting>}
                    />
                    <Route
                        path='/enrollmentApproval'
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
                        path='/faqs'
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
                    <Route path='/courseAssigned'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <CourseAssigned />
                            </PrivateRouting>}
                    />
                    <Route path='/courseCategory'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <CourseCategory />
                            </PrivateRouting>}
                    />
                    <Route path='/lectures'
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
                    <Route path='/speakers'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <Speakers />
                            </PrivateRouting>}
                    />
                      {/* <Route path='/user-groups'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <UserGroupTable />
                            </PrivateRouting>}
                    /> */}
                    <Route path='/user-groups'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <UserGroupTable />
                            </PrivateRouting>}
                    />
                    <Route path='/api-permissions'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <ApiPermissions />
                            </PrivateRouting>}
                    />
                    <Route path='/crate-organization'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <CreateOrganization />
                            </PrivateRouting>}
                    />
                    <Route path='/course-detail'
                        element={
                            <PrivateRouting isAllowed={state.authState}>
                                <CourseDetail />
                            </PrivateRouting>}
                    />
                  
                </Route>

            </Routes>
            {/* <Footer/> */}
        </>
    );
}
