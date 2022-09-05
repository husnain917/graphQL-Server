import { Typography,Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';


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
    HeaderDiv: styled(Box)(() => ({
        display: 'flex',
        maxWidth: '100%',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: '12px 30px',
        borderRadius: '20px',
        backgroundColor:'#ecf8f8',
        marginTop: 1,
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        alignItems: 'center'
    })),
    FlexDiv: styled(Box)(() => ({
        display: 'flex',
        margin: 2,
        maxWidth: '100%',
        justifyContent: 'center',
        flexWrap: 'wrap'
    })),
    TitleTypography: styled(Typography)(() => ({
        fontWeight: 'bold',
        fontSize: 25,
        color: '#3a0ca3',
        margin: 0,
        padding: 0
    })),
    AddButton: styled(Button)(({ theme }) => ({
        textTransform: 'none',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: '#1E86FF;',
        color: '#ffffff',
        width: 115,
        height: 37,
        marginLeft: 12,
        "&:hover": {
            backgroundColor: '#1E86FF;',
            border: 'none',
        }
    })),
    AddIcon: styled(AddIcon)(() => ({
        fontSize: 27,
        cursor: 'pointer',
        color: '#1E86FF'
    })),

}
