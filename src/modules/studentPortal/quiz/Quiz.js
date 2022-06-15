import React from 'react';
import Table from '../../../commonComponents/table/Table';
import UseQuiz from './UseQuiz';
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader';
export default function Quiz() {
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
  ] = UseQuiz();
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
      title={'Quiz'}
      tableHeadings={[
        "Id",
        'Course Batch Id',
        'Course',
        'Actions',
      ]}
      ctaFormHandler={ctaFormHandler}
      // ctaDeleteHandler,
      ctaUpdateHandler={ctaUpdateHandler}
      printedKeys={[
        {
          key: "id",
        },
        {
          key: "courseBatchesId",
        },
        {
          key: 'coursesId',
        },
        {
          type: "crud"
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
