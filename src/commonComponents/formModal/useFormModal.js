import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { ADD_ENROLMMENT_APPROVAL } from '../../lib/mutation/AllMutation'
import { GET_ENROLLMENT } from '../../lib/queries/AllQueries';
export function useFormModal() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [course, setCourse] = useState('')
    const [paymentMethod, setpaymentMethod] = useState('')
    const [amount, setamount] = useState('')
    const [transactionId, settransactionId] = useState('')
    const [status, setStatus] = useState('PENDING')
    const [close, setclose] = useState(false)
    let [Mutation, { loading, error }] = useMutation(ADD_ENROLMMENT_APPROVAL,
        // {
        //     update(cache, { data: { response } }) {
        //         const data = cache.readQuery({ query: GET_ENROLLMENT });
        //         cache.writeQuery({
        //             query: GET_ENROLLMENT,
        //             data: { data: [response, ...data?.id] },
        //         });
        //         console.log("sami", data);
        //     },
        // }
    );
    const ctaButtonHandler = async (event, item) => {
        if (name === '' || email === '' || email === '' || course === '' || paymentMethod === '' || amount === '' || transactionId === '') {
            alert('Please Fill All fields!')
            return
        } else {
            event.preventDefault();
            setclose(true)
            const obj = {

                studentName: name,
                email: email,
                course: course,
                paymentMethod: paymentMethod,
                amount: amount,
                transactionId: transactionId,
                status: status

            }
            try {
                await Mutation({
                    variables: {
                        data: {
                            studentName: name,
                            email: email,
                            course: course,
                            paymentMethod: paymentMethod,
                            amount: amount,
                            transactionId: transactionId,
                            status: status
                        }
                    },
                    // optimisticResponse: {
                    //     __typename: 'Mutation',
                    //     addPet: {
                    //       __typename: 'id',
                    //       name: obj.studentName,
                    //     }
                    //   },
                    onCompleted(data, cache) {
                        console.log("updated cart");
                        console.log(data);
                        const data1 = cache.readQuery({ query: GET_ENROLLMENT });
                        console.log(data1);
                    },

                })
                setName('');
                setEmail('');
                setCourse('');
                setpaymentMethod('');
                setamount('');
                settransactionId('');
            }
            catch (error) {
                console.log(error.message);
            }
        }
    }

    return [{ Mutation, ctaButtonHandler, close, loading, error, status, setStatus, name, setName, email, setEmail, course, setCourse, paymentMethod, setpaymentMethod, amount, setamount, transactionId, settransactionId }]
}
