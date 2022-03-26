import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { Slide, toast } from 'react-toastify';
import { ADD_FAQS, DELETE_SINGLE_FAQ } from '../../lib/mutation/AllMutations';
import { GET_FAQS } from '../../lib/queries/AllQueries';

export function useFAQS() {
    const [filterValue, setFilterValue] = useState('');
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const openAnchor = Boolean(anchorEl);
    let { data, error, loading } = useQuery(GET_FAQS);
    const handleClickOpen = () => {
        setOpen(true);
    };


    // ADD FAQ
    const [faqQuestion, setfaqQuestion] = useState('');
    const [faqAnswer, setfaqAnswer] = useState('');

    const [close, setclose] = useState(false);

    const Notify = () =>
        toast.success('FAQS added successfully', {
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
    let [Mutation,{loading:AddLoading}] = useMutation(ADD_FAQS);
    const ctaButtonHandler7 = async (event, item) => {
        if (faqQuestion === '' || faqAnswer === '') {
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
                            faqQuestion: 'null',
                            faqAnswer: 'null',
                        },
                    },
                    onCompleted(data, cache) {
                        Notify();
                    },
                    refetchQueries: [{ query: GET_FAQS }],
                });
                setfaqQuestion('');
                setfaqAnswer('');
                setclose(true);
                setOpen(false)
            } catch (error) {
                toast.error(error.message, {
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


    // GET FAQ
    // eslint-disable-next-line array-callback-return
    const filterDataArray = data?.faqs.filter((item) => {
        if (filterValue === '') {
            return item;
        } else if (filterValue === item.status) {
            return item;
        } else if (filterValue === 'All') {
            return item;
        }
    });


    // DELETE FAQ
    let [DeleteFaq, { loading: DeleteLoading }] = useMutation(DELETE_SINGLE_FAQ)
    const ctaDeleteHandlerFAQ = async ({ e, ...props }) => {
        console.log(props.id);
        try {
            await DeleteFaq({
                variables: {
                    where: {
                        id: props.id
                    }
                },
                onCompleted(data) {
                    toast.success("Faq deleted Successfully", {
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
                refetchQueries: [{ query: GET_FAQS }],
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
            faqAnswer,
            setfaqAnswer,
            faqQuestion,
            setfaqQuestion,
            ctaButtonHandler7,
            ctaDeleteHandlerFAQ,
            DeleteLoading,
            AddLoading
        },
    ];
}
