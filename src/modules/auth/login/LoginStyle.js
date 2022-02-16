import { styled } from '@mui/material/styles';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { colors } from '../../../constants/Color';
export const LoginStyle = {
    MainPage: styled('div')(() => ({
        backgroundColor: '#f2f4f7',
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        minHeight: 540,
        overflowY: 'auto',
    })),
    LoginContainer: styled('div')(() => ({
        backgroundColor: 'white',
        maxWidth: 520,
        height: 523,
        width: '90%',
        margin: '0 auto',
        "@media (max-width: 700px)": {
            width: '95%',
        },
    })),
    InlineHeaderContainer: styled('div')(() => ({
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 40,
        "@media (max-width: 700px)": {
            width: '90%',
        },
    })),
    LeftBorder: styled('div')(() => ({
        borderLeft: '4px solid #63Afff',
        height: 110,
        marginTop: 20,
        marginRight: 10,
    })),
    LoginHeading: styled('p')(() => ({
        color: '#8c8a99',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: -135,
    })),
    Image: styled('img')(() => ({
        marginTop: -10,
        marginLeft: -5,
    })),
    InputFieldHeading: styled('p')(() => ({
        marginTop: 30,
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        alignItems: 'center',
        fontSize: 13,
        color: 'grey',
        fontWeight: 'bold',
        "@media (max-width: 700px)": {
            width: '95%',
        },
    })),
    IconAndInputField: styled('div')(() => ({
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        "@media (max-width: 700px)": {
            width: '95%',
        },
    })),
    IconContainer: styled('div')(() => ({
        alignItems: 'center',
        backgroundColor: '#f2f4f7',
        width: '10%',
        height: 34,
        display: 'flex',
        justifyContent: 'center',
        "@media (max-width: 700px)": {
            width: '20%',
        },
    })),
    PersonOutlineIcon: styled(PersonOutlineIcon)(() => ({
        color: 'grey',
        fontSize: 20,
    })),
    LockIcon: styled(LockIcon)(() => ({
        width: 20,
        color: 'grey',
    })),
    Input: styled('input')(() => ({
        width: '90%',
        height: 20,
        borderColor: '#f2f4f7',
        borderWidth: 1,
        padding: '15px 15px',
        boxSizing: "border-box",
        border: " 2px solid #eeeeee",
        "@media (max-width: 700px)": {
            width: '90%',
        },
    })),
    PasswordVisibleIconContainer: styled('div')(() => ({
        alignItems: 'center',
        backgroundColor: colors.lightBlue,
        width: '10%',
        height: 34,
        display: 'flex',
        justifyContent: 'center',
        "@media (max-width: 700px)": {
            width: '20%',
        },
    })),
    VisibilityIcon: styled(VisibilityIcon)(({ showPassword }) => ({
        width: 20,
        color: showPassword ? 'white' : 'grey',
        cursor: 'pointer',
    })),
    LoaderContainer: styled('div')(() => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    })),
    ButtonContainer: styled('div')(() => ({
        width: '75%',
        paddingRight: 25,
        marginLeft: 'auto',
        marginRight: 'auto',
        "@media (max-width: 700px)": {
            width: '90%',
        },
    })),
    LoginButton: styled('button')(() => ({
        backgroundColor: 'white',
        width: '100%',
        color: colors.lightBlue,
        padding: '10px 22px',
        border: `1px solid ${colors.lightBlue}`,
        textAlign: 'center',
        fontSize: '16px',
        transition: '0.3s',
        marginTop: 40,
        '&:hover': {
            transition: '0.7s',
            backgroundColor: colors.lightBlue,
            color: 'white',
            cursor: 'pointer',
        },
    })),
}