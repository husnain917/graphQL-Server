import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PButton from '../Pbutton/Pbutton'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function CommonModal({ question, answer, freelancingProfileUrl }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            {
                question?.faqQuestion.length > 30 ?
                    <>
                        <PButton ctaHandler={handleOpen} title="see more" />
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                        >
                            <Fade in={open}>
                                <Box sx={style}>
                                    <Typography id="transition-modal-title" variant="h6" component="h2">
                                        Question
                                    </Typography>
                                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                        {question?.faqQuestion}
                                    </Typography>
                                </Box>
                            </Fade>
                        </Modal>
                    </>
                    :
                    answer?.faqAnswer.length > 30 ?
                        <>
                            <PButton ctaHandler={handleOpen} title="see more" />
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                    timeout: 500,
                                }}
                            >
                                <Fade in={open}>
                                    <Box sx={style}>
                                        <Typography id="transition-modal-title" variant="h6" component="h2">
                                            Answer
                                        </Typography>
                                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                            {answer?.faqAnswer}
                                        </Typography>
                                    </Box>
                                </Fade>
                            </Modal>
                        </>
                        :
                        question?.faqQuestion.length < 30 ?

                            <p>{question?.faqQuestion}</p>

                            :
                            answer?.faqAnswer.length < 30 ?
                                <p>{answer?.faqAnswer}</p>
                                :
                                freelancingProfileUrl?.freelancingProfileUrl.length > 15 ?
                                    <>
                                        <PButton ctaHandler={handleOpen} title="see more" />
                                        <Modal
                                            aria-labelledby="transition-modal-title"
                                            aria-describedby="transition-modal-description"
                                            open={open}
                                            onClose={handleClose}
                                            closeAfterTransition
                                            BackdropComponent={Backdrop}
                                            BackdropProps={{
                                                timeout: 500,
                                            }}
                                        >
                                            <Fade in={open}>
                                                <Box sx={style}>
                                                    <Typography id="transition-modal-title" variant="h6" component="h2">
                                                        Freelancing Profile Url
                                                    </Typography>
                                                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                                        {freelancingProfileUrl?.freelancingProfileUrl}
                                                    </Typography>
                                                </Box>
                                            </Fade>
                                        </Modal>
                                    </>
                                    :
                                    freelancingProfileUrl?.freelancingProfileUrl.length < 15 ?
                                        <>
                                            <p> {freelancingProfileUrl?.freelancingProfileUrl}</p>
                                        </>
                                        : ''

            }
        </div>
    );
}
