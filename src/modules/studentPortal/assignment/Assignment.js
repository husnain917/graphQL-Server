import React from 'react';
import Table from '../../../commonComponents/table/Table';
import UseAssignment from './UseAssignment';
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader';
export default function Assignment() {
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
  ] = UseAssignment();
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
      title={'Assignments'}
      tableHeadings={[
        "Id",
        'Name',
        'Course Id',
        'Course Batch Id',
        'Created At',
        'Update At',
        'Actions'
      ]}

      ctaFormHandler={ctaFormHandler}
      // ctaDeleteHandler={ctaDeleteHandler}
      ctaUpdateHandler={ctaUpdateHandler}
      printedKeys={[
        {
          key: "id",
        },
        {
          key: "name",
        },
        {
          key: "coursesId",
        },
        {
          key: 'courseBatchesId',
        },
        {
          key: 'createdAt'
        },
        {
          key: 'updateAt'
        },
        {
          type: 'crud'
        }
      ]}
      formInputs={formInputs}
      filterdata={{
        key: "feeStatus",
        filterTag: ['All', 'Pending', 'Paid'],
      }}
      data={refacteredData}
      disableAddIcon={true}
    />

  )
}
