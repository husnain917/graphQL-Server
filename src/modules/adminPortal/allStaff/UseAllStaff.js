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
import {
  AppContext
} from "../../../State";







export function UseAllStaff() {
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
      name: "userGroupRole",
      type: "roleSelect",
    },
    // {
    //   label: "User Group",
    //   name: "role",
    //   type: "select",
    //   dropDownContent: [
    //     "ADMIN",
    //     "TEACHER"
    //   ],
    // },
  ]
  const {
    state,
    dispatch
  } = useContext(AppContext);

  //GET STAFF 

  let {
    data,
    loading: GET_LOADING,
  } = useQuery(GET_USERS);
  const refacteredData = [
    // {
    //   id: 1,
    //   name: 'Atest',
    //   email: "Atest@gmail.com",
    //   contact: "1234",
    //   address: "ATest Address",
    //   cnic: "112321212",
    //   role: "ATeacher"
    // },
  ];
  data?.users?.forEach((item) => {
  
    refacteredData.push({
      id: item?.id,
      name: item?.name,
      email: item?.email,
      contact: item?.contact,
      // address: item.address,
      cnic: item?.cnic,
      role: item?.userRole,
    })
    console.log(item);
  });
  console.log("sami", refacteredData);

  //ADD STAFF

  let [
    Register,
    {
      loading: ADD_LOADING
    }] = useMutation(ADD_USER);


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
    // else if (!state.editData?.role) {
    //   ToastWarning('Role required')
    // }
    else if (state.editData?.contact.length > 1 && state.editData?.contact.length < 11) {
      ToastWarning('Phone No Must be 10 digits')
    }


    else {
      try {
        await Register({
          variables: {

            data: {
              name: state.editData?.name,
              email: state.editData?.email,
              password: state.editData?.password,
              cnic: state.editData?.cnic,
              contact: state.editData?.contact,
            }

          },
          refetchQueries: [{ query: GET_USERS }],

          onCompleted() {
            dispatch({
              type: "setModal",
              payload: {
                modalUpdateFlag: false,
                openFormModal: false,
              },
            });


            ToastSuccess('Staff Added')
          },
          // update(cache, { data: { addItems } }) {
          //   const { tados } = cache.readQuery({
          //     query: GET_STAFF
          //   })
          //   cache.writeQuery({
          //     query: GET_STAFF,
          //     data: {
          //       tados: [
          //         data.CreateManyStaff,
          //         ...tados

          //       ]
          //     }
          //   })
          // }

          // update: (cache, { data: { addItem } }) => {
          //   const data = cache.readQuery({ query: GET_STAFF });
          //   console.log('sami',data);
          //   data.items = [...data.items, addItem];
          //   cache.writeQuery({ query: GET_STAFF }, data);
          // },

        });
        // const queryResult = cache.readQuery({
        //   query: GET_STAFF
        // });
        // console.log('sami', queryResult);
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

  // let [
  //   DeleteUser,
  //   {
  //     loading: DELETE_LOADING
  //   }] = useMutation(DELETE_USER);
  // const ctaDeleteHandler = async ({ ...data }) => {
  //   try {
  //     await DeleteUser({
  //       variables: {
  //         where: {
  //           id: data.id,
  //         },
  //       },
  //       refetchQueries: [{ query: GET_USERS }],
  //       onCompleted(data) {
  //         ToastSuccess('Staff Deleted')
  //       },

  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };





  //Update staff

  let [
    UpdateUser,
    {
      loading: UPDATE_LOADING
    }] = useMutation(UPDATE_USER);
  const ctaUpdateHandler = async (event) => {
    event.preventDefault()
    if (!state.editData?.name) {
      ToastWarning('Name required')
    }
    else if (!state.editData?.email) {
      ToastWarning('Email required')
    }
    else if (state.editData?.contact.length > 1 && state.editData?.contact.length < 11) {
      ToastWarning('Phone No Must be 10 digit')
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
        await UpdateUser({
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
          refetchQueries: [{ query: GET_USERS }],
          onCompleted() {
            dispatch({
              type: "setModal",
              payload: {
                modalUpdateFlag: false,
                openFormModal: false,
              },
            });
            ToastSuccess('Staff Updated')

          },

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
      formInputs,
      // ctaEditButtonHandler
    },
  ];
}
