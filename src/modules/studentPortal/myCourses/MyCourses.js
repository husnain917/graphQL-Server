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
      DELETE_LOADING,
      UPDATE_LOADING,
      refacteredData,
      ctaFormHandler,
      ctaDeleteHandler,
      ctaUpdateHandler,
      formInputs,
    },
  ] = UseMyCourses();
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
        'Student Name',
        'Course Name',
        'Course Id',
        'Student Id',
        'Fee Status',
        'Course Batch',
        'Course Batch Id',
        'Course Approval',
        'Why Reject',
       
      ]}
      printedKeys={[
        {
          key: "id",
        },
        {
          key: "studentName",
        },
        {
          key: "courseName",
        },

        {
          key: "courseId",
        },

        {
          key: "studentId",
        },

        {
          key: "feeStatus",
        },
        {
          key: "courseBatch",
        },
        {
          key: 'courseBatchId',
        },
        {
          key: "courseApproval",
        },
        {
          key: "whyReject",
        },
        {
          key:'crud'
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
