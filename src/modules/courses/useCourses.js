import { useQuery, useMutation } from '@apollo/client';
import { useState } from 'react';
import { GET_COURSES } from '../../lib/queries/AllQueries';
import { ADD_COURSES, DELETE_SINGLE_COURSE } from '../../lib/mutation/AllMutations'
import { toast, Slide } from 'react-toastify'
export function UseCourses() {
  // const [loading, setLoading] = useState(false)
  const [filterValue, setFilterValue] = useState('');
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openAnchor = Boolean(anchorEl);
  let { data, loading, error } = useQuery(GET_COURSES)
  const handleClickOpen = () => {
    setOpen(true);
  };



  //ADD COURSE


  const [name, setName] = useState('')
  const [courseDesc, setcourseDesc] = useState('')
  const [courseStatus, setcourseStatus] = useState('UNPUBLISH')
  const [courseCategoryId, setcourseCategoryId] = useState('')
  const [coursePrice, setcoursePrice] = useState('')
  const [courseIntro, setcourseIntro] = useState()
  const [instructorId, setinstructorId] = useState()

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
  let [Mutation] = useMutation(ADD_COURSES);
  const ctaButtonHandler2 = async (event, item) => {
    if (name === '' || courseDesc === '' || courseStatus === '' || courseCategoryId === '' || coursePrice === '' || courseIntro === '' || instructorId === '') {
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
        await Mutation({
          variables: {
            data: {
              courseName: name,
              courseDesc: courseDesc,
              coursePrice: coursePrice,
              courseStatus: courseStatus,
              courseCategoryId: courseCategoryId,
              instructorId: instructorId,
              courseIntro: courseIntro,
            }
          },
          onCompleted(data, cache) {
            console.log("updated cart");
            console.log(data);
            Notify()
          },
          refetchQueries: [{ query: GET_COURSES }],

        })
        setName('');
        setcourseDesc('');
        setcourseStatus('');
        setcourseCategoryId('')
        setcoursePrice('')
        setcourseIntro('')
        setinstructorId('')
        setclose(true)
      }
      catch (error) {
        toast.error('status must be PUBLISH/UNPUBLISH', {
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



  //GET COURSE
  const filterDataArray = data?.findManyCourses.filter((item) => {
    if (filterValue === '') {
      return item;
    }
    else if (filterValue === item.courseStatus) {
      return item;
    }
    else if (filterValue === 'All') {
      return item;
    }
  })



  //DELETE COURSE

  let [DeleteMutation, { loading: Deleteloading }] = useMutation(DELETE_SINGLE_COURSE);
  const ctaDeleteHandlerCourse = async ({ e, ...props }) => {
    console.log(props.id);
    try {
      await DeleteMutation({
        variables: {
          where: {
            id: props.id
          }
        },
        onCompleted(data) {
          toast.success("Course deleted Successfully", {
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
        },
        refetchQueries: [{ query: GET_COURSES }],
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



  return [{ filterDataArray, loading, open, handleClickOpen, handleClose, openAnchor, anchorEl, handleAnchorClose, handleAnchorClick, name, courseDesc, courseStatus, courseCategoryId, coursePrice, courseIntro, instructorId, close, ctaButtonHandler2, setName, setcourseDesc, setcourseStatus, setcourseCategoryId, setcoursePrice, setcourseIntro, setinstructorId, setclose, ctaDeleteHandlerCourse, Deleteloading }]
}
