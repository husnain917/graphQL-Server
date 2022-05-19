import React from 'react';
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
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
export const UseDrawer = () => {
    const [open, setOpen] = React.useState(false);
    // const items = JSON.parse(localStorage.getItem('user'));

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
            path: `/profile`
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
