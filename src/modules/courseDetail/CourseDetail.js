import React from 'react'
import {useLocation } from 'react-router-dom';

export default function CourseDetail() {
  const location = useLocation();
  console.log(location.state)
  return (
    <div>CourseDetail</div>
  )
}
