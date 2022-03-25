import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { Slide, toast } from 'react-toastify';
import { ADD_CONTACT_US } from '../../lib/mutation/AllMutations';
import { GET_CONTACT_US } from '../../lib/queries/AllQueries';

export default function useContactUs() {
    const [filterValue, setFilterValue] = useState('');
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const openAnchor = Boolean(anchorEl);
    let { data, loading, error } = useQuery(GET_CONTACT_US);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const [name, setName] = useState('');
    const [subject, setsubject] = useState('');
    const [status, setStatus] = useState('CONTACTED');
    const [message, setmessage] = useState('');
    const [reply, setreply] = useState('');

    const [close, setclose] = useState(false);

    const Notify = () =>
        toast.success('Enrollment added successfully', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Slide,
        });
    let [Mutation] = useMutation(ADD_CONTACT_US);
    const ctaButtonHandler6 = async (event, item) => {
        if (
            name === '' ||
            subject === '' ||
            status === '' ||
            message === '' ||
            reply === ''
        ) {
            toast.warning('please fill all fields', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
                transition: Slide,
            });
            return;
        } else {
            event.preventDefault();
            try {
                await Mutation({
                    variables: {
                        data: {
                            name: name,
                            subject: subject,
                            message: message,
                            status: status,
                            reply: reply,
                        },
                    },
                    onCompleted(data, cache) {
                        console.log('updated cart');
                        console.log(data);
                        Notify();
                    },
                    refetchQueries: [{ query: GET_CONTACT_US }],
                });
                setName('');
                setsubject('');
                setStatus('');
                setmessage('');
                setreply('');
                setclose(true);
            } catch (error) {
                console.log(error.message);
            }
        }
    };

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

    const filterDataArray = data?.contactuses.filter((item) => {
        if (filterValue === '') {
            return item;
        } else if (filterValue === item.status) {
            return item;
        } else if (filterValue === 'All') {
            return item;
        }
    });
    return [
        {
            filterDataArray,
            loading,
            open,
            handleClickOpen,
            handleClose,
            openAnchor,
            anchorEl,
            handleAnchorClose,
            handleAnchorClick,
            name,
            subject,
            status,
            message,
            reply,
            setName,
            setsubject,
            setStatus,
            setmessage,
            setreply,
            ctaButtonHandler6,

        },
    ];
}
