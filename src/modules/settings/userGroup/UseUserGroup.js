import React, { useContext, useState } from 'react'
import { ADD_USER_GROUP, UPDATE_USER_GROUP } from '../../../lib/mutation/AllMutations';
import { useMutation, useQuery } from "@apollo/client";
import { AppContext } from "../../../State";
import { ToastError, ToastSuccess, ToastWarning } from '../../../commonComponents/commonFunction/CommonFunction';
import { GET_USER_GROUP } from '../../../lib/queries/AllQueries';
import { useNavigate } from 'react-router-dom';
import { openModal, updateFlag } from '../../../commonComponents/newTable/NewTable';

export function UseUserGroup() {



    const { state, dispatch } = useContext(AppContext)
    let [CreateUserGroup, { loading: ADD_LOADING }] = useMutation(ADD_USER_GROUP);
    const [userName, setUserName] = useState('')
    const [userGroupRole, setuserGroupRole] = useState('')
    const [email, setEmail] = useState('')
    const [flag, setFlag] = useState(false)
    const navigate = useNavigate()
    const allData = {
        "navigationResults": []
    };
    const handlingPermission = (item, pageIndex, permission) => {
        const findModule = allData.navigationResults.filter((i) => i.moduleName === item.moduleName);
        if (findModule.length === 1) {
            const checkPageexist = findModule[0]?.pages.find(
                (p) => p.pageName === item.pages[pageIndex].pageName
            );
            if (!checkPageexist) {
                findModule[0]?.pages.push(item.pages[pageIndex]);
            }
            findModule[0].pages[pageIndex][permission] =
                !findModule[0].pages[pageIndex][permission];
        } else {
            const test = {
                moduleName: "",
                moduleUrl: "",
                module_id: "",
                collapse: "",
                pages: [],
            };
            test.pages.push(item.pages[pageIndex]);
            test.moduleName = item.moduleName;
            test.moduleUrl = item.moduleUrl;
            test.module_id = item.module_id;
            test.collapse = item.collapse;
            test.pages[pageIndex][permission] = !item.pages[pageIndex][permission];
            allData.navigationResults.push(test);
        }
        console.log("allData", allData);
    };
    // console.log(state?.user?.organizationLogin?.id)
    const ctaHandler = async (event) => {

        // event.preventDefault();
        if (userName === '') {
            ToastWarning('User Name Required')
        }
        else if (userGroupRole === '') {
            ToastWarning('User Group Role Required')
        }
        else if(userGroupRole === "ORGANIZATIONKEY" || userGroupRole === "ADMIN" || userGroupRole === "TEACHER" || userGroupRole === "STUDENT" ){

            try {
                await CreateUserGroup({
                    variables: {

                        data: {
                            userName: userName,
                            userGroupRole: userGroupRole,
                            tabsPermission: allData,
                            // Organizations: {
                            //     connect: {
                            //         id: state?.user?.organizationLogin?.id && state?.getActiveUser.id
                            //     }
                            // }
                        }

                    },
                    refetchQueries: [{ query: GET_USER_GROUP }],

                    onCompleted(data, cache) {
                        openModal(false)
                        updateFlag(false)
                        ToastSuccess('UserGroup Added')
                        setuserGroupRole('')
                        setUserName('')

                    },
                });
                console.log(state.editData);
            } catch (error) {
                // dispatch({
                //     type: "setModal",
                //     payload: {
                //         openFormModal: false,
                //     },
                // });
                openModal(false)
                // ToastError(error.message);
                console.log(error.message)

            }
        }else{
            ToastError("Spelling mistake in role")
        }
    };

    let { data, loading: GET_LOADING, error } = useQuery(GET_USER_GROUP);


    // const refacteredData = [];
   
    // data?.userGroups?.map((item) => {
    //     refacteredData.push({
    //         id: item.id,
    //         name: item.userName,
    //         permissions: item?.tabsPermission?.navigationResults?.map((val) => {
    //             return val.pages

    //         }),
    //         tabs:item,
    //         updateAt: item.updateAt,
    //         createdAt: item.createdAt,
    //         role: item.userGroupRole,
    //     });
    // })
    // console.log("refacteredData111", refacteredData);

    //Update UserGroup
    let [
        UpdateUserGroup,
        {
            loading: UPDATE_LOADING
        }] = useMutation(UPDATE_USER_GROUP);

    const ctaUpdateHandler = async () => {
        if (state?.editUserGroupData?.name === '') {
            ToastWarning('User Name Required')
        }
        else if (state?.editUserGroupData?.role === '') {
            ToastWarning('User Group Role Required')
        }
        else if(state?.editUserGroupData?.role === "ORGANIZATIONKEY" || state?.editUserGroupData?.role === "ADMIN" || state?.editUserGroupData?.role === "TEACHER" || state?.editUserGroupData?.role === "STUDENT"){
            
            try {
                await UpdateUserGroup({
                    variables: {
                        where: {
                            id: state.editId
                        },
                        data: {
                            userName: {
                                set: state?.editUserGroupData?.name
                            },
                            userGroupRole: {
                                set: state?.editUserGroupData?.role
                            },
                            tabsPermission: allData
                            // tabsPermission: {
                            //     set: allData
                            // },
                            // Organizations: {
                            //     connect: {
                            //         id: state?.user?.organizationLogin?.id && state?.getActiveUser.id
                            //     }
                            // }
                        }

                    },
                    refetchQueries: [{ query: GET_USER_GROUP }],

                    onCompleted(data, cache) {
                        openModal(false)
                        updateFlag(false)
                        ToastSuccess('UserGroup Updated')
                        setuserGroupRole('')
                        setUserName('')

                    },
                });
                // console.log(state.editData);
            } catch (error) {
                // dispatch({
                //     type: "setModal",
                //     payload: {
                //         openFormModal: false,
                //     },
                // });
                openModal(false)
                // ToastError(error.message);
                console.log(error.message)

            }
        }else{
            ToastError("Spelling mistake in role")
        }
    };



    return [{ userName, userGroupRole, email, setEmail, setUserName, ctaHandler, setuserGroupRole, handlingPermission, ADD_LOADING, GET_LOADING, flag, ctaUpdateHandler }]
}
