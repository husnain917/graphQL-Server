import React from 'react'
import useCourseDetail from './useCourseDetail'
import CommonTableLoader from '../../commonComponents/commonTableLoader/CommonTableLoader';
import {CD} from './CourseDetailStyle'
import { Box } from '@mui/material';

export default function CourseDetail() {
  const { courseData, GET_LOADING } = useCourseDetail();
  if (
    GET_LOADING
  ) {
    return <CommonTableLoader />;
  }
  console.log({ courseData })
  return (
    <>
      <CD.MainPageContainer>
        <CD.CourseTypo variant='h5'>
          {courseData.courseName}
        </CD.CourseTypo>
        <CD.CourseDesc>
          {courseData.courseDesc}
        </CD.CourseDesc>
        <CD.PriceDiv>
          <div>
            <Box sx={{fontWeight:'bold'}} component="span">Price: &nbsp;</Box>
            <Box component="span" sx={{fontSize:14}}>{courseData.coursePrice}</Box>
          </div>
          <div>
            <Box sx={{fontWeight:'bold'}}  component="span">Created At: &nbsp;</Box>
            <Box component="span" sx={{fontSize:14}}>{courseData.createdAt}</Box>
          </div>
        </CD.PriceDiv>
        <hr/>
      </CD.MainPageContainer>
    </>
  )
}
