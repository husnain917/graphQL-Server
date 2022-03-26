//Import from Libraries

import React from 'react';
import { ToastContainer } from 'react-toastify';
//Import from Files

import Table from '../../../commonComponents/table/Table';
import { UseAllStudents } from './UseAllStudent';
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader';
export default function AllStudents() {
  const [
    {
      filterDataArray,
      loading,
      open,
      handleClickOpen,
      handleClose,
      openAnchor,
      anchorEl,
      handleAnchorClose,
      handleAnchorClick,
      name,
      email,
      status,
      setName,
      setEmail,
      setStatus,
      ctaButtonHandler3,
      ctaDeleteHandlerStudent,
      DeleteLoading
    },
  ] = UseAllStudents();

  return (
    <>
      <ToastContainer />
      {loading ? (
        <CommonTableLoader />
      ) : DeleteLoading ? (
        <CommonTableLoader />
      ) : (
        <>
          <Table
            title={'All Students'}
            tableHeadings={['Name', 'Email', 'Status', 'Actions']}
            data={filterDataArray}
            name={name}
            email={email}
            status={status}
            setName={setName}
            setEmail={setEmail}
            setStatus={setStatus}
            ctaButtonHandler3={ctaButtonHandler3}
            ctaDeleteHandlerStudent={ctaDeleteHandlerStudent}
            handleClickOpen={handleClickOpen}
            open={open}
            handleClose={handleClose}
            anchorEl={anchorEl}
            handleAnchorClose={handleAnchorClose}
            handleAnchorClick={handleAnchorClick}
            openAnchor={openAnchor}
          />
        </>
      )}
    </>
  );
}
