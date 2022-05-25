//Import from Libraries

import React from "react";
import { ToastContainer } from "react-toastify";
//Import from Files
import CommonTableLoader from "../../../commonComponents/commonTableLoader/CommonTableLoader";
import Table from "../../../commonComponents/table/Table";
import { UseAllStaff } from "./useAllStaff";
export default function AllStaff() {
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
  ] = UseAllStaff();
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
      <ToastContainer />
      <Table
        title={"All Staff"}
        tableHeadings={["Id", "Name", "Email", "Phone", "Role", "Action"]}
        ctaEditButtonHandler={ctaEditButtonHandler}
        printedKeys={[
          {
            key: "id",
          },
          {
            key: "name",
          },
          {
            key: "email",
          },
          {
            key: "phone",
          },
          {
            key: "role",
          },
          {
            type: "crud",
          },
        ]}
        formInputs={formInputs}
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
