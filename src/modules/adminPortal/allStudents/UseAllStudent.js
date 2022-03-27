import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { Slide, toast } from 'react-toastify';
import {
  ADD_STUDENT,
  DELETE_SINGLE_STUDENT,
  UPDATE_SINGLE_STUDENT,
} from '../../../lib/mutation/AllMutations';
import { GET_STUDENT } from '../../../lib/queries/AllQueries';
import { BASIC_STUDENT_ROLE } from '../../../constants/AllRolesStatus';
export function UseAllStudents() {
  const [filterValue, setFilterValue] = useState('');
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openAnchor = Boolean(anchorEl);
  let { data, loading } = useQuery(GET_STUDENT);
  const [flag5, setFlag5] = useState(false)
  const handleClickOpen = () => {
    setOpen(true);
  };

  // ADD STUDENT

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(BASIC_STUDENT_ROLE);

  const [close, setclose] = useState(false);

  const Notify = () =>
    toast.success('Student added successfully', {
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
  let [CreateManyStudents, { loading: AddLoading }] = useMutation(ADD_STUDENT);
  const ctaButtonHandler3 = async (event, item) => {
    if (name === '' || email === '' || status === '') {
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
        await CreateManyStudents({
          variables: {
            data: {
              name: name,
              email: email,
              status: status,
            },
          },
          onCompleted(data, cache) {
            console.log('updated cart');
            console.log(data);
            Notify();
          },
          refetchQueries: [{ query: GET_STUDENT }],
        });
        setName('');
        setEmail('');
        setStatus('');
        setclose(true);
        setOpen(false);
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

  //GET STUDENT
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
  //GET STUDENT
  const filterDataArray = data?.findManyStudents.filter((item) => {
    if (filterValue === '') {
      return item;
    } else if (filterValue === item.status) {
      return item;
    } else if (filterValue === 'All') {
      return item;
    }
  });

  //DELETE STUDENT
  let [DeleteStudents, { loading: DeleteLoading }] = useMutation(
    DELETE_SINGLE_STUDENT
  );
  const ctaDeleteHandlerStudent = async ({ e, ...props }) => {
    console.log(props.id);
    try {
      await DeleteStudents({
        variables: {
          where: {
            id: props.id,
          },
        },
        onCompleted(data) {
          toast.success('Student deleted Successfully', {
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
        refetchQueries: [{ query: GET_STUDENT }],
      });
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
  };




  //UPDATE STUDENT
  let [updatedIndex, setUpdatedIndex] = useState('');


  let [UpdateStudents, { loading: UpdateLoading }] = useMutation(UPDATE_SINGLE_STUDENT);
  const ctaUpdateStudent = ({ ...props }) => {
    setUpdatedIndex(props.id);
    setName(props.name);
    setEmail(props.email);
    setStatus(props.status);
    setFlag5(true);
  }

  const handleCloseUpdate = () => {
    setOpen(false);
  };
  const ctaUpdateHandlerStudent = async (event) => {
    if (
      name === '' ||
      email === '' ||
      status === ''
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
        await UpdateStudents({
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
              status: {
                set: status
              }
            }
          },
          onCompleted() {
            toast.success("Student updated Successfully", {
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
            setStatus('');
            setUpdatedIndex('');
            setFlag5(false);
          },
          refetchQueries: [{ query: GET_STUDENT }],
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
      AddLoading,
      handleClose,
      openAnchor,
      anchorEl,
      handleAnchorClose,
      handleAnchorClick,
      name,
      email,
      status,
      setName,
      setEmail,
      setStatus,
      ctaButtonHandler3,
      ctaDeleteHandlerStudent,
      DeleteLoading,
      ctaUpdateStudent,
      flag5,
      handleCloseUpdate,
      ctaUpdateHandlerStudent,
      UpdateLoading
    },
  ];
}
