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
export var MENU_ITEMS = [
    {
        text: 'Dashboard',
        icon: <Dashboard />,
        path: '/dashboard',
        role: 'ADMIN'
    },
    {
        text: 'Dashboard',
        icon: <Dashboard />,
        path: '/dashboard',
        role: 'OWNER'
    },
    {
        text: 'Staff',
        icon: <PeopleAltIcon />,
        path: '/staff',
        role: 'OWNER'
    },
    {
        text: 'Courses',
        icon: <Subscriptions />,
        path: '/courses',
        role: 'ADMIN'
    },
    {
        text: 'Courses',
        icon: <Subscriptions />,
        path: '/courses',
        role: 'OWNER'
    },
    {
        text: 'Course Batch',
        icon: <Subscriptions />,
        path: '/courseBatch',
        role: 'OWNER'
    },
    {
        text: 'Students',
        icon: <PeopleOutline />,
        path: '/students',
        role: 'ADMIN'
    },
    {
        text: 'Students',
        icon: <PeopleOutline />,
        path: '/students',
        role: 'OWNER'
    },
    {
        text: 'Enrollment Approval',
        icon: <LibraryAddCheck />,
        path: '/approve-enrollment',
        role: 'ADMIN'
    },
    {
        text: 'Enrollment Approval',
        icon: <LibraryAddCheck />,
        path: '/approve-enrollment',
        role: 'OWNER'
    },
    {
        text: 'Success Stories',
        icon: <LocalActivity />,
        path: '/successStory',
        role: 'ADMIN'
    },
    {
        text: 'Success Stories',
        icon: <LocalActivity />,
        path: '/successStory',
        role: 'OWNER'
    },
    {
        text: 'Events',
        icon: <EventAvailableIcon />,
        path: '/events',
        role: 'ADMIN'
    },
    {
        text: 'Events',
        icon: <EventAvailableIcon />,
        path: '/events',
        role: 'OWNER'
    },
    {
        text: 'Contact',
        icon: <ContactMail />,
        path: '/contactus',
        role: 'ADMIN'
    },
    {
        text: 'Contact',
        icon: <ContactMail />,
        path: '/contactus',
        role: 'OWNER'
    },
    {
        text: 'FAQs',
        icon: <QuestionAnswerRounded />,
        path: '/faq',
        role: 'OWNER'
    },
    {
        text: 'FAQs',
        icon: <QuestionAnswerRounded />,
        path: '/faq',
        role: 'ADMIN'
    },

    {
        text: 'My Courses',
        icon: <Subscriptions />,
        path: '/myCourse',
        role: 'STUDENT'
    },
    {
        text: 'My Courses',
        icon: <Subscriptions />,
        path: '/myCourse',
        role: 'OWNER'
    },
    {
        text: 'Assignments',
        icon: <AssignmentIcon />,
        path: '/assignments',
        role: 'STUDENT'
    },
    {
        text: 'Assignments',
        icon: <AssignmentIcon />,
        path: '/assignments',
        role: 'OWNER'
    },
    {
        text: 'Quiz',
        icon: <QuizIcon />,
        path: '/quiz',
        role: 'STUDENT'
    },
    {
        text: 'Quiz',
        icon: <QuizIcon />,
        path: '/quiz',
        role: 'OWNER'
    },
    {
        text: 'Attandance',
        icon: <CoPresentIcon />,
        path: '/attandance',
        role: 'OWNER'
    },
    {
        text: 'Attandance',
        icon: <CoPresentIcon />,
        path: '/attandance',
        role: 'STUDENT'
    },
    {
        text: 'Student List',
        icon: <ListAltIcon />,
        path: '/studentList',
        role: 'OWNER'
    },
    {
        text: 'Student List',
        icon: <ListAltIcon />,
        path: '/studentList',
        role: 'TEACHER'
    },
    {
        text: 'Course Assigned',
        icon: <FactCheckIcon />,
        path: '/courseAssigned',
        role: 'TEACHER'
    },
    {
        text: 'Course Assigned',
        icon: <FactCheckIcon />,
        path: '/courseAssigned',
        role: 'OWNER'
    },
    {
        text: 'Lecture',
        icon: <LaptopChromebookIcon />,
        path: '/lecture',
        role: 'TEACHER'
    },
    {
        text: 'Lecture',
        icon: <LaptopChromebookIcon />,
        path: '/lecture',
        role: 'OWNER'
    },
    {
        text: 'Files and Assignment',
        icon: <UploadFileIcon />,
        path: '/fileOrAssignment',
        role: 'TEACHER'
    },
    {
        text: 'Files and Assignment',
        icon: <UploadFileIcon />,
        path: '/fileOrAssignment',
        role: 'OWNER'
    },
    {
        text: 'Profile ',
        icon: <Face />,
        path: `/profile/id`,
        role: 'OWNER'
    },
    {
        text: 'Profile ',
        icon: <Face />,
        path: `/profile/id`,
        role: 'ADMIN'
    },
    {
        text: 'Profile ',
        icon: <Face />,
        path: `/profile/id`,
        role: 'TEACHER'
    },
    {
        text: 'Profile ',
        icon: <Face />,
        path: `/profile/id`,
        role: 'STUDENT'
    }
];

