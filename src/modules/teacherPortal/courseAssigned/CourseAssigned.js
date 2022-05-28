import React from 'react';
import Table from '../../../commonComponents/table/Table';
import UseCourseAssigned from './UseCourseAssigned';
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader';
export default function CourseAssigned() {
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
  ] = UseCourseAssigned();
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
      title={'Course Assigned'}
      tableHeadings={[
        "Id",
        'Name',
        'Course Batches',
        'Course Batches Id',
        'Courses',
        'Course Id',
      ]}
      printedKeys={[
        {
          key: "id",
        },
        {
          key: "name",
        },
        {
          key: 'courseBatches',
        },
        {
          key: 'courseBatchesId'
        },
        {
          key: 'courses'
        },
        {
          key: 'courseId'
        },
      ]}
      formInputs={formInputs}
      filterdata={{
        key: "status",
        filterTag: ['All', 'Offline', 'Active'],
      }}
      data={refacteredData}
      disableAddIcon={true}
    />

  )
}
