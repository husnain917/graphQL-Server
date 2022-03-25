//Import from Libraries

import React from 'react'
import { ToastContainer } from 'react-toastify';
//Import from Files
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader'
import Table from '../../../commonComponents/table/Table';
import { UseAllStaff } from './UseAllStaff'
export default function AllStaff() {
  const [{ filterDataArray, loading, open, handleClickOpen, handleClose, openAnchor, anchorEl, handleAnchorClose, handleAnchorClick,error, ctaButtonHandler1, name, email, phone, role, setName, setEmail, setPhone, setRole }] = UseAllStaff();

  return (
    <>
      <ToastContainer />
      {
        loading ?
         <CommonTableLoader/>
          :
          <>
            <Table
              tableHeadings={['Name', 'Email', 'Role', 'Phone', 'Image', 'Actions']}
              title={'All Staff'}
              data={filterDataArray}
              name={name}
              email={email}
              role={role}
              phone={phone}
              setName={setName}
              setEmail={setEmail}
              setRole={setRole}
              setPhone={setPhone}
              ctaButtonHandler1={ctaButtonHandler1}
              loading={loading}
              error={error}
              handleClickOpen={handleClickOpen}
              open={open}
              handleClose={handleClose}
              anchorEl={anchorEl}
              handleAnchorClose={handleAnchorClose}
              handleAnchorClick={handleAnchorClick}
              openAnchor={openAnchor}
            />
          </>
        
      }
    </>
  );
}
