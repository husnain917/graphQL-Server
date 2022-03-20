import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ENROLLMENT } from '../../lib/queries/AllQueries'
export function useEnrollmentApproval() {
  let { loading, error, data } = useQuery(GET_ENROLLMENT);
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
  console.log(data.enrollmentApprovals);
  const filterDataArray = data?.enrollmentApprovals?.filter((item) => {
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
  return [{ filterDataArray, loading, open, handleClickOpen, handleClose, error, openAnchor, anchorEl, handleAnchorClose, handleAnchorClick }]
}

