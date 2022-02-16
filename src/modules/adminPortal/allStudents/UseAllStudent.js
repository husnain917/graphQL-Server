import { useState } from "react";
export function UseAllStudents() {
  const [loading, setLoading] = useState(false);
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
      name: "ahsan",
      email: "taseries260@gmail.com",
      status: "Active",
      phone: '+9200000000000',
      image: "image"
    },
    {
      name: "ahsan",
      email: "taseries260@gmail.com",
      status: "Active",
      phone: '+9200000000000',
      image: "image"
    },
    {
      name: "ahsan",
      email: "taseries260@gmail.com",
      status: "Active",
      phone: '+9200000000000',
      image: "image"
    },
    {
      name: "ahsan",
      email: "taseries260@gmail.com",
      status: "Active",
      phone: '+9200000000000',
      image: "image"
    }
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

  return [{ filterDataArray, loading, open, handleClickOpen, handleClose, openAnchor, anchorEl, handleAnchorClose, handleAnchorClick}]
}