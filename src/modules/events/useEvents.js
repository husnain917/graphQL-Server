import React, { useState } from 'react';

export function useEvents() {
    const [loading, setLoading] = React.useState(false)
    const [filterValue, setFilterValue] = useState('');
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const openAnchor = Boolean(anchorEl);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleAnchorClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleAnchorClose = (value) => {
        setAnchorEl(null);
        setFilterValue(typeof value == 'object' ? filterValue : value);
    };
    const data = [
        {
            Title: "Cloud Computing",
            Venue: 'Techloset Solution',
            MaxTickets: '100',
            DateTime: '01/10/22',
            EventType: 'Techlonogy',
            status: 'Active',
            Speakers: 'naveed sarwar',

        },
        {
            Title: "Block chain",
            Venue: 'Techloset Solution',
            MaxTickets: '100',
            DateTime: '01/10/22',
            EventType: 'Techlonogy',
            status: 'Active',
            Speakers: 'naveed sarwar',
        },
        {
            Title: "Full stack",
            Venue: 'Techloset Solution',
            MaxTickets: '100',
            DateTime: '01/10/22',
            EventType: 'Techlonogy',
            status: 'Offline',
            Speakers: 'naveed sarwar',
        },
        {
            Title: "Freelancing",
            Venue: 'Techloset Solution',
            MaxTickets: '100',
            DateTime: '01/10/22',
            EventType: 'Techlonogy',
            status: 'Offline',
            Speakers: 'naveed sarwar',
        },
    ]
    const filterDataArray = data.filter((item) => {
        if (filterValue === '') {
            return item;
        }
        else if (filterValue === item.status) {
            return item;
        }
        else if (filterValue === 'All') {
            return item;
        }
    })

    return [{ filterDataArray, loading, open, handleClickOpen, handleClose, openAnchor, anchorEl, handleAnchorClose, handleAnchorClick }]
}

