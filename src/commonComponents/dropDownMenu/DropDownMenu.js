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
                  <MenuItem onClick={() => handleAnchorClose('UNPUBLISH')}>UNPUBLISH</MenuItem>
                  <MenuItem onClick={() => handleAnchorClose('PUBLISH')}>PUBLISH</MenuItem>
                  
                </>
              )
              :
              title === "Courses" ?
                (
                  <>
                    <MenuItem onClick={() => handleAnchorClose('All')}>All</MenuItem>
                  <MenuItem onClick={() => handleAnchorClose('UNPUBLISH')}>UNPUBLISH</MenuItem>
                  <MenuItem onClick={() => handleAnchorClose('PUBLISH')}>PUBLISH</MenuItem>
                  </>
                )
                :
                title === "All Students" ?
                  (
                    <>
                      <MenuItem onClick={() => handleAnchorClose('All')}>All</MenuItem>
                      <MenuItem onClick={() => handleAnchorClose('ACTIVE')}>ACTIVE</MenuItem>
                      <MenuItem onClick={() => handleAnchorClose('OFFLINE')}>OFFLINE</MenuItem>
                    </>
                  )
                  :
                  title === "Enrollment Approval" ?
                    (
                      <>
                        <MenuItem onClick={() => handleAnchorClose('All')}>All</MenuItem>
                        <MenuItem onClick={() => handleAnchorClose('PENDING')}>PENDING</MenuItem>
                        <MenuItem onClick={() => handleAnchorClose('APPROVED')}>APPROVED</MenuItem>
                        <MenuItem onClick={() => handleAnchorClose('REJECT')}>REJECT</MenuItem>

                      </>
                    )
                    :
                    title === "Events" ?
                      (
                        <>
                          <MenuItem onClick={() => handleAnchorClose('All')}>All</MenuItem>
                          <MenuItem onClick={() => handleAnchorClose('FUTURE')}>FUTURE</MenuItem>
                          <MenuItem onClick={() => handleAnchorClose('CURRENT')}>CURRENT</MenuItem>
                          <MenuItem onClick={() => handleAnchorClose('PAST')}>PAST</MenuItem>

                        </>
                      )
                      :
                      title === "Contact us" ?
                        (
                          <>
                            <MenuItem onClick={() => handleAnchorClose('All')}>All</MenuItem>
                            <MenuItem onClick={() => handleAnchorClose('UNSEEN')}>UNSEEN</MenuItem>
                            <MenuItem onClick={() => handleAnchorClose('CONTACTED')}>CONTACTED</MenuItem>
                            <MenuItem onClick={() => handleAnchorClose('DECLINE')}>DECLINE</MenuItem>
                            <MenuItem onClick={() => handleAnchorClose('USEFUL')}>USEFUL</MenuItem>
                          </>
                        )
                        :
                        (
                          <>
                            <MenuItem onClick={() => handleAnchorClose('All')}>All</MenuItem>
                            <MenuItem onClick={() => handleAnchorClose('ADMIN')}>ADMINS</MenuItem>
                            <MenuItem onClick={() => handleAnchorClose('TEACHER')}>TEACHERS</MenuItem>
                          </>
                        )

          }
        </>

      </Menu>
    </div>
  );
}
