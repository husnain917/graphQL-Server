import React from 'react';
import Table from '../../../commonComponents/table/Table';
import UseQuiz from './UseQuiz';
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader';
import NewTable from '../../../commonComponents/newTable/NewTable';
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
    <NewTable
      title={'Quiz'}
      tableHeadings={[
        {
          id: 'courseBatch',
          Label: 'Course Batch'
        },
        {
          id: 'courseBatchesId',
          Label: 'Course Batch Id'
        },
        {
          id: 'coursesId',
          Label: 'Course Id'
        },
        {
          id: 'createdAt',
          Label: 'Created At'
        },
        {
          id: "updateAt",
          Label: "Update At"
        },
        {
          id: "action",
          Label: "Action"
      },

      ]}
      ctaFormHandler={ctaFormHandler}
      // ctaDeleteHandler,
      ctaUpdateHandler={ctaUpdateHandler}
      printedKeys={[
        {
          key: "courseBatch",
        },
        {
          key: 'courseBatchesId',
        },
        {
          key: "coursesId"
        },
        {
          key: "createdAt"
        },
        {
          key: "updatedAt"
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
