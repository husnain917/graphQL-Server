//Import from Libraries

import React from "react";
import {
  ToastContainer
} from "react-toastify";
//Import from Files
import CommonTableLoader from "../../../commonComponents/commonTableLoader/CommonTableLoader";
import NewTable from "../../../commonComponents/newTable/NewTable";
import Table from "../../../commonComponents/table/Table";
import {
  UseTabsPermissions
} from "./UseTabsPermissions";
export default function TabsPermissions() {
  const [
    {
      // ADD_LOADING,
      // GET_LOADING,
      // DELETE_LOADING,
      // UPDATE_LOADING,
      refacteredData,
      // ctaFormHandler,
      // ctaDeleteHandler,
      // ctaUpdateHandler,
      formInputs,
      // ctaEditButtonHandler
    },
  ] = UseTabsPermissions();
  // if (
  //   GET_LOADING ||
  //   // DELETE_LOADING ||
  //   UPDATE_LOADING ||
  //   ADD_LOADING
  // ) {
  //   return <CommonTableLoader />;
  // }
  return (
    <>
      <ToastContainer />

      {/* <Table */}
      <NewTable
        title={"Tabs Permissions"}
        tableHeadings={[
          {
            id: "permissions",
            Label: "permissions"
          },
          {
            id: "role",
            Label: "role"
          },
          {
            id: "createdAt",
            Label: "Created At"
          },
          {
            id: "updatedAt",
            Label: "updatedAt"
          },
          {
            id: "actions",
            Label: "Actions"
          }
        ]}
        // ctaEditButtonHandler={ctaEditButtonHandler}
        printedKeys={[
          {
            key: "permissions",
          },
          {
            key: "role",
          },
          {
            key: "createdAt",
          },
          {
            key: "UpdatedAt",
          },
          {
            type: "crud",
          },
        ]}
        formInputs={formInputs}
        filterdata={{
          key: "role",
          filterTag: [
            'All',
            'ADMIN',
            'TEACHER'
          ],
        }}
        data={refacteredData}
      // ctaFormHandler={ctaFormHandler}
      // ctaDeleteHandler={ctaDeleteHandler}
      // ctaUpdateHandler={ctaUpdateHandler}
      />
    </>
  );
}
