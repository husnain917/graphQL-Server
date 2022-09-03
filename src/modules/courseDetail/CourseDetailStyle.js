import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CD = {
    MainPageContainer: styled('div')(() => ({
        backgroundColor:'white',
        padding:'20px',
        borderRadius:'20px',
    })),
    CourseTypo: styled(Typography)(() => ({
      color:'blue',
      fontWeight:'bold'
    })),
    CourseDesc: styled(Typography)(() => ({
        padding:'8px'
    })),
    PriceDiv: styled('div')(() => ({
        display:'flex',
        justifyContent:'space-between',
        padding:'0 8px'
    })),

}
