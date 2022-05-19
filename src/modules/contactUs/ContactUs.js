import React from 'react';
import Table from '../../commonComponents/table/Table';
import { ToastContainer } from 'react-toastify';
import CommonTableLoader from '../../commonComponents/commonTableLoader/CommonTableLoader';
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
            ctaEditButtonHandler
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
                        'id',
                        'Name',
                        'Subject',
                        'Message',
                        'Status',
                        'Reply',
                        'Actions',
                    ]}
                    ctaEditButtonHandler={ctaEditButtonHandler}
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
                            key: "status",
                        },
                        {
                            key: "reply",
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
                        filterTag: ['All', 'ADMIN', 'TEACHER'],
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
