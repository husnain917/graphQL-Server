import { useState } from "react";

export default function useContactUs() {
    const [loading, setLoading] = useState(false)
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
            name: 'sami',
            email: 'sami',
            subject: 'sami',
            message: 'sami',
            status: 'pending'
        },
        {
            name: 'sami',
            email: 'sami',
            subject: 'sami',
            message: 'sami',
            status: 'pending'
        },
        {
            name: 'sami',
            email: 'sami',
            subject: 'sami',
            message: 'sami',
            status: 'pending'
        },
        {
            name: 'sami',
            email: 'sami',
            subject: 'sami',
            message: 'sami',
            status: 'pending'
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
