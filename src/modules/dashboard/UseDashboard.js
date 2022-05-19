import { Slide, toast } from 'react-toastify';
export default function UseDashboard() {
    // const student = (localStorage.getItem('studentCount'));
    // const success = (localStorage.getItem('successCount'));
    // const staff = (localStorage.getItem('staffCount'));
    // const course = (localStorage.getItem('courseCount'));
    // const event = (localStorage.getItem('eventCount'));
    // const admin = (localStorage.getItem('adminCount'));
    const student=6
    const success=6
    const staff=6
    const course=6
    const event=6
    const admin=6
    const Notify = () => toast.success('Welcome to Dashboard', {
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
    return [{ Notify, student, success, staff, course, event, admin }];
}