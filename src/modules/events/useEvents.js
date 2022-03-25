import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Slide, toast } from 'react-toastify';
import { ADD_EVENTS } from '../../lib/mutation/AllMutations';
import { GET_EVENTS } from '../../lib/queries/AllQueries';

export function useEvents() {
    const [filterValue, setFilterValue] = useState('');
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const openAnchor = Boolean(anchorEl);
    let { loading, data, error } = useQuery(GET_EVENTS);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const [name, setName] = useState('');
    const [description, setdescription] = useState('');
    const [status, setStatus] = useState('PAST');
    const [eventDate, seteventDate] = useState('');
    const [speakerId, setspeakerId] = useState('');
    const [eventImage, seteventImage] = useState('');

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
    let [CreateManyStudents] = useMutation(ADD_EVENTS);
    const ctaButtonHandler5 = async (event, item) => {
        if (
            name === '' ||
            description === '' ||
            status === '' ||
            eventDate === '' ||
            speakerId === ''
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
                await CreateManyStudents({
                    variables: {
                        data: {
                            eventName: name,
                            eventDesc: description,
                            eventDate: eventDate,
                            speakerId: speakerId,
                            eventStatus: status,
                        },
                    },
                    onCompleted(data, cache) {
                        console.log('updated cart');
                        console.log(data);
                        Notify();
                    },
                    refetchQueries: [{ query: GET_EVENTS }],
                });
                setName('');
                setdescription('');
                seteventDate('');
                setspeakerId('');
                seteventImage('');
                setStatus('');
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

    const filterDataArray = data?.findManyEvents.filter((item) => {
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
            setName,
            description,
            setdescription,
            status,
            setStatus,
            eventDate,
            seteventDate,
            speakerId,
            setspeakerId,
            eventImage,
            seteventImage,
            ctaButtonHandler5,

        },
    ];
}
