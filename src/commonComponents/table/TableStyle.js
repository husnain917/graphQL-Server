
import { styled, alpha } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Close, Delete, Edit } from '@mui/icons-material'
import { TableRow, Table } from '@mui/material';
export const ReservartionTableStyle = {
    LoaderContainer: styled('div')(() => ({
        width: '100%',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
    })),
    BoxElement: styled(Box)(({ theme }) => ({
        height: 60,
        flexGrow: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '100%',
        paddingTop: 12,
        [theme.breakpoints.down('sm')]: {
            marginTop: 8,
            paddingTop: 6,
        },
        paddingBottom: 10,
        backgroundColor: '#fffe',
        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.19)",
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
        },
        marginBottom: 10
    })),

    SeachContainer: styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    })),

    SearchBox: styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',

    })),
    CloseIconBox: styled(Box)(({ theme }) => ({
        width: 26,
        height: 26,
        backgroundColor: '#A9A9A9',
        borderRadius: 999,

    })),
    CloseIcon: styled(Close)({
        color: '#fff',
    }),
    CustomTable: styled(Table)(({ theme }) => ({
        minWidth: 650,
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1)
        }
    })),
    CustomTableRow: styled(TableRow)(({ theme }) => ({
        '&:last-child td, &:last-child th': { border: 0 }
    })),
    DeleteIcon: styled(Delete)(() => ({
        color: '#f44336'
    })),
    EditIcon: styled(Edit)(({ theme }) => ({
        color: '#ffeb3b'
    }))
}





