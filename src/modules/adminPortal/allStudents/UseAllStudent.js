import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
import { useState, useContext } from "react";
import {
  ToastError,
  ToastSuccess,
  ToastWarning,
} from "../../../commonComponents/commonFunction/CommonFunction";
import FiltredData from "../../../constants/FiltredRoles";
import {
  ADD_USER,
  // DELETE_USER,
  UPDATE_USER,
} from "../../../lib/mutation/AllMutations";
import {
  GET_USERS
} from "../../../lib/queries/AllQueries";
import { openModal, updateFlag, editData, valTel, editId, userData } from "../../../lib/reactivities/reactiveVarables";







export function UseAllStudents() {
  const useEditId = useReactiveVar(editId)
  const useEditData = useReactiveVar(editData)
  const useContact = useReactiveVar(valTel)
  const useUserData = useReactiveVar(userData)
  console.log("Edit data in students", useEditData);
  console.log("Contact in students", useUserData);
  const [{ userGroupStudent }] = FiltredData()

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
      // sx: {
      //   input : {
      //     "&:invalid":{
      //       border: "red solid 2px"
      //     },
      //     // "&:valid"
      //   }
      // }
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
      dropDownUserGroup: userGroupStudent
    },
  ]






  //GET STAFF 

  let {
    data,
    loading: GET_LOADING,
    error
  } = useQuery(GET_USERS);
  const refacteredData = [];
  data?.users?.map((item) => {
    if (item.userGroup?.userGroupRole === "STUDENT") {
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

  });


  //ADD STAFF

  let [
    Register,
    {
      loading: ADD_LOADING
    }] = useMutation(ADD_USER);

  const ctaFormHandler = async (event) => {
    event.preventDefault();
    if (!useEditData?.name) {
      ToastWarning('Name required')
    }
    else if (!useEditData?.email) {
      ToastWarning('Email required')
    }
    else if (useContact == "") {
      ToastWarning('Contact required')
    }
    else if (!useEditData?.cnic) {
      ToastWarning('cnic required')
    }
    else if (!useEditData?.address) {
      ToastWarning('address required')
    }
    else if (!useEditData?.userGroup) {
      ToastWarning('User Group required')
    }
    else {
      try {
        await Register({
          variables: {

            data: {
              name: useEditData?.name,
              email: useEditData?.email,
              password: useEditData?.password,
              cnic: useEditData?.cnic,
              contact: useContact,
              userGroup: {
                connect: {
                  id: useEditData.userGroup
                }
              }
            }

          },
          onCompleted() {
            // dispatch({
            //   type: "setModal",
            //   payload: {
            //     modalUpdateFlag: false,
            //     openFormModal: false,
            //   },
            // });
            openModal(false)
            updateFlag(false)
            editData({})
            valTel("")


            ToastSuccess('Student Added')
          },
          refetchQueries: [{ query: GET_USERS }],

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
        // dispatch({
        //   type: "setModal",
        //   payload: {
        //     openFormModal: false,
        //   },
        // });
        openModal(false)
        ToastError(error.message);

      }
    }

  };







  //Update staff

  let [UpdateStudents, { loading: UPDATE_LOADING }] = useMutation(UPDATE_USER);

  const ctaUpdateHandler = async (event) => {
    event.preventDefault()
    if (!useEditData?.name) {
      ToastWarning('Name required')
    }
    else if (!useEditData?.email) {
      ToastWarning('Email required')
    }
    else if (useContact == "") {
      ToastWarning('contact must be 11 characters')
    }
    else if (!useEditData?.cnic) {
      ToastWarning('cnic required')
    }
    else if (!useEditData?.address) {
      ToastWarning('address required')
    }
    else if (!useEditData?.userGroup) {
      ToastWarning('User Group required')
    }
    else {
      try {
        await UpdateStudents({
          variables: {
            where: {
              id: useEditId
            },

            data: {
              name: {
                set: useEditData?.name,
              },
              email: {
                set: useEditData?.email,
              },
              password: {
                set: useEditData?.password,
              },
              cnic: {
                set: useEditData?.cnic,
              },
              address: {
                set: useEditData?.address,
              },
              contact: {
                set: useContact
              },
              userGroup: {
                connect: {
                  id: useEditData?.userGroup
                }
              }

            },
          },
          onCompleted() {
            // dispatch({
            //   type: "setModal",
            //   payload: {
            //     modalUpdateFlag: false,
            //     openFormModal: false,
            //   },
            // });
            openModal(false)
            updateFlag(false)
            editData({})
            valTel("")
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
