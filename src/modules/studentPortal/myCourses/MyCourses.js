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
        'course Batch id',
        'Course Approval',
        'Why Reject',
        'Created At',
        'Updated At',
        'Fee status',
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
          key: "courseBatchesId",
        },
        {
          key: "courseApproval",
        },

        {
          key: "whyReject",
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
          key: 'createdAt'
        },
        {
          key: 'updateAt'
        },

        {
          key: "feeStatus",
        },
        {
          type: 'crud'
        }
      ]}
      formInputs={formInputs}
      filterdata={{
        key: "feeStatus",
        filterTag: ['All', 'PENDING', 'PAID', 'HALFPAID'],
      }}
      data={refacteredData}
      disableAddIcon={true}
    />

  )
}
