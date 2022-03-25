//Import from Libraries

import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Audio } from 'react-loader-spinner';
//Import from Files

import Table from '../../../commonComponents/table/Table';
import { AllStudentsStyle } from './AllStudentsStyle';
import { UseAllStudents } from './UseAllStudent';
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
    },
  ] = UseAllStudents();

  return (
    <>
      <ToastContainer />
      {loading ? (
        <AllStudentsStyle.LoaderContainer>
          <Audio type='Oval' color='#0D4cb5' height={100} width={100} />
        </AllStudentsStyle.LoaderContainer>
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
