import { useState } from 'react';

export  function useCourses() {
    const[loading,setLoading]=useState(false)
    const tableHeading=[
        {
            
          heading:'Course Name'
        },
        {
          heading:'Trainer'
        },
  
        {
          heading:'Price'
        },
        {
          heading:'Duration'
        },
  
        {
          heading:'Students'
        },
        {
          heading:'Email'
        },
  
  
      ]
 const data=[
    {
        name:'sami',
        trainer:'naveed sarwar',
        email:'samishokat@gmail.com',
        status:'Active',
        phone:'000000000000',
        image:''
      },
      {
        name:'sami',
        email:'samishokat@gmail.com',
        status:'Closed',
        phone:'000000000000',
        image:''
      },
      {
        name:'sami',
        email:'samishokat@gmail.com',
        status:'Active',
        phone:'000000000000',
        image:''
      },
      {
        name:'sami',
        email:'samishokat@gmail.com',
        status:'Active',
        phone:'000000000000',
        image:''
      },
 ]
 return[data,loading,tableHeading]
}
