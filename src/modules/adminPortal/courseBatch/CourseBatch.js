import React from 'react';
import Table from '../../../commonComponents/table/Table';
import UseCourseBatch from './UseCourseBatch';
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader';
export default function CourseBatch() {
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
    ] = UseCourseBatch();
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
                'Name',
                'Course Id',
                'Course Name',
                'createdAt',
                'updateAt',
                'Actions'
            ]}
            ctaFormHandler={ctaFormHandler}
            ctaDeleteHandler={ctaDeleteHandler}
            ctaUpdateHandler={ctaUpdateHandler}
            printedKeys={[
                {
                    key: "id",
                },
                {
                    key: "name",
                },
                {
                    key: 'coursesId',
                },
                {
                    key: 'courseName'
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
