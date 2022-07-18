// import { Checkbox, Grid } from '@mui/material'
// import React, { useContext, useEffect, useState } from 'react'
// import { TabsStyle } from './UserGroupStyle'
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { AppContext } from "../../../State";
// import PButton from '../../../commonComponents/Pbutton/Pbutton';
// import { UseUserGroup } from './UseUserGroup';
// export default function UserGroup() {
//   const [userName, userGroupRole, email, setEmail, setUserName, setuserGroupRole, ctaFormHandler] = UseUserGroup()
//   const { state, dispatch } = useContext(AppContext);

//   // const [AddPermission, setAddPermission] = useState()
//   // const [DelPermission, setDelPermission] = useState()
//   // const [EditPermission, setEditPermission] = useState()
//   // const [ViewPermission, setViewPermission] = useState()
//   // const [AllPermission, setAllPermission] = useState()
//   const [pushobj, setPush] = useState()
//   const [stateArray, setStateArray] = useState(state.tabsPersmission)
//   const [mynewArray, setMyNewArray] = useState({
//      "navigationResult": []
//      })
//   // useEffect(() => {
//   //   state.tabsPersmission.map((item, index) => {
//   //     item.pages.map((items) => {
//   //       if (items.pageName === item.moduleName) {
//   //         setPush(item.AddToJson)
//   //       }
//   //       if (items.pageName === item.moduleName) {
//   //         setAddPermission(items.AddPermission)
//   //         setDelPermission(items.DelPermission)
//   //         setEditPermission(items.EditPermission)
//   //         setViewPermission(items.ViewPermission)
//   //         setAllPermission(items.FullAccess)

//   //       }
//   //     })
//   //   })
//   // }, [])



//   const ctaCreateHandler = (item, row) => {
//     const newArray = stateArray.map((ites, i) => {
//       ites.pages.map((rows) => {
//         if (ites.module_id === item.module_id || row.pageID === rows.pageID) {
//           var obj = {
//             "moduleName": item.moduleName,
//             "module_id": item.module_id,
//             "AddToJson": item.AddToJson,
//             "pages": [
//               {
//                 "pageName": row.pageName,
//                 "pageID": row.pageID,
//                 "pageURL": row.pageURL,
//                 "page_id": row.page_id,
//                 "AddPermission": !rows.AddPermission,
//               }
//             ]
//           }
//         }
//         console.log(!rows.AddPermission);
//       })

//     })
//   }
//   const ctaDeleteHandler = (item, row) => {
//     const newArray = stateArray.map((ites, i) => {
//       // if (ites.module_id === item.module_id) {
//       ites.pages.map((rows) => {
//         if (ites.module_id === item.module_id || row.pageID === rows.pageID) {
//           var obj = {
//             "moduleName": item.moduleName,
//             "module_id": item.module_id,
//             "AddToJson": item.AddToJson,
//             "pages": [
//               {
//                 "pageName": row.pageName,
//                 "pageID": row.pageID,
//                 "pageURL": row.pageURL,
//                 "page_id": row.page_id,
//                 "DelPermission": !rows.DelPermission,
//               }
//             ]
//           }
//         }
//       })
//       // }
//     })
//   }
//   const ctaUpdateHandler = (item, row) => {
//     const newArray = stateArray.map((ites, i) => {
//       // if (ites.module_id === item.module_id) {
//       ites.pages.map((rows) => {
//         if (ites.module_id === item.module_id || row.pageID === rows.pageID) {
//           var obj = {
//             "moduleName": item.moduleName,
//             "module_id": item.module_id,
//             "AddToJson": item.AddToJson,
//             "pages": [
//               {
//                 "pageName": row.pageName,
//                 "pageID": row.pageID,
//                 "pageURL": row.pageURL,
//                 "page_id": row.page_id,
//                 "EditPermission": !rows.EditPermission,
//               }
//             ]
//           }
//         }
//       })
//       // }
//     })
//   }
//   const ctaViewHandler = (item, row) => {
//     const newArray = stateArray.map((ites, i) => {
//       // if (ites.module_id === item.module_id) {
//       ites.pages.map((rows) => {
//         if (ites.module_id === item.module_id || row.pageID === rows.pageID) {
//           var obj = {
//             "moduleName": item.moduleName,
//             "module_id": item.module_id,
//             "AddToJson": item.AddToJson,
//             "pages": [
//               {
//                 "pageName": row.pageName,
//                 "pageID": row.pageID,
//                 "pageURL": row.pageURL,
//                 "page_id": row.page_id,
//                 "ViewPermission": !rows.ViewPermission,
//               }
//             ]
//           }
//         }
//       })
//       // }
//     })
//   }
//   const ctaFullAccessHandler = (item, row) => {
//     const newArray = stateArray.map((ites, i) => {
//       // if (ites.module_id === item.module_id) {
//       ites.pages.map((rows) => {
//         if (ites.module_id === item.module_id || row.pageID === rows.pageID) {
//           var obj = {
//             "moduleName": item.moduleName,
//             "module_id": item.module_id,
//             "AddToJson": item.AddToJson,
//             "pages": [
//               {
//                 "pageName": row.pageName,
//                 "pageID": row.pageID,
//                 "pageURL": row.pageURL,
//                 "page_id": row.page_id,
//                 "AddPermission": !rows.AddPermission,
//                 "DelPermission": !rows.DelPermission,
//                 "EditPermission": !rows.EditPermission,
//                 "ViewPermission": !rows.ViewPermission,
//                 "FullAccess": !rows.FullAccess
//               }
//             ]
//           }
//         }
//       })
//       // }
//     })
//   }



//   const ctaAddPermission = (item, row) => {

//     const newArray = stateArray.map((ites, i) => {
//       ites.pages.map((rows) => {
//         if (ites.module_id === item.module_id || row.pageID === rows.pageID) {
//           var obj = {
//             "moduleName": item.moduleName,
//             "module_id": item.module_id,
//             "AddToJson": item.AddToJson,
//             "pages": [
//               {
//                 "pageName": row.pageName,
//                 "pageID": row.pageID,
//                 "pageURL": row.pageURL,
//                 "page_id": row.page_id,
//                 "AddPermission": rows.AddPermission,
//                 "DelPermission": rows.DelPermission,
//                 "EditPermission": rows.EditPermission,
//                 "ViewPermission": rows.ViewPermission,
//                 "FullAccess": rows.FullAccess
//               }
//             ]
//           }
//           var finalArray = mynewArray.navigationResult.push(obj)
//           console.log("newArray", mynewArray);
//           setMyNewArray([...mynewArray.navigationResult, obj])
//           return obj
//           // if (ites.module_id === item.module_id) {

//           //   // if (!pushobj) {
//           //   // var finalArray = mynewArray.navigationResults.push(obj)
//           //   setMyNewArray([...mynewArray.navigationResults, obj])





//           //   // }
//           //   console.log("newArray", mynewArray);
//           //   return obj
//           // }
//         }
//       })
//       return ites
//     })

//   }


//   return (
//     <TabsStyle.MainDiv>
//       <Grid container>
//         <Grid item xl={6} lg={6} mg={12} sm={12} xs={12}>
//           <TabsStyle.InputLabel>
//             User Group Name
//             <TabsStyle.MyInput placeholder='Enter Name' value={userName} onChange={(e) => setUserName(e.target.value)} />
//           </TabsStyle.InputLabel>
//         </Grid>
//         {/* <Grid item xl={6} lg={6} mg={12} sm={12} xs={12}>
//           <TabsStyle.InputLabel>
//             User Email
//             <TabsStyle.MyInput placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
//           </TabsStyle.InputLabel>
//         </Grid> */}
//         <Grid item xl={6} lg={6} mg={12} sm={12} xs={12}>
//           <TabsStyle.InputLabel>
//             User Role
//             <TabsStyle.MyInput placeholder='Enter Role' value={userGroupRole} onChange={(e) => setuserGroupRole(e.target.value)} />
//           </TabsStyle.InputLabel>
//         </Grid>
//       </Grid>
//       <TabsStyle.PermissionText>
//         API Permissions
//       </TabsStyle.PermissionText>
//       <TabsStyle.TableDiv>
//         <TableContainer component={Paper}>
//           <Table sx={{ minWidth: 530 }} aria-label="simple table">
//             <TabsStyle.PermissionsTableHead>
//               <TableRow>
//                 <TabsStyle.PermissionTableTitleHead>Option</TabsStyle.PermissionTableTitleHead>
//                 <TabsStyle.PermissionTableTitleHead align="right">View Only</TabsStyle.PermissionTableTitleHead>
//                 <TabsStyle.PermissionTableTitleHead align="right">Create</TabsStyle.PermissionTableTitleHead>
//                 <TabsStyle.PermissionTableTitleHead align="right">Update</TabsStyle.PermissionTableTitleHead>
//                 <TabsStyle.PermissionTableTitleHead align="right">Delete</TabsStyle.PermissionTableTitleHead>
//                 <TabsStyle.PermissionTableTitleHead align="center">Full Access</TabsStyle.PermissionTableTitleHead>
//                 <TabsStyle.PermissionTableTitleHead align="center">Add</TabsStyle.PermissionTableTitleHead>
//               </TableRow>
//             </TabsStyle.PermissionsTableHead>
//             <TableBody>
//               {
//                 stateArray.map((item, i) => {
//                   return (
//                     <TableRow
//                       key={i}
//                       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                     >
//                       <TabsStyle.PermissionTitletTxt component="th" scope="row">
//                         {item.moduleName}
//                       </TabsStyle.PermissionTitletTxt>
//                       {
//                         item.pages.map((row) => {
//                           console.log(row);
//                           return (
//                             <>
//                               <TableCell style={{ paddingBottom: 10, paddingTop: 10 }} align="right">
//                                 <Checkbox
//                                   checked={row.ViewPermission}
//                                   value={row.ViewPermission}
//                                   onChange={() => ctaViewHandler(item, row)}
//                                 />
//                               </TableCell>
//                               <TableCell style={{ paddingBottom: 10, paddingTop: 10 }} align="right">
//                                 <Checkbox
//                                   checked={row.AddPermission}
//                                   value={row.AddPermission}
//                                   onChange={() => ctaCreateHandler(item, row)}
//                                 />
//                               </TableCell>
//                               <TableCell style={{ paddingBottom: 10, paddingTop: 10 }} align="right">
//                                 <Checkbox
//                                   checked={row.EditPermission}
//                                   value={row.EditPermission}
//                                   onChange={() => ctaUpdateHandler(item, row)}
//                                 />
//                               </TableCell>
//                               <TableCell style={{ paddingBottom: 10, paddingTop: 10 }} align="right">
//                                 <Checkbox
//                                   checked={row.DelPermission}
//                                   value={row.DelPermission}
//                                   onChange={() => ctaDeleteHandler(item, row)}
//                                 />
//                               </TableCell>
//                               <TableCell style={{ paddingBottom: 10, paddingTop: 10 }} align="center">
//                                 <Checkbox
//                                   checked={row.FullAccess}
//                                   value={row.FullAccess}
//                                   onChange={() => ctaFullAccessHandler(item, row)}
//                                 />
//                               </TableCell>
//                               <TableCell style={{ paddingBottom: 10, paddingTop: 10 }} align="center">
//                                 <Checkbox
//                                   checked={item.AddToJson}
//                                   value={item.AddToJson}
//                                   onChange={() => ctaAddPermission(item, row)}
//                                 // onClick={() => ctaAddPermission(item, row)}
//                                 />
//                               </TableCell>
//                             </>
//                           )
//                         })
//                       }
//                     </TableRow>
//                   )
//                 })
//               }
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <br />
//         <PButton title='Add User Group' />

//       </TabsStyle.TableDiv>
//     </TabsStyle.MainDiv>
//   )
// }
import { Checkbox, Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { TabsStyle } from "./UserGroupStyle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PButton from "../../../commonComponents/Pbutton/Pbutton";
import { UseUserGroup } from "./UseUserGroup";
import { AppContext } from "../../../State";
export default function UserGroup() {
  const [
    userName,
    userGroupRole,
    email,
    setEmail,
    setUserName,
    setuserGroupRole,
    ctaFormHandler,
  ] = UseUserGroup();
  const { state, dispatch } = useContext(AppContext);
  const [AddPermission, setAddPermission] = useState();
  const [DelPermission, setDelPermission] = useState();
  const [EditPermission, setEditPermission] = useState();
  const [ViewPermission, setViewPermission] = useState();
  const [AllPermission, setAllPermission] = useState();
  const [pushobj, setPush] = useState();
  const [stateArray, setStateArray] = useState(state.tabsPersmission);
  const [mynewArray, setMyNewArray] = useState({
    navigationResults: [],
  });
  useEffect(() => {
    state.tabsPersmission.map((item, index) => {
      item.pages.map((items) => {
        if (items.pageName === item.moduleName) {
          setPush(item.AddToJson);
        }
        if (items.pageName === item.moduleName) {
          setAddPermission(items.AddPermission);
          setDelPermission(items.DelPermission);
          setEditPermission(items.EditPermission);
          setViewPermission(items.ViewPermission);
          setAllPermission(items.FullAccess);
        }
      });
    });
  }, []);
  const ctaAddPermission = (item) => {
    const newArray = stateArray.map((ites, i) => {
      if (ites.module_id === item.module_id) {
        ites.pages.forEach((row) => {
          var obj = {
            moduleName: item.moduleName,
            module_id: item.module_id,
            AddToJson: !item.AddToJson,
            pages: [
              {
                pageName: row.pageName,
                pageID: row.pageID,
                pageURL: row.pageURL,
                page_id: row.page_id,
                AddPermission: row.AddPermission,
                DelPermission: row.DelPermission,
                EditPermission: row.EditPermission,
                ViewPermission: row.ViewPermission,
                FullAccess: row.FullAccess,
              },
            ],
          };
          setStateArray([...stateArray, obj]);
        });
      }
      return ites;
    });
  
  };
  const ctaPermission = (item, row) => {
    const newArray = state?.tabsPersmission.map((ites, i) => {
      ites.pages.forEach((rows) => {
        if (item.module_id === ites.module_id) {
          var obj = {
            moduleName: item.moduleName,
            module_id: item.module_id,
            AddToJson: pushobj,
            pages: [
              {
                pageName: row.pageName,
                pageID: row.pageID,
                pageURL: row.pageURL,
                page_id: row.page_id,
                AddPermission: row.AddPermission,
                DelPermission: row.DelPermission,
                EditPermission: row.EditPermission,
                ViewPermission: row.ViewPermission,
                FullAccess: row.FullAccess,
              },
            ],
          };
          // console.log("object", obj);
        }
      });
    });
  };
  
  const ctaCreatePermission = (item, row) => {
    const newArray = state?.tabsPersmission.map((ites, i) => {
      ites.pages.forEach((rows) => {
        if (item.module_id === ites.module_id) {
          var obj = {
            moduleName: item.moduleName,
            module_id: item.module_id,
            AddToJson: pushobj,
            pages: [
              {
                pageName: row.pageName,
                pageID: row.pageID,
                pageURL: row.pageURL,
                page_id: row.page_id,
                AddPermission: !row.AddPermission,
              },
            ],
          };
          // console.log("object", obj);
        }
      });
    });
  };
  const ctaDeletePermission = (item, row) => {
    const newArray = state?.tabsPersmission.map((ites, i) => {
      ites.pages.forEach((rows) => {
        if (item.module_id === ites.module_id) {
          var obj = {
            moduleName: item.moduleName,
            module_id: item.module_id,
            AddToJson: pushobj,
            pages: [
              {
                pageName: row.pageName,
                pageID: row.pageID,
                pageURL: row.pageURL,
                page_id: row.page_id,
                DelPermission: !row.DelPermission,
              },
            ],
          };
          // console.log("object", obj);
        }
      });
    });
  };
  const ctaeditPermission = (item, row) => {
    const newArray = state?.tabsPersmission.map((ites, i) => {
      ites.pages.forEach((rows) => {
        if (item.module_id === ites.module_id) {
          var obj = {
            moduleName: item.moduleName,
            module_id: item.module_id,
            AddToJson: pushobj,
            pages: [
              {
                pageName: row.pageName,
                pageID: row.pageID,
                pageURL: row.pageURL,
                page_id: row.page_id,
                EditPermission: !row.EditPermission,
              },
            ],
          };
          // console.log("object", obj);
        }
      });
    });
  };
  const ctaviewPermission = (item, row) => {
    const newArray = state?.tabsPersmission.map((ites, i) => {
      ites.pages.forEach((rows) => {
        if (item.module_id === ites.module_id) {
          var obj = {
            moduleName: item.moduleName,
            module_id: item.module_id,
            AddToJson: pushobj,
            pages: [
              {
                pageName: row.pageName,
                pageID: row.pageID,
                pageURL: row.pageURL,
                page_id: row.page_id,
                ViewPermission: !row.ViewPermission,
              },
            ],
          };
          // console.log("object", obj);
        }
      });
    });
  };
  
  const ctaFullPermission = (item, row) => {
    const newArray = state?.tabsPersmission.map((ites, i) => {
      ites.pages.forEach((rows) => {
        if (item.module_id === ites.module_id) {
          var obj = {
            moduleName: item.moduleName,
            module_id: item.module_id,
            AddToJson: pushobj,
            pages: [
              {
                pageName: row.pageName,
                pageID: row.pageID,
                pageURL: row.pageURL,
                page_id: row.page_id,
                FullAccess: !row.FullAccess,
              },
            ],
          };
          // console.log("object", obj);
        }
      });
    });
  };
  const test = [
    {
      moduleName: "Dashboard",
      module_id: "",
      module_icon: "",
      pages: [
        {
          pageName: "staff",
          pageID: "",
          pageURL: "/",
          page_id: "",
          CreatePermission: false,
          DelPermission: false,
          EditPermission: false,
          ViewPermission: false,
          FullAccess: false,
        },
        {
          pageName: "Admin",
          pageID: "",
          pageURL: "/",
          page_id: "",
          CreatePermission: false,
          DelPermission: false,
          EditPermission: false,
          ViewPermission: false,
          FullAccess: false,
        },
      ],
    },
    {
      moduleName: "Staff",
      module_id: "",
      module_icon: "",
      pages: [
        {
          pageName: "test",
          pageID: "",
          pageURL: "/staff",
          page_id: "",
          CreatePermission: false,
          DelPermission: false,
          EditPermission: false,
          ViewPermission: false,
          FullAccess: false,
        },
        {
          pageName: "test1",
          pageID: "",
          pageURL: "/staff",
          page_id: "",
          CreatePermission: false,
          DelPermission: false,
          EditPermission: false,
          ViewPermission: false,
          FullAccess: false,
        },
        {
          pageName: "test2",
          pageID: "",
          pageURL: "/staff",
          page_id: "",
          CreatePermission: false,
          DelPermission: false,
          EditPermission: false,
          ViewPermission: false,
          FullAccess: false,
        },
      ],
    },
  ];
  const allData = [];
  const handlingPermission = (item, pageIndex, permission) => {
    const findModule = allData.filter((i) => i.moduleName === item.moduleName);
    if (findModule.length === 1) {
      const checkPageexist = findModule[0]?.pages.find(
        (p) => p.pageName === item.pages[pageIndex].pageName
      );
      if (!checkPageexist) {
        findModule[0]?.pages.push(item.pages[pageIndex]);
      }
      findModule[0].pages[pageIndex][permission] =
        !findModule[0].pages[pageIndex][permission];
    } else {
      const test = {
        moduleName: "",
        module_icon: "",
        pages: [],
      };
      test.pages.push(item.pages[pageIndex]);
      test.moduleName = item.moduleName;
      test.pages[pageIndex][permission] = !item.pages[pageIndex][permission];
      allData.push(test);
    }
    console.log("allData", allData);
  };
  // const getPermissionValue = (item, pageIndex, permission) => {
  //   console.log('getPermissionValue');
  //   const findModule = allData?.filter(
  //     (i) => i?.moduleName === item?.moduleName
  //   );
  //   if (findModule.length === 1) {
  //     return findModule[0]?.pages[pageIndex][permission];
  //   } else {
  
  //     return false;
  //   }
  // };
  return (
    <TabsStyle.MainDiv>
      <Grid container>
        <Grid item xl={6} lg={6} mg={12} sm={12} xs={12}>
          <TabsStyle.InputLabel>
          <TabsStyle.MyInput
            User Group Name
            placeholder="Enter Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
              />
          </TabsStyle.InputLabel>
        </Grid>
        <Grid item xl={6} lg={6} mg={12} sm={12} xs={12}>
          <TabsStyle.InputLabel>
          <TabsStyle.MyInput
            User Role
            placeholder="Enter Role"
            value={userGroupRole}
            onChange={(e) => setuserGroupRole(e.target.value)}
              />
          </TabsStyle.InputLabel>
        </Grid>
      </Grid>
      <TabsStyle.TableDiv>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 530 }} aria-label="simple table">
            <TabsStyle.PermissionsTableHead>
              <TableRow>
                <TabsStyle.PermissionTableTitleHead>
                  Option
                </TabsStyle.PermissionTableTitleHead>
                <TabsStyle.PermissionTableTitleHead align="right">
                  View Only
                </TabsStyle.PermissionTableTitleHead>
                <TabsStyle.PermissionTableTitleHead align="right">
                  Create
                </TabsStyle.PermissionTableTitleHead>
                <TabsStyle.PermissionTableTitleHead align="right">
                  Update
                </TabsStyle.PermissionTableTitleHead>
                <TabsStyle.PermissionTableTitleHead align="right">
                  Delete
                </TabsStyle.PermissionTableTitleHead>
                {/* <TabsStyle.PermissionTableTitleHead align="center">
                    Full Access
                  </TabsStyle.PermissionTableTitleHead> */}
              </TableRow>
            </TabsStyle.PermissionsTableHead>
            <TableBody>
              {stateArray?.map((navModule, navModuleIndex) => {
                return navModule?.pages.map((navPage, navPageIndex) => {
                  return (
                    <>
                      <TableRow
                        key={navModuleIndex}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TabsStyle.PermissionTitletTxt
                          component="th"
                          scope="row"
                        >
                          {navPage.pageName}
                        </TabsStyle.PermissionTitletTxt>
                        <TableCell
                          style={{ paddingBottom: 10, paddingTop: 10 }}
                          align="right"
                        >
                          <Checkbox
                            onChange={() =>
                              handlingPermission(
                                navModule,
                                navPageIndex,
                                "ViewPermission"
                              )
                            }
                          />
                        </TableCell>
                        <TableCell
                          style={{ paddingBottom: 10, paddingTop: 10 }}
                          align="right"
                        >
                          <Checkbox
                            onChange={() =>
                              handlingPermission(
                                navModule,
                                navPageIndex,
                                "CreatePermission"
                              )
                            }
                          />
                        </TableCell>
                        <TableCell
                          style={{ paddingBottom: 10, paddingTop: 10 }}
                          align="right"
                        >
                          <Checkbox
                            onChange={() =>
                              handlingPermission(
                                navModule,
                                navPageIndex,
                                "EditPermission"
                              )
                            }
                          />
                        </TableCell>
                        <TableCell
                          style={{ paddingBottom: 10, paddingTop: 10 }}
                          align="right"
                        >
                          <Checkbox
                            onChange={() =>
                              handlingPermission(
                                navModule,
                                navPageIndex,
                                "DelPermission"
                              )
                            }
                          />
                        </TableCell>
                        {/* <TableCell
                          style={{ paddingBottom: 10, paddingTop: 10 }}
                          align="center"
                        >
                          <Checkbox
                            onChange={() =>
                              handlingPermission(
                                navModule,
                                navPageIndex,
                                "FullAccess"
                              )
                            }
                          />
                        </TableCell> */}
                      </TableRow>
                    </>
                  );
                });
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <PButton title="Add User Group" />
      </TabsStyle.TableDiv>
    </TabsStyle.MainDiv>
  )
  
}
