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
        'Date',
        'User Id',
        'attendence',
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
          key: 'date',
        },
        {
          key: 'userId'
        },
        {
          key: "attendence",
        },
        {
          type: "crud",
        },
      ]}
      formInputs={formInputs}
      filterdata={{
        key: "attandance",
        filterTag: [
          'All',
          'PRESENT',
          'ABSENT'],
      }}
      data={refacteredData}
      disableAddIcon={true}
    />

  )
}
