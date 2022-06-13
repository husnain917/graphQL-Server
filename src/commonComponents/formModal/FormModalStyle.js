import styled from "@emotion/styled";
import { colors } from "../../constants/Color";

export const FM = {
    FormButton: styled('button')(() => ({
        color: `${colors.lightBlue}`,
        border: `1px solid ${colors.lightBlue} `,
        padding: '11px 25px 11px 25px',
        cursor: "pointer",
        borderRadius: '2px',
        fontWeight: "normal",
        letterSpacing: "0.5px",
        backgroundColor: "#ffffff",
        transition: "0.4s",
        '&:hover': {
            backgroundColor: `${colors.lightBlue}`,
            color: "#ffffff"
        }
    })),
    // Image: styled('input')(() => ({
    //     backgroundColor: colors.appBar,
    //     color: "#ffffff",
    //     padding: "5px",
    //     '&:hover': {
    //         backgroundColor: "#ffffff",
    //         color: colors.appBar,
    //         border: `1px solid ${colors.appBar}`
    //     }
    // }))
}