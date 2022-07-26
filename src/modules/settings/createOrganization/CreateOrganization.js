import React from 'react'
import { FM } from './CreateOrganizationStyle'
import { Grid, MenuItem } from "@mui/material";
import { UseCreateOrganization } from './UseCreateOrganization';
import CommonTableLoader from '../../../commonComponents/commonTableLoader/CommonTableLoader';
export default function CreateOrganization() {
  const [{
    state,
    name,
    setName,
    email,
    setEmail,
    role,
    setRole,
    password,
    setPassword,
    address,
    setAddress,
    contact,
    setContact,
    userGroup,
    setUserGroup,
    userGroupOrganization,
    ctaHandler,
    ADD_LOADING
  }] = UseCreateOrganization()
  const obj = ["ORGANIZATIONKEY", "OWNER"]
  if (ADD_LOADING) {
    return <CommonTableLoader />
  }
  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh", minWidth: "100%", padding: "20px" ,borderRadius:"20px"}}>

      {
        state.user.id === "62deef57d7afa35edb69f58c" ?
          <>
            <Grid container spacing={2}>
              <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                <FM.TextInput
                  InputLabelProps={{ shrink: true }}
                  label={"Name"}
                  name={"Name"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  InputProps={{ disableUnderline: true }}
                  margin="dense"
                  id="file"
                  required
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                <FM.TextInput
                  InputLabelProps={{ shrink: true }}
                  label={"Email"}
                  name={"Email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputProps={{ disableUnderline: true }}
                  margin="dense"
                  id="file"
                  required
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                <FM.TextInput
                  InputLabelProps={{ shrink: true }}
                  label={"Password"}
                  name={"Password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{ disableUnderline: true }}
                  margin="dense"
                  id="file"
                  required
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                <FM.TextInput
                  InputLabelProps={{ shrink: true }}
                  label={"Address"}
                  name={"Address"}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  InputProps={{ disableUnderline: true }}
                  margin="dense"
                  id="file"
                  required
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                <FM.TextInput
                  InputLabelProps={{ shrink: true }}
                  label={"Contact"}
                  name={"Contact"}
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  InputProps={{ disableUnderline: true }}
                  margin="dense"
                  id="file"
                  required
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xl={6} lg={6} md={12} sm={12} xs={12} style={{ marginTop: 10 }}>
                <FM.TextInput
                  InputLabelProps={{ shrink: true }}
                  label={"Role"}
                  name={"Role"}
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  select
                  InputProps={{ disableUnderline: true }}
                  margin="dense"
                  id="file"
                  required
                  fullWidth
                >
                  {
                    obj?.map((option, i) => (
                      <MenuItem key={option} value={option}>
                        <div>{option}</div>
                      </MenuItem>
                    ))}
                </FM.TextInput>
              </Grid>
              <Grid item xl={6} lg={6} md={12} sm={12} xs={12} style={{ marginTop: 10 }}>
                <FM.TextInput
                  InputLabelProps={{ shrink: true }}
                  label={"User Group"}
                  name={"User Group"}
                  value={userGroup}
                  select
                  onChange={(e) => setUserGroup(e.target.value)}
                  InputProps={{ disableUnderline: true }}
                  margin="dense"
                  id="file"
                  required
                  fullWidth
                >
                  {
                    userGroupOrganization?.map((option, i) => (
                      <MenuItem key={option.id} value={option.id}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                          <div>{option.userName}</div>
                          <div style={{ fontSize: '10px', color: "gray", float: "right" }}>
                            {option.userGroupRole}
                          </div>
                        </div>
                      </MenuItem>
                    ))}
                </FM.TextInput>
              </Grid>


            </Grid>
            <br/>
            <FM.FormButton style={{ color: '#1E86FF' }} variant="outlined" onClick={ctaHandler}>
              Create Organization
            </FM.FormButton>
          </>
          :
          "you dont have permission to create other organization"}

    </div >
  )
}
