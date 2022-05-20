//Import from Libraries

import React from 'react';
//Import from Files

import Table from '../../../commonComponents/table/Table';
import { UseAllStudents } from './UseAllStudent';
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader';
export default function AllStudents() {
  const [
    {
      loader,
      ADD_LOADING,
      GET_LOADING,
      DELETE_LOADING,
      UPDATE_LOADING,
      refacteredData,
      ctaFormHandler,
      ctaDeleteHandler,
      ctaUpdateHandler,
      formInputs,
      ctaEditButtonHandler
    },
  ] = UseAllStudents();
  if (
    GET_LOADING ||
    DELETE_LOADING ||
    UPDATE_LOADING ||
    ADD_LOADING ||
    loader
  ) {
    return <CommonTableLoader />;
  }
  return (
    <>
      <Table
        title={'All Students'}
        tableHeadings={['id','Name', 'Email', 'Status', 'Actions']}
        ctaEditButtonHandler={ctaEditButtonHandler}
        printedKeys={[
          {
            key: "id",
          },
          {
            key: "name",
          },
          {
            key: "email",
          },
          {
            key: "status",
          },
          {
            type: "crud",
          },
        ]}
        formInputs={formInputs}
        filterdata={{
          key: "role",
          filterTag: ['All', 'ACTIVE', 'OFFLINE'],
        }}
        data={refacteredData}
        ctaFormHandler={ctaFormHandler}
        ctaDeleteHandler={ctaDeleteHandler}
        ctaUpdateHandler={ctaUpdateHandler}
      />
    </>
  );
}
