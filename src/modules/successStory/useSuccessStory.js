import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { Slide, toast } from 'react-toastify';
import { ADD_SUCCESS_STORY } from '../../lib/mutation/AllMutations';
import { GET_SUCCESS_STORIES } from '../../lib/queries/AllQueries';

export function useSuccessStory() {
  const [filterValue, setFilterValue] = useState('');
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openAnchor = Boolean(anchorEl);
  let { data, loading, error } = useQuery(GET_SUCCESS_STORIES);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const [freelancingProfileUrl, setfreelancingProfileUrl] = useState('');
  const [paymentProof, setpaymentProof] = useState('');
  const [description, setdescription] = useState('');
  const [status, setstatus] = useState('UNPUBLISH');
  const [totalEarnedAmount, settotalEarnedAmount] = useState('');
  const [city, setcity] = useState('');
  const [whyReject, setwhyReject] = useState('');

  const [close, setclose] = useState(false);

  const Notify = () =>
    toast.success('Enrollment added successfully', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: Slide,
    });
  let [CreateManyStories] = useMutation(ADD_SUCCESS_STORY);
  const ctaButtonHandler4 = async (event, item) => {
    if (
      freelancingProfileUrl === '' ||
      paymentProof === '' ||
      description === '' ||
      status === '' ||
      totalEarnedAmount === '' ||
      city === '' ||
      whyReject === ''
    ) {
      toast.warning('please fill all fields', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Slide,
      });
      return;
    } else {
      event.preventDefault();
      try {
        await CreateManyStories({
          variables: {
            data: {
              freelancingProfileUrl: freelancingProfileUrl,
              paymentProof: paymentProof,
              description: description,
              status: status,
              totalEarnedAmount: totalEarnedAmount,
              city: city,
              whyReject: whyReject,
            },
          },
          onCompleted(data, cache) {
            console.log('updated cart');
            console.log(data);
            Notify();
          },
          refetchQueries: [{ query: GET_SUCCESS_STORIES }],
        });
        setfreelancingProfileUrl('');
        setpaymentProof('');
        setdescription('');
        setstatus('');
        settotalEarnedAmount('');
        setcity('');
        setwhyReject('');
        setclose(true);
      } catch (error) {
        toast.warning('Status must be PUBLISH/UNPUBLISH', {
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
      }
    }
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

  const filterDataArray = data?.findManySuccessStories.filter((item) => {
    if (filterValue === '') {
      return item;
    } else if (filterValue === item.status) {
      return item;
    } else if (filterValue === 'All') {
      return item;
    }
  });
  return [
    {
      filterDataArray,
      loading,
      open,
      handleClickOpen,
      handleClose,
      openAnchor,
      anchorEl,
      handleAnchorClose,
      handleAnchorClick,
      freelancingProfileUrl,
      setfreelancingProfileUrl,
      paymentProof,
      setpaymentProof,
      description,
      setdescription,
      status,
      setstatus,
      totalEarnedAmount,
      settotalEarnedAmount,
      city,
      setcity,
      whyReject,
      setwhyReject,
      ctaButtonHandler4,

    },
  ];
}
