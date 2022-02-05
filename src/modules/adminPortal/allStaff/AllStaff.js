//Import from Libraries

import React from 'react'
import { ToastContainer } from 'react-toastify';
import {Audio} from "react-loader-spinner";
//Import from Files

import Table from '../../../commonComponents/table/Table';
import { AllStaffStyle } from './AllStaffStyle';
import {UseAllStaff} from './UseAllStaff'
export default function AllStaff() {
  const [{
    filterDataArray,
    loading,
    open,
    handleClickOpen,
    handleClose,
    openAnchor,
    anchorEl,
    handleAnchorClose,
    handleAnchorClick,
  }]  = UseAllStaff();

  return (
    <>
      <ToastContainer />
      {
        loading ?
          <AllStaffStyle.LoaderContainer>
            <Audio type="Oval" color="#0D4cb5" height={100} width={100} />
          </AllStaffStyle.LoaderContainer>
          :
          <>
            <Table
              title={'All Staff'}
              data={filterDataArray}
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
