import React from 'react';
import Table from '../../../commonComponents/table/Table';
import UseAttandance from './UseAttandance';
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader';
export default function Attandance() {
  const [
    {
      loader,
      ADD_LOADING,
      GET_LOADING,
      // DELETE_LOADING,
      UPDATE_LOADING,
      refacteredData,
      ctaFormHandler,
      // ctaDeleteHandler,
      ctaUpdateHandler,
      formInputs,
    },
  ] = UseAttandance();
  if (
    GET_LOADING ||
    // DELETE_LOADING ||
    UPDATE_LOADING ||
    ADD_LOADING ||
    loader
  ) {
    return <CommonTableLoader />;
  }
  return (
    <Table
      title={'Attandance'}
      tableHeadings={[
        "Id",
        'attendence',
        'Date',
        'User Id',
        'Actions'
      ]}
      // ctaDeleteHandler={ctaDeleteHandler}
      ctaFormHandler={ctaFormHandler}
      ctaUpdateHandler={ctaUpdateHandler}
      printedKeys={[
        {
          key: "id",
        },
        {
          key: "attendence",
        },
        {
          key: 'date',
        },
        {
          key: 'userId'
        },
        {
          type: "crud",
        },
      ]}
      formInputs={formInputs}
      filterdata={{
        key: "attendance",
        filterTag: ['All', 'PRESENT', 'ABSENT'],
      }}
      data={refacteredData}
      disableAddIcon={true}
    />

  )
}
