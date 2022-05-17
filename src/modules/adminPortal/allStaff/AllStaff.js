//Import from Libraries

import React from "react";
import { ToastContainer } from "react-toastify";
//Import from Files
import CommonTableLoader from "../../../commonComponents/commonTableLoader/CommonTableLoader";
import Table from "../../../commonComponents/table/Table";
import { UseAllStaff } from "./UseAllStaff";
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
      ctaUpdateHandler
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
        title={"All Posts"}
        tableHeadings={["Id", "Name", "Email", "Role", "Phone","Crud"]}
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
            key: "role",
          },
          {
            key: "phone",
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
        formInputs={[
          // {
          //   type: "editor",
          //   name: "editor",
          // },
          {
            label: "Name",
            name: "name",
            type: "text",
          },
          {
            label: "Email",
            name: "email",
            type: "email",
          },
          {
            label: "Phone",
            name: "phone",
            type: "number",
          },
          {
            label: "Role",
            name: "role",
            type: "select",
            dropDownContent: ["Admin", "Teacher"],
          },

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
        ]}
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
