import { useMutation, useQuery } from "@apollo/client";
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
import { AppContext } from "../../../State";







export function UseAllStudents() {
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
      label: "Select User Group",
      name: "userGroup",
      type: "roleSelect",
      dropDownUserGroup: userGroupStudent
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
      else if (!state.editData?.userGroup) {
        ToastWarning('User Group required')
      }
      else if (state.editData?.contact.length > 1 && state.editData?.contact.length < 11) {
        ToastWarning('Phone No Must be 11 digits')
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
                userGroup: {
                  connect: {
                    id: state.editData?.userGroup
                  }
                }
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
  
  
              ToastSuccess('Student Added')
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
    else if (!state.editData?.userGroup) {
      ToastWarning('User Group required')
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
              userGroup: {
                connect: {
                  id: state.editData?.userGroup
                }
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
