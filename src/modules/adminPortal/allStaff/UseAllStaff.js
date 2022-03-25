import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Slide, toast } from "react-toastify";
import { ADD_STAFF } from "../../../lib/mutation/AllMutations";
import { GET_STAFF } from "../../../lib/queries/AllQueries";
export function UseAllStaff() {
  const [filterValue, setFilterValue] = useState('');
  // const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openAnchor = Boolean(anchorEl);
  let { data, loading, error } = useQuery(GET_STAFF)





  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('TEACHER')
  const [phone, setPhone] = useState('')
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
  let [CreateManyStaff] = useMutation(ADD_STAFF);
  const ctaButtonHandler1 = async (event, item) => {
      if (name === '' || email === '' || email === '' || role === '' || phone === '') {
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
      await CreateManyStaff({
        variables: {
          data: {
            name: name,
            email: email,
            role: role,
            phone: phone
          }
        },
        onCompleted(data, cache) {
          console.log("updated cart");
          console.log(data);
          Notify()
        },
        refetchQueries: [{ query: GET_STAFF }],

      })
      setName('');
      setEmail('');
      setRole('');
      setPhone('')

      setclose(true)
    }
    catch (error) {
      console.log(error.message);
    }
      }
  }













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


  console.log(data?.findManyStaff);
  const filterDataArray = data?.findManyStaff?.filter((item) => {
    if (filterValue == '') {
      return item;
    }
    else if (filterValue == item.status) {
      return item;
    }
    else if (filterValue == 'All') {
      return item;
    }
  })
  return [{ filterDataArray, loading, error, open, handleClickOpen, handleClose, openAnchor, anchorEl, handleAnchorClose, handleAnchorClick, ctaButtonHandler1, name, email, phone, role, setName, setEmail, setPhone, setRole }]
}