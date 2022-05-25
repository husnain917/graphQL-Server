import styled from "@emotion/styled";
import { Delete } from "@mui/icons-material";
import Box from '@mui/material/Box';

export const CM = {
    ModalBox: styled(Box)(() => ({
        border: "none",
        padding: 40
    })),
    DeleteIcon: styled(Delete)(() => ({
        color: '#f44336'
    })),
    DeleteButton: styled('button')(() => ({
        color: '#f44336',
        border: '1px solid #f44336',
        padding: '11px 25px 11px 25px',
        cursor: "pointer",
        borderRadius: '2px',
        letterSpacing:"0.5px",
        backgroundColor: "#ffffff",
        transition: "0.4s",
        '&:hover': {
            backgroundColor: "#f44336",
            color: "#ffffff"
        }
    }))

}
export const style = {
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