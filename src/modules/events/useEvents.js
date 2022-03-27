import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Slide, toast } from 'react-toastify';
import { BASIC_EVENTS_ROLE } from '../../constants/AllRolesStatus';
import { ADD_EVENTS, DELETE_SINGLE_EVENT, UPDATE_SINGLE_EVENT } from '../../lib/mutation/AllMutations';
import { GET_EVENTS } from '../../lib/queries/AllQueries';

export function useEvents() {
    const [filterValue, setFilterValue] = useState('');
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const openAnchor = Boolean(anchorEl);
    const [flag8, setFlag8] = useState(false)
    let { loading, data, error } = useQuery(GET_EVENTS);
    const handleClickOpen = () => {
        setOpen(true);
    };


    // ADD EVENTS
    const [name, setName] = useState('');
    const [description, setdescription] = useState('');
    const [status, setStatus] = useState(BASIC_EVENTS_ROLE);
    const [eventDate, seteventDate] = useState('');
    const [speakerId, setspeakerId] = useState('');
    const [eventImage, seteventImage] = useState('');

    const [close, setclose] = useState(false);

    const Notify = () =>
        toast.success('Event added successfully', {
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
    let [CreateManyStudents, { loading: AddLoading }] = useMutation(ADD_EVENTS);
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
                setOpen(false)
            } catch (error) {
                toast.warning(error.message, {
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


    // GET EVENTS
    const filterDataArray = data?.findManyEvents.filter((item) => {
        if (filterValue === '') {
            return item;
        } else if (filterValue === item.eventStatus) {
            return item;
        } else if (filterValue === 'All') {
            return item;
        }
    });



    //DELETE EVENT
    let [DeleteEvents, { loading: DeleteLoading }] = useMutation(DELETE_SINGLE_EVENT);
    const ctaDeleteHandlerEvent = async ({ e, ...props }) => {
        console.log(props.id);
        try {
            await DeleteEvents({
                variables: {
                    where: {
                        id: props.id
                    }
                },
                onCompleted(data) {
                    toast.success("Event deleted Successfully", {
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
                refetchQueries: [{ query: GET_EVENTS }],
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




    //UPDATE SINGLE EVENT
    let [updatedIndex, setUpdatedIndex] = useState('');


    let [UpdateEvents, { loading: UpdateLoading }] = useMutation(UPDATE_SINGLE_EVENT);
    const ctaUpdateEvent = ({ ...props }) => {
        setUpdatedIndex(props.id);
        setName(props.eventName);
        setdescription(props.eventDesc);
        seteventDate(props.eventDate);
        setStatus(props.eventStatus);
        setFlag8(true);
    }

    const handleCloseUpdate = () => {
        setFlag8(false);
    };
    const ctaUpdateHandlerEvent = async (event) => {
        if (
            name === '' ||
            description === '' ||
            status === '' ||
            eventDate === '' 
            // eventImage === ''
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
                await UpdateEvents({
                    variables: {
                        where: {
                            id: updatedIndex
                        },
                        data: {
                            eventName: {
                                set: name
                            },
                            eventDesc: {
                                set: description
                            },
                            eventDate: {
                                set: eventDate
                            },
                            eventStatus: {
                                set: status
                            }
                        },

                    },
                    onCompleted() {
                        toast.success("Story updated Successfully", {
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
                        setName('');
                        setdescription('');
                        setStatus('');
                        seteventDate('');
                        // setspeakerId('');
                        // seteventImage('');
                        setUpdatedIndex('');
                        setFlag8(false);
                    },
                    refetchQueries: [{ query: GET_EVENTS }],
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
    }



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
            ctaDeleteHandlerEvent,
            DeleteLoading,
            AddLoading,
            ctaUpdateEvent,
            flag8,
            handleCloseUpdate,
            ctaUpdateHandlerEvent,
            UpdateLoading
        },
    ];
}
