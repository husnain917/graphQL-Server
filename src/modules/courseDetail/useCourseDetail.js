import { useQuery } from "@apollo/client";
import {useParams } from "react-router-dom";
import { GET_COURSES } from "../../lib/queries/AllQueries";
export default function useCourseDetail() {
    let params = useParams();
    let { data, loading: GET_LOADING, error } = useQuery(GET_COURSES);
    console.log("error", error);
    const refacteredData = [];
    data?.findManyCourses?.map((item) => {
      refacteredData.push({
        id: item.id,
        courseName: item.courseName,
        courseDesc: item.courseDesc,
        courseIntro: item.courseIntro,
        courseStatus: item.courseStatus,
        coursePrice: item.coursePrice,
        instructorId: item.instructorId,
        courseCategoryId: item.courseCategoryId,
        createdAt: item.createdAt
      });
    });
  const courseData = refacteredData.find(item=>item.id === params.courseId)
  return ({
    courseData,
    GET_LOADING
 })
}
