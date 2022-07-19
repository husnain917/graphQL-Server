import { useMutation } from '@apollo/client'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastSuccess, ToastWarning } from '../../../commonComponents/commonFunction/CommonFunction'
import { UPDATE_USER } from '../../../lib/mutation/AllMutations'
import { GET_USERS } from '../../../lib/queries/AllQueries'
import { AppContext } from '../../../State'

export function UseEditProfile() {
    const { state } = useContext(AppContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [address, setAddress] = useState('')
    const [file, setFile] = useState('')
    const [role, setRole] = useState('')
    const [cnic, setCnic] = useState('')
    let [UpdateUser, { loading: UPDATE_LOADING }] = useMutation(UPDATE_USER)
    // const handleChange = (e) => {
    //     setFile(e.target.files[0])
    //     setFile(e.target.files[0].name)
    // }
    useEffect(() => {
        setName(state.user?.name)
        setEmail(state.user?.email)
        setContact(state.user?.contact)
        setAddress(state.user?.address)
        setRole(state?.orgLogin ?
            state?.user?.organizationLogin.role
            :
            state?.user.userGroup.userGroupRole)
        setCnic(state?.user.cnic)
    }, [])

    const ctaUpdateHandler = async (e) => {
        e.preventDefault()
        let index = state.user?.id;
        if (!name) {
            ToastWarning('Name required')
        }
        else if (!contact) {
            ToastWarning('Phone Number required')
        }
        else if (!address) {
            ToastWarning('Address required')
        }
        else {
            try {

                await UpdateUser({
                    variables: {
                        where: {
                            id: index
                        },
                        data: {
                            name: {
                                set: name,
                            },
                            email: {
                                set: email,
                            },
                            // password: {
                            //   set: state.editData?.password,
                            // },
                            cnic: {
                                set: cnic,
                            },
                            address: {
                                set: address,
                            },
                            contact: {
                                set: contact,
                            },
                            userRole: {
                                set: role,
                            }
                        },
                    },
                    onCompleted() {
                        ToastSuccess('User Updated')
                        // navigate('/profile/id')
                    },
                    refetchQueries: [{ query: GET_USERS }],
                });
            } catch (error) {
                console.log(error.message);
            }
        }
    }
    return [{
        ctaUpdateHandler,
        name,
        email,
        address,
        contact,
        role,
        setName,
        setEmail,
        setAddress,
        setContact,
        // handleChange,
        state,
        UPDATE_LOADING
    }]
}