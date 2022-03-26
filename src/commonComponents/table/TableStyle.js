
import { styled, alpha } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Close, Delete, Edit } from '@mui/icons-material'
import { TableRow, Table } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { colors } from '../../constants/Color';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { MagicSpinner } from 'react-spinners-kit';
export const TableStyle = {
    // Data Fetching Loading Container
    LoaderContainer: styled('div')(() => ({
        width: '100%',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
    })),

    // Table Header With Search Bar Box Container

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
        backgroundColor: colors.lightBlue,
        color: 'white',
        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.19)",
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
        },
        marginBottom: 10
    })),

    // Table Header With Search Bar For Big Screens


    SeachContainer: styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    })),
    SearchAndBtnsContainer: styled('div')(() => ({
        display: 'inline-flex',
        alignItems: 'center',
    })),

    // Table Header With Search Bar For Small Screens

    MobileViewTableHeader: styled(Box)(({ searchShow }) => ({
        display: searchShow ? 'block' : 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    HeaderIconsContainer: styled('div')(() => ({
        display: 'flex',
        alignItems: 'center',
    })),

    // Table

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

    // Icons
    FilterListIcon: styled(FilterListIcon)(() => ({
        fontSize: 35,
        marginRight: 10,
        marginLeft: 10,
        cursor: 'pointer',
    })),
    AddIcon: styled(AddCircleOutlineIcon)(() => ({
        fontSize: 35,
        cursor: 'pointer',
    })),
    CloseIcon: styled(Close)({
        color: '#fff',
    }),
    SearchIcon: styled(SearchIcon)(() => ({
        fontSize: 27,
    })),
    DeleteIcon: styled(Delete)(() => ({
        color: '#f44336'
    })),
    EditIcon: styled(Edit)(({ theme }) => ({
        color: '#ffeb3b'
    })),
    
}





