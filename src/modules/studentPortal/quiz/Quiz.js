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
      DELETE_LOADING,
      UPDATE_LOADING,
      refacteredData,
      ctaFormHandler,
      ctaDeleteHandler,
      ctaUpdateHandler,
      formInputs,
    },
  ] = UseQuiz();
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
      title={'Quiz'}
      tableHeadings={[
        "Id",
        'Course Batch',
        'Course Batch Id',
        'Course',
        'Course Id',
      ]}
      printedKeys={[
        {
          key: "id",
        },
        {
          key: "courseBatch",
        },
        {
          key: 'courseBatchId',
        },
        {
          key: 'course'
        },
        {
          key: 'courseId'
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
