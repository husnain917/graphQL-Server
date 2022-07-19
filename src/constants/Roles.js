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
import SettingsIcon from '@mui/icons-material/Settings';
import ListAltIcon from '@mui/icons-material/ListAlt';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import QuizIcon from '@mui/icons-material/Quiz';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SpeakerIcon from '@mui/icons-material/Speaker';
import WebhookIcon from '@mui/icons-material/Webhook';
import GroupIcon from '@mui/icons-material/Group';
import StorageIcon from '@mui/icons-material/Storage';
export var MENU_ITEMS = [
    {
        text: 'Dashboard',
        icon: <Dashboard />,
        path: '/',
        role: 'ADMIN'
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
        text: 'Enrollment Approval',
        icon: <LibraryAddCheck />,
        path: '/approve-enrollment',
        role: 'ADMIN'
    },
    {
        text: 'Success Stories',
        icon: <LocalActivity />,
        path: '/successStory',
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
        role: 'OWNER'
    },
    {
        text: 'Assignments',
        icon: <AssignmentIcon />,
        path: '/assignments',
        role: 'STUDENT'
    },
    {
        text: 'Quiz',
        icon: <QuizIcon />,
        path: '/quiz',
        role: 'STUDENT'
    },
    {
        text: 'Attandance',
        icon: <CoPresentIcon />,
        path: '/attandance',
        role: 'OWNER'
    },
    {
        text: 'Lecture',
        icon: <LaptopChromebookIcon />,
        path: '/lecture',
        role: 'OWNER'
    },
    {
        text:'Speakers',
        icon:<SpeakerIcon/>,
        path:'/speakers',
        role:'OWNER',
    },
    {
        text: 'Profile',
        icon: <Face />,
        path: `/profile/id`,
        role: 'OWNER'
    },
    {
        text: 'settings',
        icon: <SettingsIcon />,
        path: '/settings',
        role: 'OWNER'
    },
    {
        text: 'User Groups',
        path: '/user-group',
        icon: <GroupIcon />,
    },
    {
        text: 'Tabs Permission',
        path: '/tabs-permission',
        icon: <WebhookIcon />,
    },
    {
        text: 'Api Permission',
        path: '/api-permissions',
        icon: <StorageIcon />,
    }
];

