import { styled } from '@mui/material/styles';
import {
    PeopleOutline,
    AirplaneTicketOutlined,
    RecordVoiceOver,
    Subscriptions,
    LocalActivity,
} from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { colors } from '../../constants/Color';
export const DS = {
    MainPageContainer: styled('div')(() => ({
        width: '100%',
        paddingTop: 7,
        height: '100%',
    })),
    CardsRow: styled('div')(() => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    })),
    CardContainer: styled('div')(() => ({
        width: '32%',
        marginBottom: 10,
        "@media (max-width: 900px)": {
            width: '100%',
        },
    })),
    PeopleOutline: styled(PeopleOutline)(() => ({
        fontSize: 50,
        color: colors.lightBlue,
    })),
    RecordVoiceOver: styled(RecordVoiceOver)(() => ({
        fontSize: 50,
        color: colors.lightBlue,
    })),
    Subscriptions: styled(Subscriptions)(() => ({
        fontSize: 50,
        color: colors.lightBlue,
    })),
    LocalActivity: styled(LocalActivity)(() => ({
        fontSize: 50,
        color: colors.lightBlue,
    })),
    EventAvailableIcon: styled(EventAvailableIcon)(() => ({
        fontSize: 50,
        color: colors.lightBlue,
    })),
    AirplaneTicketIcon: styled(AirplaneTicketOutlined)(() => ({
        fontSize: 50,
        color: colors.lightBlue,
    })),
    PersonIcon: styled(PersonIcon)(() => ({
        fontSize: 50,
        color: colors.lightBlue,
    })),
}