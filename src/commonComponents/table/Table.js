//Import from Libraries
import React from 'react'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Toolbar, IconButton, Typography, Tooltip, Hidden } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'
import { colors } from '../constants/Color';
//Import from Files
import GlobalSearch from '../globalSearch/GlobalSearch';
import { TableStyle } from './TableStyle';
import { UseTable } from './UseTable';


export default function Table({ data, title, tableHeading }) {

  const [{ searchShow, setSearchShow, searchQuery, onTextChangeHandler, cancelSearch, searchingFor }] = UseTable();

  return (
    <>
      <Toolbar disableGutters>
        <TableStyle.BoxElement style={{ backgroundColor: colors.lightBlue, color: 'white' }} searchShow  >
          <Hidden smDown>
            <TableStyle.SeachContainer >
              <Typography
                variant="h6"
                component="div"
                noWrap={true}
              >
                {title}
              </Typography>
              <GlobalSearch
                onChangeText={onTextChangeHandler}
                placeholder="Search here..."
                searchCancel={cancelSearch}
              />
            </TableStyle.SeachContainer>
          </Hidden>


          <Hidden smUp>
            <Box sx={{ display: searchShow ? 'block' : 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography
                variant="h6"
                component="div"
                noWrap={true}
                sx={{ display: searchShow && 'none' }}
              >
                All Students
              </Typography>
              {
                searchShow &&
                <TableStyle.SearchBox  >
                  <GlobalSearch
                    onChangeText={onTextChangeHandler}
                    placeholder="Search here..."
                    searchCancel={cancelSearch}
                  />
                  <IconButton
                    disableFocusRipple
                    disableRipple
                    onClick={(val) => { setSearchShow(!searchShow); cancelSearch(val) }}
                  >
                    <TableStyle.CloseIconBox>
                      <TableStyle.CloseIcon fontSize='small' />
                    </TableStyle.CloseIconBox>
                  </IconButton>
                </TableStyle.SearchBox>
              }
              {
                !searchShow &&
                <IconButton
                  size="large"
                  color="inherit"
                  aria-label="search"
                  disableFocusRipple
                  disableRipple
                  onClick={() => setSearchShow(!searchShow)}
                >
                  <SearchIcon />
                </IconButton>
              }

            </Box>
          </Hidden>
        </TableStyle.BoxElement>
      </Toolbar>
      <TableContainer component={Paper} >
        <TableStyle.CustomTable size="small" aria-label="a dense table">
          <TableHead >
            <TableRow>
              {
                tableHeading ?
                  <>
                    {
                      tableHeading.map((item, index) => {
                        return (
                          <>
                            {
                              index === 0 ?
                                <TableCell >{item?.heading}</TableCell>
                                :
                                <>
                                  <TableCell align="center">{item?.heading}</TableCell>
                                </>
                            }

                          </>
                        )
                      })
                    }

                  </>

                  :
                  <>
                    <TableCell>Name</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="center">Phone</TableCell>
                    <TableCell align="center">Image</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </>

              }


            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .filter(
                searchingFor(searchQuery),
              )
              .map((row, index) => (
                <TableStyle.CustomTableRow
                  key={row.name}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row?.email}</TableCell>
                  <TableCell align="center">{row?.status}</TableCell>
                  <TableCell align="center">{row?.phone}</TableCell>
                  <TableCell align="center">{row?.image}</TableCell>
                  <TableCell align="center">
                    <Tooltip title='Delete'>
                      <IconButton
                        aria-label='delete'
                        size='small'
                      >
                        <TableStyle.DeleteIcon />
                      </IconButton>

                    </Tooltip>
                    <Tooltip title='Update'>
                      <IconButton
                        aria-label='update'
                        size='small'
                      >
                        <TableStyle.EditIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableStyle.CustomTableRow>
              ))}
          </TableBody>
        </TableStyle.CustomTable>
      </TableContainer>
    </>
  );
}
