import { TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors } from "../../constants/Color";
const mypadding = {
    paddingLeft: '40px'
}
export const CF = {
    ProfileFieldLabel: styled(Typography)(() => ({
        fontSize: '22px',
        fontWeight: '600',
        color: `${colors.lightBlue}`,
        paddingLeft: `${mypadding.paddingLeft}`,
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        },
    })),
    ProfileField: styled(TextField)(() => ({
        paddingLeft: `${mypadding.paddingLeft}`,
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        },
    }))
}