import React from 'react';
import Table from '../../../commonComponents/table/Table';
import { ToastContainer } from 'react-toastify';
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader';
import { UseContactUs } from './UseContactUs';
export default function ContactUs() {
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
    ] = UseContactUs();
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
        <div>
            <>

                <Table
                    title='Contact us'
                    tableHeadings={[
                        'Id',
                        'Name',
                        'Subject',
                        'Message',
                        'Reply',
                        'Status',
                        'Action',
                    ]}
                    printedKeys={[
                        {
                            key: "id",
                        },
                        {
                            key: "name",
                        },
                        {
                            key: "subject",
                        },
                        {
                            key: "message",
                        },
                        {
                            key: "reply",
                        },
                        {
                            key: "status",
                        },
                        {
                            type: "crud",
                        },
                    ]}
                    formInputs={formInputs}
                    filterdata={{
                        key: "role",
                        filterTag: ["All", "CONTACTED", "DECLINE", "UNSEEN", "USEFUL"],
                    }}
                    data={refacteredData}
                    ctaFormHandler={ctaFormHandler}
                    ctaDeleteHandler={ctaDeleteHandler}
                    ctaUpdateHandler={ctaUpdateHandler}
                />

            </>
        </div>
    );
}
