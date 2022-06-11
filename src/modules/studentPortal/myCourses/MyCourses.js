import React from 'react';
import Table from '../../../commonComponents/table/Table';
import UseMyCourses from './UseMyCourses';
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader';
export default function MyCourse() {
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
  ] = UseMyCourses();
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
      title={'My Courses'}
      tableHeadings={[
        "Id",
        'Course Id',
        'StudentId',
        'Course Approval',
        'Why Reject',
        'Fee status',
        'course Batch id',
        'Created At',
        'Updated At',
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
          key: "coursesId",
        },
        {
          key: "studentId",
        },

        {
          key: "courseApproval",
        },

        {
          key: "whyReject",
        },

        {
          key: "feeStatus",
        },
        {
          key: "courseBatchesId",
        },
        // {
        //   key: 'courseBatches',
        // },
        // {
        //   key: "courseApproval",
        // },
        // {
        //   key: "courses",
        // },
        // {
        //   key: 'student'
        // },
        {
          key: 'Created At'
        },
        {
          key: 'Updated At'
        },
        {
          type: 'crud'
        }
      ]}
      formInputs={formInputs}
      filterdata={{
        key: "feeStatus",
        filterTag: ['All', 'PENDING', 'PAID','HALFPAID'],
      }}
      data={refacteredData}
      disableAddIcon={true}
    />

  )
}
