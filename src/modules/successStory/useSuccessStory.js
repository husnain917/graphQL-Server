import { useState } from "react";


export  function useSuccessStory() {
    const[loading,setLoading]=useState(false);
   
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
        status:'Reject',
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
return [data,loading]
}
