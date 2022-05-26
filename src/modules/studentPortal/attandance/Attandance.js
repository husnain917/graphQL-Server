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
      DELETE_LOADING,
      UPDATE_LOADING,
      refacteredData,
      ctaFormHandler,
      ctaDeleteHandler,
      ctaUpdateHandler,
      formInputs,
    },
  ] = UseAttandance();
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
    <Table
      title={'My Courses'}
      tableHeadings={[
        "Id",
        'Attendence',
        'Date',
        'User',
        'User Id',
      ]}
      printedKeys={[
        {
          key: "id",
        },
        {
          key: "attendance",
        },
        {
          key: 'date',
        },
        {
          key: 'user'
        },
        {
          key: 'userId'
        }
      ]}
      formInputs={formInputs}
      filterdata={{
        key: "attendance",
        filterTag: ['All', 'true', 'false'],
      }}
      data={refacteredData}
      disableAddIcon={true}
    />

  )
}
