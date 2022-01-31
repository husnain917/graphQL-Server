//Import from Libraries
import React from 'react'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Toolbar, IconButton, Typography, Tooltip, Hidden } from '@mui/material';
import moment from 'moment';
//Import from Files
import { ReservartionTableStyle } from './TableStyle';

export default function ReservationTable({
  tickets = { tickets },
  searchingFor = { searchingFor },
  searchQuery = { searchQuery },
  modalHandler = { modalHandler },
  updateHandler = { updateHandler } }) {
  return (
    <>
      <TableContainer component={Paper} >
        <ReservartionTableStyle.CustomTable size="small" aria-label="a dense table">
          <TableHead >
            <TableRow>
              <TableCell>PNR</TableCell>
              <TableCell align="center">PAX</TableCell>
              <TableCell align="center">Expiry</TableCell>
              <TableCell align="center">Airlines</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets
              .filter(
                searchingFor(searchQuery),
              )
              .map((row, index) => (
                <ReservartionTableStyle.CustomTableRow
                  key={row.name}
                >
                  <TableCell component="th" scope="row">
                    {row.pnr}
                  </TableCell>
                  <TableCell align="center">{row.pax}</TableCell>
                  <TableCell align="center">{moment(row.expiryDateAndTime).format('DD-MMM-YY hh:mm A')}</TableCell>
                  <TableCell align="center">{row.airline}</TableCell>
                  <TableCell align="center">
                    <Tooltip title='Delete'>
                      <IconButton
                        aria-label='delete'
                        size='small'
                      >
                        <ReservartionTableStyle.DeleteIcon onClick={() => modalHandler(row.id, row.cronDataId)} />
                      </IconButton>

                    </Tooltip>
                    <Tooltip title='Update'>
                      <IconButton
                        aria-label='update'
                        size='small'
                        onClick={() => updateHandler(row, index)}
                      >
                        <ReservartionTableStyle.EditIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </ReservartionTableStyle.CustomTableRow>
              ))}
          </TableBody>
        </ReservartionTableStyle.CustomTable>
      </TableContainer>
    </>
  );
}
