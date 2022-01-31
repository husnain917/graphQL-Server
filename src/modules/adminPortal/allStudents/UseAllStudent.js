import {  useState } from "react";
export  function UseAllStudents(){
    const[loading,setLoading]=useState(false);
    const data = [
      {
        name: "ahsan",
        email: "taseries260@gmail.com",
        status: "Active",
        phone: '+9200000000000',
        image: "image"
      },
      {
        name: "ahsan",
        email: "taseries260@gmail.com",
        status: "Active",
        phone: '+9200000000000',
        image: "image"
      },
      {
        name: "ahsan",
        email: "taseries260@gmail.com",
        status: "Active",
        phone: '+9200000000000',
        image: "image"
      },
      {
        name: "ahsan",
        email: "taseries260@gmail.com",
        status: "Active",
        phone: '+9200000000000',
        image: "image"
      }
    ]

    return[{data,  loading  }]
}