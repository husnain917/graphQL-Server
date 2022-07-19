import React from 'react';
import Table from '../../../commonComponents/table/Table';
import UseLecture from './UseLecture';
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader';
import NewTable from '../../../commonComponents/newTable/NewTable';
export default function Lecture() {
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
  ] = UseLecture();
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
      title={'Lectures'}
      tableHeadings={[
        {
          id: 'lectureTitle',
          Label: 'Lecture Title',
        },
        {
          id: 'lectureVideo',
          Label: 'Lecture Video',
        },
        {
          id: 'courseId',
          Label: 'Course Id'
        },
        {
          id: "createdAt",
          Label: "Created At"
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
      // ctaDeleteHandler={ctaDeleteHandler}
      ctaUpdateHandler={ctaUpdateHandler}
      printedKeys={[
        {
          key: "lectureTitle",
        },
        {
          key: 'lectureVideo',
        },
        {
          key: 'coursesId'
        },
        {
          key: 'createdAt'
        },
        {
          key: 'updateAt'
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