import React from 'react';
import Table from '../../../commonComponents/table/Table';
import { UseFaqs } from './UseFAQS';
import { ToastContainer } from 'react-toastify';
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader';
export default function FAQS() {
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
    ] = UseFaqs();
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
                title='FAQS'
                tableHeadings={[
                    'Id',
                    'Faq Question',
                    'Faq Answer',
                    'Course Id',
                    'Created At',
                    'Update At',
                    'Action',
                ]}
                printedKeys={[
                    {
                        key: "id",
                    },
                    {
                        key: "faqQuestion",
                        type:"modalQuestion"
                    },
                    {
                        key: "faqAnswer",
                        type:"modalAnswer"
                    },
                    {
                        key: "courseId",
                    },
                    {
                        key: "createdAt",
                    },
                    {
                        key: "updateAt",
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
    );
}
