import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
import { useState, useContext } from "react";

import {
  ToastError,
  ToastSuccess,
  ToastWarning,
} from "../../../commonComponents/commonFunction/CommonFunction";
import {
  ADD_ORGANIZATION,
  ADD_USER,
  // DELETE_USER,
  UPDATE_USER,
} from "../../../lib/mutation/AllMutations";
import { GET_ALL_ORGANIZATION } from "../../../lib/queries/AllQueries";
import FiltredData from "../../../constants/FiltredRoles";
import { openModal, updateFlag, userData, editData, editId, valTel } from "../../../lib/reactivities/reactiveVarables";


export function UseAllOrganization() {
  let { data, loading: GET_LOADING } = useQuery(GET_ALL_ORGANIZATION);
  const [{ userGroup }] = FiltredData();
  const useUserData = useReactiveVar(userData)
  const useEditData = useReactiveVar(editData)
  const useEditId = useReactiveVar(editId)
  const useValTel = useReactiveVar(valTel)

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
    // {
    //   label: "Cnic",
    //   name: "cnic",
    //   type: "number",
    // },
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
      dropDownUserGroup: userGroup,
    },
  ];

  //GET STAFF

  const refacteredData = [];
  data?.findManyOrganizations?.map((item) => {
    refacteredData.push({
      id: item.id,
      name: item.name,
      email: item.email,
      role: item.role,
      address: item.address,
      contact: item.contact,
    });
  });
  console.log("sami", refacteredData);

  //ADD Organization
  const AddOrganizationInCache = (cache, { data }) => {
    const newOrganization = data.createOrganization
    const organizations = cache.readQuery({
      query: GET_ALL_ORGANIZATION,
    })

    cache.writeQuery({
      query: GET_ALL_ORGANIZATION,
      data: {
        findManyOrganizations: [
          ...organizations.findManyOrganizations,
          newOrganization
        ]
      }
    })
  };

  let [CreateOrganization, { loading: ADD_LOADING }] = useMutation(ADD_ORGANIZATION, {
    update: AddOrganizationInCache
  });
  const ctaFormHandler = async (event) => {
    event.preventDefault();
    if (!useEditData?.name) {
      ToastWarning("Name required");
    } else if (!useEditData?.email) {
      ToastWarning("Email required");
    } else if (!useValTel) {
      ToastWarning("Contact required");
    } else if (!useEditData?.address) {
      ToastWarning("address required");
    } else if (!useEditData?.userGroup) {
      ToastWarning("User Group required");
    } else {
      try {
        await CreateOrganization({
          variables: {
            data: {
              name: useEditData?.name,
              email: useEditData?.email,
              password: useEditData?.password,
              role: "ORGANIZATIONKEY",
              contact: useValTel,
              userGroup: {
                connect: {
                  id: useEditData?.userGroup,
                },
              },
              // organizations: {
              //   connect: {
              //     id: useUserData.id,
              //   },
              // },
            },
          },
          onCompleted() {
            openModal(false)
            updateFlag(false)
            editData({})
            ToastSuccess("Organization Added");
          },


        });
      } catch (error) {

        openModal(false)
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

  let [UpdateUser, { loading: UPDATE_LOADING }] = useMutation(UPDATE_USER);
  const ctaUpdateHandler = async (event) => {
    event.preventDefault();
    if (!useEditData?.name) {
      ToastWarning("Name required");
    } else if (!useEditData?.email) {
      ToastWarning("Email required");
    } else if (!useValTel) {
      ToastWarning("Contact Required");
    } else if (!useEditData?.cnic) {
      ToastWarning("cnic required");
    } else if (!useEditData?.address) {
      ToastWarning("address required");
    } else if (!useEditData?.userGroup) {
      ToastWarning("Role required");
    } else {
      try {
        await UpdateUser({
          variables: {
            where: {
              id: useEditId,
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
                set: useValTel,
              },
              userGroup: {
                connect: {
                  id: useEditData?.userGroup,
                },
              },
            },
          },
          onCompleted() {
            openModal(false)
            updateFlag(false)
            editData({})
            ToastSuccess(" Updated");
          },
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  };
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
