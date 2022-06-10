import React from 'react';
import Table from '../../../commonComponents/table/Table';
import UseLecture from './UseLecture';
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader';
export default function Lecture() {
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
  ] = UseLecture();
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
      title={'Lectures'}
      tableHeadings={[
        "Id",
        'Lecture title',
        'Lecture video',
        'Course Id',
        'createdAt',
        'updateAt',
        'Actions'
      ]}
      printedKeys={[
        {
          key: "id",
        },
        {
          key: "lectureTitle",
        },
        {
          key: 'lectureVideo',
        },
        {
          key: 'courseId'
        },
        {
          key: 'courseId'
        },
        {
          key: 'createdAt'
        },
        {
          type: 'crud'
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
