import React from 'react';
import { ToastContainer } from 'react-toastify';
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader';
import Table from '../../../commonComponents/table/Table';
import { UseEnrollmentApproval } from './UseEnrollmentApproval';
function EnrollmentApproval() {
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
  ] = UseEnrollmentApproval();
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
          title={'Enrollment Approval'}
          tableHeadings={[
            'Id',
            'User Id',
            'Course Id',
            'Payment Method',
            'Amount',
            'Transaction ID',
            'Status',
            'Action',
          ]}
          printedKeys={[
            {
              key: "id",
            },
            {
              key: "userId",
            },
            {
              key: "coursesId",
            },
            {
              key: 'amount'
            },
            {
              key: "paymentMethod",
            },
            {
              key: "transactionId",
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
            filterTag: ['All', 'PENDING', 'APPROVED', 'REJECT'],
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

export default EnrollmentApproval;
