import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ENROLLMENT } from '../../lib/queries/AllQueries'
import { Slide, toast } from 'react-toastify';
import { ADD_ENROLMMENT_APPROVAL } from '../../lib/mutation/AllMutations';
export function useEnrollmentApproval() {
  let { loading, error, data } = useQuery(GET_ENROLLMENT);
  const [filterValue, setFilterValue] = useState('');
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);



  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [course, setCourse] = useState('')
  const [paymentMethod, setpaymentMethod] = useState('')
  const [amount, setamount] = useState('')
  const [transactionId, settransactionId] = useState('')
  const [status, setStatus] = useState('PENDING')
  const [close, setclose] = useState(false)


  const Notify = () => toast.success('Enrollment added successfully', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Slide,
  });
  let [Mutation] = useMutation(ADD_ENROLMMENT_APPROVAL);
  const ctaButtonHandler = async (event, item) => {
    if (name === '' || email === '' || email === '' || course === '' || paymentMethod === '' || amount === '' || transactionId === '') {
      toast.warning('please fill all fields', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
      return
    } else {
      event.preventDefault();
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
          onCompleted(data, cache) {
            console.log("updated cart");
            console.log(data);
            Notify()
          },
          refetchQueries: [{ query: GET_ENROLLMENT }],

        })
        setName('');
        setEmail('');
        setCourse('');
        setpaymentMethod('');
        setamount('');
        settransactionId('');
        setclose(true)
      }
      catch (error) {
        console.log(error.message);
      }
    }
  }


  const openAnchor = Boolean(anchorEl);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAnchorClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleAnchorClose = (value) => {
    setAnchorEl(null);
    setFilterValue(typeof value == 'object' ? filterValue : value);
  };
  // console.log(data.enrollmentApprovals);
  const filterDataArray = data?.enrollmentApprovals.filter((item) => {
    if (filterValue === '') {
      return item;
    }
    else if (filterValue === item.status) {
      return item;
    }
    else if (filterValue === 'All') {
      return item;
    }
  })
  return [{ filterDataArray, loading, open, handleClickOpen, handleClose, error, openAnchor, anchorEl, handleAnchorClose, handleAnchorClick, name, email, course, paymentMethod, amount, transactionId, status, setName, setEmail, setCourse, setpaymentMethod, setamount, settransactionId, ctaButtonHandler, setStatus }]
}

