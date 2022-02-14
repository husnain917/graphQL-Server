import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function DropDownMenu({ anchorEl, handleAnchorClose, openAnchor, title }) {
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
        <>
          {
            title === "Success Stories" ?
              (
                <>
                  <MenuItem onClick={() => handleAnchorClose('All')}>All</MenuItem>
                  <MenuItem onClick={() => handleAnchorClose('pending')}>pending</MenuItem>
                  <MenuItem onClick={() => handleAnchorClose('Approved')}>Approve</MenuItem>
                  <MenuItem onClick={() => handleAnchorClose('Rejected')}>Reject</MenuItem>

                </>
              )
              :
              (
                <>
                  <MenuItem onClick={() => handleAnchorClose('All')}>All</MenuItem>
                  <MenuItem onClick={() => handleAnchorClose('Admin')}>Admins</MenuItem>
                  <MenuItem onClick={() => handleAnchorClose('Teacher')}>Teachers</MenuItem>
                </>
              )

          }
        </>

      </Menu>
    </div>
  );
}
