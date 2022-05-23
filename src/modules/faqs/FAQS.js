import React from 'react';
import Table from '../../commonComponents/table/Table';
import { UseFaqs } from './UseFAQS';
import { ToastContainer } from 'react-toastify';
import CommonTableLoader from '../../commonComponents/commonTableLoader/CommonTableLoader';
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
            ctaEditButtonHandler
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
                    'id',
                    'Faq Question',
                    'Faq Answer',
                    'Created At',
                    'Update At',
                    'Action',
                ]}
                ctaEditButtonHandler={ctaEditButtonHandler}
                printedKeys={[
                    {
                        key: "id",
                    },
                    {
                        key: "faqQuestion",
                    },
                    {
                        key: "faqAnswer",
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
