import React from 'react';
import Table from '../../../commonComponents/table/Table';
import UseCourseCategory from './UseCourseCategory';
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader';
import NewTable from '../../../commonComponents/newTable/NewTable';
export default function CourseCategory() {
    const [
        {
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
    ] = UseCourseCategory();
    if (
        GET_LOADING ||
        // DELETE_LOADING ||
        UPDATE_LOADING ||
        ADD_LOADING
    ) {
        return <CommonTableLoader />;
    }
    return (
        <NewTable
            title={'Course Category'}
            tableHeadings={[
                {
                    id: "categoryName",
                    Label: "Category Name"
                },
                {
                    id: "imageUrl",
                    Label: "Image"
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
                    Label: "Action",
                    marginLeft:11
                },
            ]}
            // sx={{marginLeft :6}}
            ctaFormHandler={ctaFormHandler}
            // ctaDeleteHandler={ctaDeleteHandler}
            ctaUpdateHandler={ctaUpdateHandler}
            printedKeys={[
                {
                    key: "categoryName",
                },
                {
                    key: 'imageUrl',
                },
                {
                    key: 'createdAt'
                },
                {
                    key: 'updateAt'
                },
                // {
                //     key: "action"
                // },
                {
                    type: 'crud'
                },
            ]}
            formInputs={formInputs}
            filterdata={{
                key: "status",
                filterTag: [
                    'All',
                    'Offline',
                    'Active'
                ],
            }}
            data={refacteredData}
            disableAddIcon={true}
        />

    )
}
