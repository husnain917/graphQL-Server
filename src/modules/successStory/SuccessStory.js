import React from 'react';
import Table from '../../commonComponents/table/Table';
import { UseSuccessStory } from './UseSuccessStory';
import CommonTableLoader from '../../commonComponents/commonTableLoader/CommonTableLoader';
import NewTable from '../../commonComponents/newTable/NewTable';
export default function SuccessStory() {
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
  ] = UseSuccessStory();
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
    <>

      <div>
        <NewTable
          title={'Success Stories'}
          tableHeadings={[
            {
              id: 'freelancingProfileUrl',
              Label: 'FreelancingProfileUrl'
            },
            {
              id: 'city',
              Label: 'City'
            },
            {
              id: 'paymentProof',
              Label: 'Payment Proof'
            },
            {
              id: 'description',
              Label: 'Description'
            },
            {
              id: 'totalEarnedAmount',
              Label: 'TotalEarnedAmount'
            },
            {
              id: 'whyReject',
              Label: 'Why Reject'
            },
            {
              id: "status",
              Label: 'Status'
            },
            {
                id: "action",
                Label: "Action"
            },
          ]}
          printedKeys={[
            {
              key: "freelancingProfileUrl",
              type:"modalProfileUrl"
            },
            {
              key: "city",
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
          // ctaDeleteHandler={ctaDeleteHandler}
          ctaUpdateHandler={ctaUpdateHandler}

        />
      </div>

    </>
  );
}
