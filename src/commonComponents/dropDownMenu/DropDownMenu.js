import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function DropDownMenu({anchorEl,handleAnchorClose,openAnchor}) {
  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openAnchor}
        onClose={handleAnchorClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem  onClick={()=>handleAnchorClose('All')}>All</MenuItem>
        <MenuItem  onClick={()=>handleAnchorClose('Admin')}>Admins</MenuItem>
        <MenuItem  onClick={()=>handleAnchorClose('Teacher')}>Teachers</MenuItem>
      </Menu>
    </div>
  );
}
