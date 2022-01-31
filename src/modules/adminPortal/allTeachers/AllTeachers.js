//Import from Libraries

import React from 'react'
import { ToastContainer } from 'react-toastify';
import {Audio} from "react-loader-spinner";
//Import from Files

import Table from '../../../commonComponents/table/Table';
import { AllTeachersStyle } from './AllTeachersStyle';
import {UseAllTeachers} from './UseAllTeachers'
export default function AllTeachers() {
  const [{
    data,
    loading
  }]  = UseAllTeachers();

  return (
    <>
      <ToastContainer />
      {
        loading ?
          <AllTeachersStyle.LoaderContainer>
            <Audio  color="#0D4cb5" height={100} width={100} />
          </AllTeachersStyle.LoaderContainer>
          :
          <>
            <Table
              title={'All Teachers'}
              data={data}
            />
          </>
      }
    </>
  );
}
