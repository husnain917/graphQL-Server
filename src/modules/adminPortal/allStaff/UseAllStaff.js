import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Slide, toast } from 'react-toastify';
import { BASIC_STAFF_ROLE } from '../../../constants/AllRolesStatus';
import {
  ADD_STAFF,
  DELETE_SINGLE_STAFF,
  UPDATE_SINGLE_STAFF,
} from '../../../lib/mutation/AllMutations';
import { GET_STAFF } from '../../../lib/queries/AllQueries';
export function UseAllStaff() {
  const [filterValue, setFilterValue] = useState('');
  const [open, setOpen] = React.useState(false);
  const [flag1, setFlag1] = useState(false)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openAnchor = Boolean(anchorEl);
  let { data, loading, error } = useQuery(GET_STAFF);

  // ADD STAFF

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState(BASIC_STAFF_ROLE);
  const [phone, setPhone] = useState('');
  const [close, setclose] = useState(false);

  const Notify = () =>
    toast.success('Staff added successfully', {
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
  let [CreateManyStaff, { loading: AddLoading }] = useMutation(ADD_STAFF);
  const ctaButtonHandler1 = async (event, item) => {
    if (
      name === '' ||
      email === '' ||
      email === '' ||
      role === '' ||
      phone === ''
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
        await CreateManyStaff({
          variables: {
            data: {
              name: name,
              email: email,
              role: role,
              phone: phone,
            },
          },
          onCompleted(data, cache) {
            Notify();
          },
          refetchQueries: [{ query: GET_STAFF }],
        });
        setName('');
        setEmail('');
        setRole('');
        setPhone('');
        setOpen(false);
        setclose(true);
      } catch (error) {
        toast.error(error.message, {
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

  // GET STAFF
  const filterDataArray = data?.findManyStaff?.filter((item) => {
    if (filterValue === '') {
      return item;
    } else if (filterValue === item.role) {
      return item;
    } else if (filterValue === 'All') {
      return item;
    }
  });

  // DELETE STAFF
  let [DeleteStaff, { loading: DeleteLoading }] =
    useMutation(DELETE_SINGLE_STAFF);
  const ctaDeleteHandlerStaff = async ({ e, ...props }) => {
    console.log(props.id);
    try {
      await DeleteStaff({
        variables: {
          where: {
            id: props.id,
          },
        },
        onCompleted(data) {
          toast.success('Staff deleted Successfully', {
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
        },
        refetchQueries: [{ query: GET_STAFF }],
      });
    } catch (error) {
      toast.error('Bad Response', {
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
    }
  };




  //UPDATE SINGLE STORY

  const handleClickOpen = () => {
    setOpen(true);
  };




  let [updatedIndex, setUpdatedIndex] = useState('');


  let [UpdateStaff, { loading: UpdateLoading }] = useMutation(UPDATE_SINGLE_STAFF);
  const ctaUpdateStaff = ({ ...props }) => {

    console.log(props.id);
    setUpdatedIndex(props.id);
    setName(props.name);
    setEmail(props.email);
    setRole(props.role);
    setPhone(props.phone);
    setFlag1(true);
  }

  const handleCloseUpdate = () => {
    setFlag1(false);
  };
  const ctaUpdateHandlerStaff = async (event) => {
    if (
      name === '' ||
      email === '' ||
      role === '' ||
      phone === ''

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
        await UpdateStaff({
          variables: {
            where: {
              id: updatedIndex
            },
            data: {
              name: {
                set: name
              },
              email: {
                set: email
              },
              role: {
                set: role
              },
              phone: {
                set: phone
              }
            },

          },

          onCompleted() {
            toast.success("Staff updated Successfully", {
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
            setName('');
            setEmail('');
            setRole('');
            setPhone('');
            setUpdatedIndex('');
            setFlag1(false);
          },
          refetchQueries: [{ query: GET_STAFF }],
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
      error,
      open,
      handleClickOpen,
      handleClose,
      openAnchor,
      anchorEl,
      AddLoading,
      handleAnchorClose,
      handleAnchorClick,
      ctaButtonHandler1,
      name,
      email,
      phone,
      role,
      setName,
      setEmail,
      setPhone,
      setRole,
      ctaDeleteHandlerStaff,
      DeleteLoading,
      ctaUpdateStaff,
      flag1,
      handleCloseUpdate,
      ctaUpdateHandlerStaff,
      UpdateLoading,
    },
  ];
}
