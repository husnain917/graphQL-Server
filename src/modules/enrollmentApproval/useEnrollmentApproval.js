import React, { useState } from 'react';

export function useEnrollmentApproval() {
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
      name: 'sami',
      email: 'samishokat1234@gmail.com',
      course: 'react native',
      paymentMethod: 'debit card',
      amount: '15000 RS',
      transactionId: 'none',
      status: 'Active'
    },
    {
      name: 'ahsan',
      email: 'samishokat@gmail.com',
      course: 'react native',
      paymentMethod: 'debit card',
      amount: '15000 RS',
      transactionId: 'none',
      status: 'Offline'
    },
    {
      name: 'sami',
      email: 'samishokat@gmail.com',
      course: 'react native',
      paymentMethod: 'debit card',
      amount: '15000 RS',
      transactionId: 'none',
      status: 'Offline'
    },
    {
      name: 'ali',
      email: 'samishokat@gmail.com',
      course: 'react native',
      paymentMethod: 'debit card',
      amount: '15000 RS',
      transactionId: 'none',
      status: 'Offline'
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

