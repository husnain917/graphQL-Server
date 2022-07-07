import React, { useContext, useState } from 'react'
import { ADD_USER_GROUP } from '../../../lib/mutation/AllMutations';
import { useMutation, useQuery } from "@apollo/client";
import { AppContext } from "../../../State";
import { ToastError, ToastSuccess, ToastWarning } from '../../../commonComponents/commonFunction/CommonFunction';
export function UseUserGroup() {

    const { state, dispatch } = useContext(AppContext)
    let [CreateUserGroup, { loading: ADD_LOADING }] = useMutation(ADD_USER_GROUP);
    const [userName, setUserName] = useState('')
    const [userGroupRole, setuserGroupRole] = useState('')
    const [email, setEmail] = useState('')
    const ctaFormHandler = async (event) => {

        event.preventDefault();
        if (userName === '') {
            ToastWarning('User Name Required')
        }
        else if (userGroupRole === '') {
            ToastWarning('User Group Role Required')
        }
        else if (email === '') {
            ToastWarning('Email required')
        }
        else {
            try {
                await CreateUserGroup({
                    variables: {

                        data: {
                            userName: userName,
                            userGroupRole: userGroupRole,
                            tabsPermission: null,
                            Organizations: {
                                connect: {
                                    id: state?.user?.organizationLogin?.id
                                }
                            }
                        }

                    },
                    onCompleted(data, cache) {
                        ToastSuccess('UserGroup Added')

                    },
                });
                console.log(state.editData);
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

    return [userName, userGroupRole, email, setEmail, setUserName, setuserGroupRole, ctaFormHandler]
}
