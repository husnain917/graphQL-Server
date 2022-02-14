import { useState } from "react";


export  function useSuccessStory() {
    const[loading,setLoading]=useState(false);
    const[filterValue,setFilterValue]=useState('');
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
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
      setFilterValue(typeof value=='object'? filterValue:value);
    };
  const data=[
      {
        name:'sami',
        email:'samishokat@gmail.com',
        status:'Pending',
        phone:'000000000000',
        image:'image'
      },
      {
        name:'sami',
        email:'samishokat@gmail.com',
        status:'Rejected',
        phone:'000000000000',
        image:'image'
      },
      {
        name:'sami',
        email:'samishokat@gmail.com',
        status:'Approved',
        phone:'000000000000',
        image:'image'
      },
      {
        name:'sami',
        email:'samishokat@gmail.com',
        status:'pending',
        phone:'000000000000',
        image:'image'
      },
  ]

  const filterDataArray=data.filter((item)=>{
    if(filterValue==''){
      return item;
    }
    else if(filterValue==item.status){
      return item;
    }
    else if (filterValue=='All'){
      return item;
    }
  })
return [{ filterDataArray, loading, open, handleClickOpen, handleClose,openAnchor,anchorEl,handleAnchorClose,handleAnchorClick}]
}
