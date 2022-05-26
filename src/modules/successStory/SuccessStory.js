import React from 'react';
import Table from '../../commonComponents/table/Table';
import { UseSuccessStory } from './UseSuccessStory';
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
            'Id',
            'City',
            'FreelancingProfileUrl',
            'PaymentProof',
            'Description',
            'TotalEarnedAmount',
            'WhyReject',
            'Status',
            'Action',
          ]}
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
              key: "totalEarnedAmount",
            },
            {
              key: "whyReject",
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
            filterTag: ['All', 'PUBLISH', 'UNPUBLISH'],
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
