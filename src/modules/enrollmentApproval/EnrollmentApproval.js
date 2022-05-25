import React from 'react';
import { ToastContainer } from 'react-toastify';
import CommonTableLoader from '../../commonComponents/commonTableLoader/CommonTableLoader';
import Table from '../../commonComponents/table/Table';
import { UseEnrollmentApproval } from './useEnrollmentApproval';
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
          ctaEditButtonHandler
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
                                        'Student Name',
                                        'Email',
                                        'Course',
                                        'Payment Method',
                                        'Amount',
                                        'Transaction ID',
                                        'Status',
                                        'Action',
                                    ]}
                                    ctaEditButtonHandler={ctaEditButtonHandler}
                                    printedKeys={[
                                      {
                                        key: "id",
                                      },
                                      {
                                        key: "studentName",
                                      },
                                      {
                                        key: "email",
                                      },
                                      {
                                        key: "course",
                                      },
                                      {
                                          key:'amount'
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
                                      filterTag: ['All', 'PENDING', 'APPROVED','REJECT'],
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
