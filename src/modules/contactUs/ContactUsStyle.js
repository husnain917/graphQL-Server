import { styled } from '@mui/material/styles';
import { Typography, Container } from "@mui/material";

export const TypoHead = styled(Typography)({
    fontSize: '60px',
    fontWeight: '300',
    color: '#00668B',
    "@media (max-width: 700px)": {
        fontSize: '40px',
    },
    "@media (max-width: 400px)": {
        fontSize: '40px',
    },
})
export const TypoText = styled(Typography)({
    fontSize: '20px',
    fontWeight: '200',
    color: '#00668B'
})
export const ContainerFields = styled(Container)({

    maxWidth: 520,
    height: 523,
    width: '50%',
    margin: '0 auto',
    "@media (max-width: 700px)": {
        width: '95%',
    },
})