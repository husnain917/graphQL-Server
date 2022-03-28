import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { Slide, toast } from 'react-toastify';
import { ADD_SUCCESS_STORY, DELETE_SINGLE_SUCCESS_STORY, UPDATE_SINGLE_SUCCESS } from '../../lib/mutation/AllMutations';
import { GET_SUCCESS_STORIES } from '../../lib/queries/AllQueries';
import { BASIC_SUCCESS_ROLE } from '../../constants/AllRolesStatus';
export function useSuccessStory() {
  const [filterValue, setFilterValue] = useState('');
  const [open, setOpen] = useState(false);
  const [flag, setFlag] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null);
  const openAnchor = Boolean(anchorEl);
  let { data, loading } = useQuery(GET_SUCCESS_STORIES);




  //ADD STORY
  const [freelancingProfileUrl, setfreelancingProfileUrl] = useState('');
  const [paymentProof, setpaymentProof] = useState('');
  const [description, setdescription] = useState('');
  const [status, setStatus] = useState(BASIC_SUCCESS_ROLE);
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
  let [CreateManyStories, { loading: AddLoading }] = useMutation(ADD_SUCCESS_STORY);
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
        setStatus('');
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



  // GET STORY 
  const filterDataArray = data?.findManySuccessStories.filter((item) => {
    if (filterValue === '') {
      return item;
    } else if (filterValue === item.status) {
      return item;
    } else if (filterValue === 'All') {
      return item;
    }
  });












  //DELETE STORY 


  let [DeleteSuccessStories, { loading: DeleteLoading }] = useMutation(DELETE_SINGLE_SUCCESS_STORY);
  const ctaDeleteHandlerStory = async ({ e, ...props }) => {
    console.log(props.id);
    try {
      await DeleteSuccessStories({
        variables: {
          where: {
            id: props.id
          }
        },
        onCompleted(data) {
          toast.success("Story deleted Successfully", {
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
        },
        refetchQueries: [{ query: GET_SUCCESS_STORIES }],
      })
    } catch (error) {
      toast.error(error.message, {
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





  //UPDATE SINGLE STORY

  const handleClickOpen = () => {
    setOpen(true);
  };




  let [updatedIndex, setUpdatedIndex] = useState('');

 
  let [UpdateSuccessStories, { loading: UpdateLoading }] = useMutation(UPDATE_SINGLE_SUCCESS);
  const ctaUpdateStory = ({ ...props }) => {
    setUpdatedIndex(props.id);
    setfreelancingProfileUrl(props.freelancingProfileUrl);
    setpaymentProof(props.paymentProof);
    setdescription(props.description);
    setStatus(props.status);
    settotalEarnedAmount(props.totalEarnedAmount);
    setcity(props.city);
    setwhyReject(props.whyReject);
    setFlag(true);
  }

  const handleCloseUpdate = () => {
    setFlag(false);
  };
  const ctaUpdateHandlerStory = async (event) => {
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
        await UpdateSuccessStories({
          variables: {
            where: {
              id: updatedIndex
            },
            data: {
              freelancingProfileUrl: {
                set: freelancingProfileUrl
              },
              paymentProof: {
                set: paymentProof
              },
              description: {
                set: description
              },
              status: {
                set: status
              },
              totalEarnedAmount: {
                set: totalEarnedAmount
              },
              city: {
                set: city
              },
              whyReject: {
                set: whyReject
              },
            }
          },
          onCompleted() {
            toast.success("Story updated Successfully", {
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
            setfreelancingProfileUrl('');
            setpaymentProof('');
            setdescription('');
            setStatus('');
            settotalEarnedAmount('');
            setcity('');
            setwhyReject('');
            setUpdatedIndex('');
            setFlag(false);
          },
          refetchQueries: [{ query: GET_SUCCESS_STORIES }],
        })
      } catch (error) {
        toast.error(error.message, {
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
  }







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
      setStatus,
      totalEarnedAmount,
      settotalEarnedAmount,
      city,
      setcity,
      whyReject,
      setwhyReject,
      ctaButtonHandler4,
      ctaDeleteHandlerStory,
      DeleteLoading,
      AddLoading,
      ctaUpdateStory,
      flag,
      handleCloseUpdate,
      ctaUpdateHandlerStory,
      UpdateLoading
    },
  ];
}
