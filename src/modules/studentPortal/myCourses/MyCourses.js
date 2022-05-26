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
        'Course Name',
        'Course Id',
        'Student Name',
        'Student Id',
        'Course Approval',
        'Why Reject',
        'Fee Status',
        'Course Batch',
        'Course Batch Id',
      ]}
      printedKeys={[
        {
          key: "id",
        },
        {
          key: "courseName",
        },
        {
          key: "courseId",
        },
        {
          key: "studentName",
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
          key: "courseBatch",
        },
        {
          key: 'courseBatchId',
        },
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
