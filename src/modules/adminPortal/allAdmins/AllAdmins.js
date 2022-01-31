//Import from Libraries

import React from 'react'
import { ToastContainer } from 'react-toastify';
import {Audio} from "react-loader-spinner";
//Import from Files

import Table from '../../../commonComponents/table/Table';
import { AllAdminsStyle } from './AllAdminsStyle';
import {UseAllAdmins} from './UseAllAdmins'
export default function AllAdmins() {
  const [{
    data,
    loading
  }]  = UseAllAdmins();

  return (
    <>
      <ToastContainer />
      {
        loading ?
          <AllAdminsStyle.LoaderContainer>
            <Audio type="Oval" color="#0D4cb5" height={100} width={100} />
          </AllAdminsStyle.LoaderContainer>
          :
          <>
            <Table
              title={'All Admins'}
              data={data}
            />
          </>
      }
    </>
  );
}
