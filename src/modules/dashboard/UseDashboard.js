import { Slide, toast } from 'react-toastify';
export default function UseDashboard() {
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
    return [{ Notify }]
}