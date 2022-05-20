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
<<<<<<< HEAD
      ctaUpdateHandler,
      formInputs,
      ctaEditButtonHandler
=======
      ctaUpdateHandler
>>>>>>> abf823cf673bb3ea7da57b4415caf5e42deed16a
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
<<<<<<< HEAD
        title={"All Staff"}
        tableHeadings={["Id", "Name", "Email", "Phone", "Role", "Crud"]}
        ctaEditButtonHandler={ctaEditButtonHandler}
=======
        title={"All Posts"}
        tableHeadings={["Id", "Name", "Email", "Role", "Phone","Crud"]}
>>>>>>> abf823cf673bb3ea7da57b4415caf5e42deed16a
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
<<<<<<< HEAD
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
=======
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
>>>>>>> abf823cf673bb3ea7da57b4415caf5e42deed16a
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
