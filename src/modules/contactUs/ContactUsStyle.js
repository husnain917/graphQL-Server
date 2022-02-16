import { styled } from '@mui/material/styles';
import { Container } from "@mui/material";

export const ContainerFields = styled(Container)({

    maxWidth: 520,
    height: 523,
    width: '50%',
    margin: '0 auto',
    "@media (max-width: 700px)": {
        width: '95%',
    },
})