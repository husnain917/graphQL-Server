import { useMutation } from '@apollo/client'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastSuccess } from '../../../commonComponents/commonFunction/CommonFunction'
import { UPDATE_USER } from '../../../lib/mutation/AllMutations'
import { GET_USERS } from '../../../lib/queries/AllQueries'
import { AppContext } from '../../../State'

export function UseEditProfile() {
    const navigate = useNavigate()
    const { state } = useContext(AppContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    let [UpdateUser, { loading: UPDATE_LOADING }] = useMutation(UPDATE_USER)

    const ctaUpdateHandler = async (e) => {
        e.preventDefault()
        let index = state.user?.id
        try {

            await UpdateUser({
                variables: {
                    where: {
                        id: index
                    },
                    data: {
                        name: {
                            set: name
                        },
                        email: {
                            set: email
                        },
                        address: {
                            set: address
                        },
                        phone: {
                            set: phone
                        }
                    }
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
    return [{
        ctaUpdateHandler,
        name,
        email,
        address,
        phone,
        setName,
        setEmail,
        setAddress,
        setPhone,
        state,
        UPDATE_LOADING
    }]
}
