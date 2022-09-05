import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

export const CM = {
    MainCard: styled(Card)(() => ({
        width: 290,
        height: 290,
        margin: 16,
        '&:hover':{
           transform: 'scale(1.05)'
        }
    })),
    MainCardContent: styled(CardContent)(() => ({
        position: 'relative',
        marginBottom:'8px',
    })),
    TitleTypography: styled(Typography)(() => ({
        fontWeight: 'bold'
    })),
    CourseTypography: styled(Typography)(() => ({
        fontWeight: 'bold'
    })),
    CourseDiv: styled('div')(() => ({
        paddingBottom: '4px'
    })),
    LectureDiv: styled('div')(() => ({
        paddingBottom: '25px'
    })),
    CreatedAtTypography: styled(Typography)(() => ({
        fontWeight: 'bold',
        fontSize: 11
    })),
    DateTypography: styled(Typography)(() => ({
        fontSize: 10,
        fontWeight: 'bold'
    })),
    DateDiv: styled('div')(() => ({
        position: 'absolute',
        bottom: 0,
        right: 0,
        padding: '2px 8px'

    }))

}