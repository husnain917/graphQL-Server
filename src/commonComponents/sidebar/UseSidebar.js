import React, { useContext } from 'react';
import {
    Subscriptions,
    PeopleOutline,
    LocalActivity,
    Face,
    Dashboard,
    LibraryAddCheck,
    QuestionAnswerRounded,
    ContactMail,
} from '@mui/icons-material';
import ListAltIcon from '@mui/icons-material/ListAlt';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import QuizIcon from '@mui/icons-material/Quiz';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../State';
export const UseDrawer = () => {
    const [open, setOpen] = React.useState(false);
    const { state, dispatch } = useContext(AppContext);

    const navigate = useNavigate()

    const menuItems = [
        {
            text: 'Dashboard',
            icon: <Dashboard />,
            path: '/dashboard',
        },
        {
            text: 'Staff',
            icon: <PeopleAltIcon />,
            path: '/staff'
        },
        {
            text: 'Courses',
            icon: <Subscriptions />,
            path: '/courses'
        },
        {
            text: 'Students',
            icon: <PeopleOutline />,
            path: '/students'
        },
        {
            text: 'Enrollment Approval',
            icon: <LibraryAddCheck />,
            path: '/approve-enrollment'
        },
        {
            text: 'Success Stories',
            icon: <LocalActivity />,
            path: '/successStory'
        },
        {
            text: 'Events',
            icon: <EventAvailableIcon />,
            path: '/events'
        },
        {
            text: 'Contact',
            icon: <ContactMail />,
            path: '/contactus'
        },
        {
            text: 'FAQs',
            icon: <QuestionAnswerRounded />,
            path: '/faq'
        },
        {
            text: 'Profile ',
            icon: <Face />,
            path: `/profile/id`
        },
    ];
    const studentMenuItems = [
        {
            text: 'My Courses',
            icon: <Subscriptions />,
            path: '/myCourse',
        },
        {
            text: 'Assignments',
            icon: <AssignmentIcon />,
            path: '/assignments'
        },
        {
            text: 'Quiz',
            icon: <QuizIcon />,
            path: '/quiz'
        },
        {
            text: 'Attandance',
            icon: <CoPresentIcon />,
            path: '/attandance'
        },
        {
            text: 'Success Stories',
            icon: <LocalActivity />,
            path: '/successStory'
        },
        {
            text: 'Profile ',
            icon: <Face />,
            path: `/profile/id`
        },
    ];

    const teacherMenuItems = [
        {
            text: 'Student List',
            icon: <ListAltIcon />,
            path: '/studentList',
        },
        {
            text: 'Course Assigned',
            icon: <FactCheckIcon />,
            path: '/courseAssigned'
        },
        {
            text: 'Lecture',
            icon: <LaptopChromebookIcon />,
            path: '/lecture'
        },
        {
            text: 'Files and Assignment',
            icon: <UploadFileIcon />,
            path: '/fileOrAssignment'
        },
        {
            text: 'Profile ',
            icon: <Face />,
            path: `/profile/id`
        },
    ];


    const handleDrawer = () => {
        setOpen(!open);
    };
    const ctaLogoutHandler = () => {
        dispatch({
            type: "setAuthState",
            payload: {
                user: null,
                authState: false
            }
        })
        localStorage.removeItem('token')
        navigate('/login')
        window.reload()

    }

    return [{
        menuItems,
        studentMenuItems,
        teacherMenuItems,
        open,
        handleDrawer,
        ctaLogoutHandler
    }]
}
