import { useMutation, useQuery } from "@apollo/client";
import { useState, useContext } from "react";
import {
  ToastError,
  ToastSuccess,
  ToastWarning,
} from "../../../commonComponents/commonFunction/CommonFunction";
import {
  ADD_USER,
  // DELETE_USER,
  UPDATE_USER,
} from "../../../lib/mutation/AllMutations";
import {
  GET_USERS
} from "../../../lib/queries/AllQueries";
import { AppContext } from "../../../State";







export function UseAllStudents() {
  const formInputs = [
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
      label: "Password",
      name: "password",
      type: "password",
    },
    {
      label: "Cnic",
      name: "cnic",
      type: "number",
    },
    {
      label: "Contact",
      name: "contact",
      type: "tel",
    },
    {
      label: "Address",
      name: "address",
      type: "text",
    },
    {
      label: "Role",
      name: "role",
      type: "select",
      dropDownContent: ["STUDENT"],
    },
  ]
  const { state, dispatch } = useContext(AppContext);






  //GET STAFF 

  let {
    data,
    loading: GET_LOADING,
    error
  } = useQuery(GET_USERS);
  const refacteredData = [];
  data?.users?.forEach((item) => {
    if (item.userRole === "STUDENT") {
      refacteredData.push({
        id: item.id,
        name: item.name,
        email: item.email,
        cnic: item.cnic,
        // address: item.address,
        contact: item.contact,
        role: item.userRole
      });
    }
  });


  //ADD STAFF

  let [CreateUser, { loading: ADD_LOADING }] = useMutation(ADD_USER);

  const ctaFormHandler = async (event) => {
    event.preventDefault();
    if (!state.editData?.name) {
      ToastWarning('Name required')
    }
    else if (!state.editData?.email) {
      ToastWarning('Email required')
    }
    else if (!state.editData?.contact) {
      ToastWarning('Contact required')
    }
    else if (!state.editData?.cnic) {
      ToastWarning('cnic required')
    }
    else if (!state.editData?.address) {
      ToastWarning('address required')
    }
    else if (!state.editData?.role) {
      ToastWarning('Role required')
    }
    else if (state.editData?.contact.length > 1 && state.editData?.contact.length < 11) {
      ToastWarning('Phone No Must be 10 digits')
      // setError('Phone Number Must be 10 digits')
    }

    else {
      try {
        await CreateUser({
          variables: {
            data: {
              name: state.editData?.name,
              email: state.editData?.email,
              password: state.editData?.password,
              cnic: state.editData?.cnic,
              contact: state.editData?.contact,
              address: state.editData?.address,
              userRole: state.editData?.role,
            }
          },
          onCompleted(data, cache) {
            dispatch({
              type: "setModal",
              payload: {
                modalUpdateFlag: false,
                openFormModal: false,
              },
            });
            ToastSuccess('Student Added')
          },
          refetchQueries: [{ query: GET_USERS }],
        });
      } catch (error) {
        dispatch({
          type: "setModal",
          payload: {
            openFormModal: false,
          },
        });
        ToastError(error.message);

      }
    }
  };





  // DELETE STAFF

  // let [DeleteUser, { loading: DELETE_LOADING }] = useMutation(DELETE_USER);
  // const ctaDeleteHandler = async ({ ...data }) => {
  //   try {
  //     await DeleteUser({
  //       variables: {
  //         where: {
  //           id: data.id,
  //         },
  //       },
  //       onCompleted(data) {
  //         ToastSuccess('Student Deleted')
  //       },
  //       refetchQueries: [{ query: GET_USERS }],
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };





  //Update staff

  let [UpdateStudents, { loading: UPDATE_LOADING }] = useMutation(UPDATE_USER);

  const ctaUpdateHandler = async (event) => {
    event.preventDefault()
    if (!state.editData?.name) {
      ToastWarning('Name required')
    }
    else if (!state.editData?.email) {
      ToastWarning('Email required')
    }
    else if (state.editData?.contact.length > 1 && state.editData?.contact.length < 11) {
      ToastWarning('contact must be 11 characters')
    }
    else if (!state.editData?.cnic) {
      ToastWarning('cnic required')
    }
    else if (!state.editData?.address) {
      ToastWarning('address required')
    }
    else if (!state.editData?.role) {
      ToastWarning('Role required')
    }
    else {
      try {
        await UpdateStudents({
          variables: {
            where: {
              id: state.editId
            },

            data: {
              name: {
                set: state.editData?.name,
              },
              email: {
                set: state.editData?.email,
              },
              password: {
                set: state.editData?.password,
              },
              cnic: {
                set: state.editData?.cnic,
              },
              address: {
                set: state.editData?.address,
              },
              contact: {
                set: state.editData?.contact,
              },
              userRole: {
                set: state.editData?.role,
              }
            },
          },
          onCompleted() {
            dispatch({
              type: "setModal",
              payload: {
                modalUpdateFlag: false,
                openFormModal: false,
              },
            });
            ToastSuccess('Student Updated')
          },
          refetchQueries: [{ query: GET_USERS }],
        })

      } catch (error) {
        console.log(error.message);
      }
    }
  }
  return [
    {
      ADD_LOADING,
      GET_LOADING,
      // DELETE_LOADING,
      UPDATE_LOADING,
      refacteredData,
      ctaFormHandler,
      // ctaDeleteHandler,
      ctaUpdateHandler,
      formInputs
    },
  ];
}
