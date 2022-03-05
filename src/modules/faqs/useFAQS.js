import { useState } from "react";


export function useFAQS() {
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
            email: '--------',
            phone: '-----------',
            question: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendiss malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,sit amet blandit leo lobortis eget."
        },
        {
            name: 'sami',
            email: '--------',
            phone: '-----------',
            question: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendiss malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,sit amet blandit leo lobortis eget."
        },
        {
            name: 'sami',
            email: '--------',
            phone: '-----------',
            question: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendiss malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,sit amet blandit leo lobortis eget."
        },
        {
            name: 'sami',
            email: '--------',
            phone: '-----------',
            question: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendiss malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,sit amet blandit leo lobortis eget."
        },
        {
            name: 'sami',
            email: '--------',
            phone: '-----------',
            question: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendiss malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,sit amet blandit leo lobortis eget."
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
