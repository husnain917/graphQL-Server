import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { ADD_ENROLMMENT_APPROVAL } from '../../lib/mutation/AllMutation'
export function useFormModal() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [course, setCourse] = useState('')
    const [paymentMethod, setpaymentMethod] = useState('')
    const [amount, setamount] = useState('')
    const [transactionId, settransactionId] = useState('')
    const [createManyEnrollmentApproval, { data, loading, error }] = useMutation(ADD_ENROLMMENT_APPROVAL, {
        variables: { data: { name, email, course, paymentMethod, amount, transactionId } },
        // refetchQueries: ["GetItem"]
    });
    let newObj = {
        name: name.toUpperCase(),
        email,
        course,
        paymentMethod,
        amount,
        transactionId,
    };
    const ctaButtonHandler = () => {
        if (name === '' || email === '' || email === '' || course === '' || paymentMethod === '' || amount === '' || transactionId === '') {
            alert('Please Fill All fields!')
            return
        } else {
            createManyEnrollmentApproval({ data: { name, email, course, paymentMethod, amount, transactionId } })
            setName('');
            setEmail('');
            setCourse('');
            setpaymentMethod('');
            setamount('');
            settransactionId('');
        }
    }

    return [{ createManyEnrollmentApproval, ctaButtonHandler, newObj, loading, error, name, setName, email, setEmail, course, setCourse, paymentMethod, setpaymentMethod, amount, setamount, transactionId, settransactionId }]
}
