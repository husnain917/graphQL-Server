import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_COURSES, GET_LECTURES } from "../../lib/queries/AllQueries";
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
  const courseData = refacteredData.find(item => item.id === params.courseId);

  let { data:leactureData, loading: GET_Leacture_LOADING,error:LectureError } = useQuery(GET_LECTURES);
  console.log("error", LectureError);
  const refacteredDataLecture = [];
  leactureData?.findManyLectures?.map((item) => {
    refacteredDataLecture.push({
      id: item.id,
      coursesId: item.coursesId,
      lectureTitle: item.lectureTitle,
      lectureVideo: item.lectureVideo,
      createdAt: item.createdAt,
      updateAt: item.updateAt,
    });
  });
  console.log({ refacteredDataLecture });
   const leacturesData = refacteredDataLecture.filter((item)=>item.coursesId ===  params.courseId);
  // const leacturesData = refacteredDataLecture
  console.log({ leacturesData });
  return ({
    courseData,
    GET_LOADING,
    GET_Leacture_LOADING,
    leacturesData
  })
}
