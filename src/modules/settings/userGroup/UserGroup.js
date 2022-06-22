import { Checkbox, Grid } from '@mui/material'
import React from 'react'
import { TabsStyle } from './UserGroupStyle'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const rows = [
  {
    title: 'Dashboard',
    checkBox: <Checkbox {...label} color="primary" />
  },
  {
    title: 'Staff',
    checkBox: <Checkbox {...label} />
  },
  {
    title: 'Courses',
    checkBox: <Checkbox {...label} />
  },
  {
    title: 'Course Batch',
    checkBox: <Checkbox {...label} />
  },
  {
    title: 'Students',
    checkBox: <Checkbox {...label} />
  },
  {
    title: 'Course Batch',
    checkBox: <Checkbox {...label} />
  },
  {
    title: 'Enrollment Approval',
    checkBox: <Checkbox {...label} />
  },
  {
    title: 'Success Stories',
    checkBox: <Checkbox {...label} />
  },
  {
    title: 'Events',
    checkBox: <Checkbox {...label} />
  },
  {
    title: 'Contact',
    checkBox: <Checkbox {...label} />
  },
  {
    title: 'FAQs',
    checkBox: <Checkbox {...label} />
  },
  {
    title: 'My Courses',
    checkBox: <Checkbox {...label} />
  },
  {
    title: 'Assignments',
    checkBox: <Checkbox {...label} />
  },
  {
    title: 'Quiz',
    checkBox: <Checkbox {...label} />
  },
  {
    title: 'Attandance',
    checkBox: <Checkbox {...label} />
  },
  {
    title: 'Student List',
    checkBox: <Checkbox {...label} />
  },
  {
    title: 'Lecture',
    checkBox: <Checkbox {...label} />
  },
  {
    title: 'Speakers',
    checkBox: <Checkbox {...label} />
  },
  {
    title: 'Profile',
    checkBox: <Checkbox {...label} />
  },
  {
    title: 'Settings',
    checkBox: <Checkbox {...label} />
  },

];

export default function UserGroup() {


  return (
    <TabsStyle.MainDiv>
      <Grid container>
        <Grid item xl={6} lg={6} mg={12} sm={12} xs={12}>
          <TabsStyle.InputLabel>
            User Group Name
            <TabsStyle.MyInput />
          </TabsStyle.InputLabel>
        </Grid>
        <Grid item xl={6} lg={6} mg={12} sm={12} xs={12}>
          <TabsStyle.InputLabel>
            User Role
            <TabsStyle.MyInput />
          </TabsStyle.InputLabel>
        </Grid>
        <Grid item xl={6} lg={6} mg={12} sm={12} xs={12}>
          <TabsStyle.InputLabel>
            User Type
            <TabsStyle.MyInput />
          </TabsStyle.InputLabel>
        </Grid>
        {/* <Grid item xl={6} lg={6} mg={12} sm={12} xs={12}>
          <TabsStyle.InputLabel>
            User Group Name
            <TabsStyle.MyInput />
          </TabsStyle.InputLabel>
        </Grid> */}
      </Grid>
      <TabsStyle.PermissionText>
        API Permissions
      </TabsStyle.PermissionText>
      <TabsStyle.TableDiv>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 530 }} aria-label="simple table">
            <TabsStyle.PermissionsTableHead>
              <TableRow>
                <TabsStyle.PermissionTableTitleHead>Option</TabsStyle.PermissionTableTitleHead>
                <TabsStyle.PermissionTableTitleHead align="right">View Only</TabsStyle.PermissionTableTitleHead>
                <TabsStyle.PermissionTableTitleHead align="right">Create</TabsStyle.PermissionTableTitleHead>
                <TabsStyle.PermissionTableTitleHead align="right">Update</TabsStyle.PermissionTableTitleHead>
                <TabsStyle.PermissionTableTitleHead align="right">Delete</TabsStyle.PermissionTableTitleHead>
                <TabsStyle.PermissionTableTitleHead align="center">Full Access</TabsStyle.PermissionTableTitleHead>
              </TableRow>
            </TabsStyle.PermissionsTableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow
                  key={i}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TabsStyle.PermissionTitletTxt component="th" scope="row">
                    {row.title}
                  </TabsStyle.PermissionTitletTxt>
                  <TableCell style={{ paddingBottom: 10, paddingTop: 10 }} align="right">{row.checkBox}</TableCell>
                  <TableCell style={{ paddingBottom: 10, paddingTop: 10 }} align="right">{row.checkBox}</TableCell>
                  <TableCell style={{ paddingBottom: 10, paddingTop: 10 }} align="right">{row.checkBox}</TableCell>
                  <TableCell style={{ paddingBottom: 10, paddingTop: 10 }} align="right">{row.checkBox}</TableCell>
                  <TableCell style={{ paddingBottom: 10, paddingTop: 10 }} align="center">{row.checkBox}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabsStyle.TableDiv>
    </TabsStyle.MainDiv>
  )
}
