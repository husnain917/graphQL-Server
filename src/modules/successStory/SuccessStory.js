import React from 'react';
import Table from '../../commonComponents/table/Table';
import { UseSuccessStory } from './UseSuccessStory';
import { ToastContainer } from 'react-toastify';
import CommonTableLoader from '../../commonComponents/commonTableLoader/CommonTableLoader';
export default function SuccessStory() {
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
  ] = UseSuccessStory();
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

      <div>
        <Table
          title={'Success Stories'}
          tableHeadings={[
            'id',
            'city',
            'freelancingProfileUrl',
            'paymentProof',
            'description',
            'status',
            'totalEarnedAmount',
            'whyReject',
            'Action',
          ]}
          ctaEditButtonHandler={ctaEditButtonHandler}
          printedKeys={[
            {
              key: "id",
            },
            {
              key: "city",
            },
            {
              key: "freelancingProfileUrl",
            },
            {
              key: "paymentProof",
            },
            {
              key: "description",
            },
            {
              key: "status",
            },
            {
              key: "totalEarnedAmount",
            },
            {
              key: "whyReject",
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
      </div>

    </>
  );
}
