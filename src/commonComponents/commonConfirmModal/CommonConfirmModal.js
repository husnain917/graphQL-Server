import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import { CM, style } from './CommonConfirmModalStyle'
import UseCommonConfirmModal from './UseCommonConfirmModal';


export default function CommonConfirmModal({ ctaDeleteHandler, row, title }) {
  const [{ open, setOpen, handleClose, handleOpen }] = UseCommonConfirmModal()

  return (
    <div>
      <IconButton
        aria-label="delete"
        size="small"
        onClick={handleOpen}
      >
        <CM.DeleteIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CM.ModalBox sx={style}>
          <p>Are you sure to delete {title} record permanently?</p>
          <CM.DeleteButton variant='contained' color="error" onClick={() => ctaDeleteHandler(row)}>Delete</CM.DeleteButton>
        </CM.ModalBox>
      </Modal>
    </div>
  );
}
