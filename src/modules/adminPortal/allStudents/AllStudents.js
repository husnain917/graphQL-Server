//Import from Libraries

import React from 'react'
import { ToastContainer } from 'react-toastify';
import {Audio} from "react-loader-spinner";
//Import from Files

import Table from '../../../commonComponents/table/Table';
import { AllStudentsStyle } from './AllStudentsStyle';
import {UseAllStudents} from './UseAllStudent'
export default function AllStudents() {
  const [{
    data,
    loading
  }]  = UseAllStudents();

  return (
    <>
      <ToastContainer />
      {
        loading ?
          <AllStudentsStyle.LoaderContainer>
            <Audio type="Oval" color="#0D4cb5" height={100} width={100} />
          </AllStudentsStyle.LoaderContainer>
          :
          <>
            <Table
              title={'All Students'}
              data={data}
            />
          </>
      }
    </>
  );
}
