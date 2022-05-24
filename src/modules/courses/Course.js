import React from 'react';
import { UseCourses } from './UseCourses';
import Table from '../../commonComponents/table/Table';
import { ToastContainer } from 'react-toastify';
import CommonTableLoader from '../../commonComponents/commonTableLoader/CommonTableLoader';
export default function Course() {
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
          ctaEditButtonHandler
        },
      ] = UseCourses();
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
        <>

            <Table
                title={'Courses'}
                tableHeadings={[
                    "Id",
                    'Name',
                    'Description',
                    'Introduction',
                    'instructorId',
                    'CategoryId',
                    'Price',
                    'Status',
                    'Action',
                ]}
                ctaEditButtonHandler={ctaEditButtonHandler}
                printedKeys={[
                  {
                    key: "id",
                  },
                  {
                    key: "courseName",
                  },
                  {
                    key: "courseDesc",
                  },
                  {
                    key: "courseIntro",
                  },
                  {
                    key: "instructorId",
                  },
                  {
                    key: "courseCategoryId",
                  },
                  {
                    key: "coursePrice",
                  },
                  {
                    key: "courseStatus",
                  },
                  {
                    type: "crud",
                  },
                  // {
                  //   key: "postUrl",
                  //   type: "image",
                  // },
                  // {
                  //   key: "postDesc",
                  //   type: "editor",
                  // },
                ]}
                formInputs={formInputs}
                // {[
                  // {
                  //   type: "editor",
                  //   name: "editor",
                  // },
                 
        
                  // {
                  //   label: 'CategoryName',
                  //   name: 'categoryName',
                  //   type: 'text',
                  // },
                  // {
                  //   label: 'createrName',
                  //   name: 'createrName',
                  //   type: 'text',
                  // }
                // ]}
                filterdata={{
                  key: "role",
                  filterTag: ['All', 'PUBLISH', 'UNPUBLISH'],
                }}
                data={refacteredData}
                ctaFormHandler={ctaFormHandler}
                ctaDeleteHandler={ctaDeleteHandler}
                ctaUpdateHandler={ctaUpdateHandler}

            />

        </>
    );
}
