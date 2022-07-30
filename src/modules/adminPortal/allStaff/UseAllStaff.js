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
import FiltredData from '../../../constants/FiltredRoles'







export function UseAllStaff() {
  let {
    data,
    loading: GET_LOADING,
  } = useQuery(GET_USERS);
  const [{ userGroup }] = FiltredData()

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
      label: "Address",
      name: "address",
      type: "text",
    },
    {
      label: "Contact",
      name: "contact",
      type: "contact",
    },
    {
      label: "Select User Group",
      name: "userGroup",
      type: "roleSelect",
      dropDownUserGroup: userGroup
    },
  ]
  const {
    state,
    dispatch
  } = useContext(AppContext);

  //GET STAFF 

  const refacteredData = [];
  data?.users?.map((item) => {
    if (item.userGroup.userGroupRole === "TEACHER") {
      refacteredData.push({
        id: item.id,
        name: item.name,
        email: item.email,
        cnic: item.cnic,
        address: item.address,
        contact: item.contact,
        role: item.userGroup.userGroupRole
      });
    }
    if (item.userGroup.userGroupRole === "ADMIN") {
      refacteredData.push({
        id: item.id,
        name: item.name,
        email: item.email,
        cnic: item.cnic,
        address: item.address,
        contact: item.contact,
        role: item.userGroup.userGroupRole
      });
    }

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
    else if (!state?.valTel) {
      ToastWarning('Contact required')
    }
    else if (!state.editData?.cnic) {
      ToastWarning('cnic required')
    }
    else if (!state.editData?.address) {
      ToastWarning('address required')
    }
    else if (!state.editData?.userGroup) {
      ToastWarning('User Group required')
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
              contact: state?.valTel,
              userGroup: {
                connect: {
                  id: state.editData?.userGroup
                }
              },
              organizations: {
                connect: {
                  id: state?.user.id
                }
              },
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
            console.log(state.user.id)
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
    else if (state.valTel) {
      ToastWarning('Contact Required')
    }
    else if (!state.editData?.cnic) {
      ToastWarning('cnic required')
    }
    else if (!state.editData?.address) {
      ToastWarning('address required')
    }
    else if (!state.editData?.userGroup) {
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
                set: state.valTel,
              },
              userGroup: {
                connect: {
                  id: state.editData?.userGroup
                }
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