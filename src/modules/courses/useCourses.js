import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_COURSES } from '../../lib/queries/AllQueries';

export function UseCourses() {
  // const [loading, setLoading] = useState(false)
  const [filterValue, setFilterValue] = useState('');
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openAnchor = Boolean(anchorEl);
  let { data, loading, error } = useQuery(GET_COURSES)
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
  // const data = [
  //   {
  //     name: 'sami',
  //     trainer: 'Naveed sarwar',
  //     status: 'Active',
  //     phone: '000000000000',
  //     image: 'image'
  //   },
  //   {
  //     name: 'sami',
  //     trainer: 'Naveed sarwar',
  //     status: 'Closed',
  //     phone: '000000000000',
  //     image: 'image'
  //   },
  //   {
  //     name: 'sami',
  //     trainer: 'Naveed sarwar',
  //     status: 'Active',
  //     phone: '000000000000',
  //     image: 'image'
  //   },
  //   {
  //     name: 'sami',
  //     trainer: 'Naveed sarwar',
  //     status: 'Active',
  //     phone: '000000000000',
  //     image: 'image'
  //   },
  // ]
  const filterDataArray = data?.findManyCourses.filter((item) => {
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
