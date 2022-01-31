import React from 'react';
import {
    Person,
    RecordVoiceOver,
    Subscriptions,
    PeopleOutline,
    LocalActivity,
    Face,
    ExitToApp,
    Dashboard,
    LibraryAddCheck,
    QuestionAnswerRounded,
    ContactMail,
} from '@mui/icons-material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
export const UseDrawer = () => {
    const [open, setOpen] = React.useState(false);
    const menuItems = [
        {
            text: 'Dashboard',
            icon: <Dashboard />,
            path: '/dashboard',
        },
        {
            text: 'Admins',
            icon: <Person />,
            path: '/admin'
        },
        {
            text: 'Teachers',
            icon: <RecordVoiceOver />,
            path: '/teachers'
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
            path: '/contact'
        },
        {
            text: 'FAQs',
            icon: <QuestionAnswerRounded />,
            path: '/faq'
        },
        {
            text: 'Profile',
            icon: <Face />,
            path: '/profile'
        },
        {
            text: 'Logout',
            icon: <ExitToApp />,
            path: '/login'
        },
    ];


    const handleDrawer = () => {
        setOpen(!open);
    };

    return [{
        menuItems,
        open,
        handleDrawer
    }]
}
